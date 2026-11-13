# Konten, Synchronisierung und hilfreiche APIs

Recherche: 13. November 2026. Diese Version enthält **keine angeschlossene Anmeldung und keine automatische Synchronisierung**. Karten, Fotos und Einstellungen liegen weiterhin lokal im jeweiligen Browser. Ein Login allein würde die Sammlung noch nicht abgleichen.

## Handy und PC verbinden: ja, das ist möglich

Für PokéScan empfiehlt sich Supabase als zusätzliche Infrastruktur. GitHub Pages kann die Oberfläche weiter kostenlos ausliefern; Anmeldung, Datenbank und private Fotos liegen dann im eigenen Supabase-Projekt. Auf beiden Geräten meldest du dich mit demselben Konto an. Änderungen werden lokal sofort gespeichert und später abgeglichen.

Der kostenlose Supabase-Tarif umfasst laut Preisseite zum Recherchezeitpunkt unter anderem 500 MB Datenbank, 1 GB Dateispeicher und 50.000 monatlich aktive Nutzer. Kostenlose Projekte können nach einer Woche Inaktivität pausieren; Limits und Konditionen können sich ändern. Gerade eigene Kartenfotos belegen schnell viel Speicher. Für echten Mailbetrieb müssen Versand und Rücksprungadressen eingerichtet werden.

### Was dafür konkret eingerichtet und programmiert werden muss

1. Ein eigenes Supabase-Projekt erstellen; Region, Authentifizierung und erlaubte Rücksprungadressen für die bisherige HTTPS-App festlegen. E-Mail-Link oder Passwort und optional ein unterstützter externer Login sind möglich.
2. Tabellen für Karten, Alben, Albumpositionen und Einstellungen anlegen. Jeder Datensatz erhält Benutzer-ID, unveränderliche eigene ID und Versionsnummer. Die Benutzer-ID kommt aus der überprüften Anmeldung.
3. Row Level Security aktivieren: Lesen und Ändern nur für den jeweiligen Besitzer. Private Storage-Buckets für eigene Fotos; Zugriff ebenfalls benutzergebunden. Temporäre signierte Bildadressen verwenden. Keine Administrator-/Service-Schlüssel im öffentlichen GitHub-Repository speichern.
4. Eine lokale Warteschlange für Änderungen ergänzen. Offline weiterarbeiten; nach Anmeldung/Verbindung ausstehende Änderungen hochladen und fremde Änderungen empfangen. Wiederholte Übertragungen dürfen keine Duplikate erzeugen.
5. Konflikte sichtbar behandeln: Wenn Handy und PC dieselbe Karte offline unterschiedlich ändern, beide Fassungen erhalten und eine Wahl anbieten. Löschungen als synchronisierte Markierungen behandeln. Keine ganze Sammlung still durch den letzten hochgeladenen Stand ersetzen.
6. Erste Übernahme mit Komplett-Backup absichern. Beim ersten Login ausdrücklich „Lokale Sammlung übernehmen“ anbieten. Abmelden und Wechsel zu einem anderen Konto dürfen lokale Daten nicht dem falschen Konto zuordnen.
7. Auf zwei Geräten testen: offline bearbeiten, gleichzeitig ändern, Fotos übertragen, abmelden, Passwort-/Linkablauf, RLS gegen fremden Zugriff, Wiederholung nach Verbindungsabbruch und Wiederherstellung aus Backup.

Für diese Schritte brauchst du Zugriff auf dein eigenes Projekt. Es wurden keine externen Konten angelegt und keine Sammlung oder Fotos hochgeladen. Bis dahin: auf Gerät A ein **Komplett-Backup mit Fotos** erstellen und auf Gerät B importieren. Das ist ein manueller Transfer und kein laufender Abgleich. Vor einem Import auch das Zielgerät sichern.

Offizielle Quellen: [Auth](https://supabase.com/docs/guides/auth), [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), [private Fotos](https://supabase.com/docs/guides/storage/security/access-control), [Preise und Grenzen](https://supabase.com/pricing), [Mailversand](https://supabase.com/docs/guides/auth/auth-smtp).

## Welche Erweiterungen sinnvoll sind

| Dienst / Technik | Nutzen für PokéScan | Voraussetzung / Grenzen | Stand in 3.2 |
| --- | --- | --- | --- |
| Supabase Auth, Postgres und Storage | Ein Konto für Handy und PC, private Sammlung und Fotos | Eigenes Projekt, sichere Zugriffsregeln und Konfliktbehandlung; Speicherlimits | Konkreter Ausbau beschrieben, nicht verbunden |
| Firebase / Firestore | Alternative für synchronisierte Daten mit Offline-Unterstützung auf Web, Android und iOS | Eigenes Projekt und Zugriffsregeln; nicht parallel zu Supabase einbauen, ohne klaren Grund | Recherchierte Alternative |
| TCGdex | Kartenkatalog und verfügbare Marktpreisreferenzen | Nicht jede Karte/Variante hat einen Preis; Zuordnung muss geprüft werden | Bereits angeschlossen |
| Google Cloud Vision OCR | Optionaler zweiter Textleser bei schwierigen Fotos | Server-Endpunkt, Abrechnung/Quoten und ausdrückliche Zustimmung vor Foto-Upload; kein geheimer API-Schlüssel im Frontend | Recherchierte Ergänzung, nicht angeschlossen |
| Google ML Kit Text Recognition | Texterkennung direkt auf Android/iOS | Native SDKs; für die jetzige PWA keine direkt austauschbare Bibliothek. Sinnvoll bei späterem nativen App-Ausbau | Zukunftsoption |
| Transformers.js / WebGPU | Lokale Modellbeschleunigung für Bildvergleich auf geeigneten Geräten | Modell-Download, Speicher und Browser-Unterstützung; ohne WebGPU Rückfall auf WASM nötig | Vorhandener experimenteller Bildvergleich unverändert; keine neue Genauigkeitszusage |
| Lokale Randerkennung und Perspektivkorrektur | Weniger Hintergrund, bessere Eingabe für OCR und Bildvergleich | Kontrast, Licht und eindeutige Außenränder erforderlich; Vorschau prüfen | In 3.2 verbessert, ohne Foto-Upload |

Offizielle Quellen: [Firestore offline](https://firebase.google.com/docs/firestore/manage-data/enable-offline), [TCGdex Datenlücken](https://tcgdex.dev/faq), [Cloud Vision OCR](https://docs.cloud.google.com/vision/docs/ocr), [ML Kit](https://developers.google.com/ml-kit/guides), [Transformers.js WebGPU](https://huggingface.co/docs/transformers.js/guides/webgpu).

## Meine Priorität für den nächsten Ausbau

Zuerst Konten und verlässliche Synchronisierung. Danach einen optionalen zweiten OCR-Dienst ergänzen und an echten, bestätigten Kartenfotos messen. Modelle dürfen Name, Nummer und Bild gemeinsam bewerten; die Druckvariante muss trotzdem bestätigt werden. Eine KI sollte **keine fehlenden Marktpreise, Verkäufe oder PSA-Werte erfinden**. Dafür wird eine passende, erlaubte Datenquelle benötigt. Zusätzliche Dienste allein beseitigen falsche Karten-/Varianten-Zuordnungen nicht.
