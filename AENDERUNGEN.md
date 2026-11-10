# Version 2.1

Kartenvorschläge, lokaler OCR-Ablauf, 15 OCR-Sprach-/Schriftvarianten, automatischer und manueller Perspektivzuschnitt, eigene Auswahlmenüs, Variantenpreise und Scan-Einstellungen. Details und Prüfgrenzen: [UPDATE-2.1.md](UPDATE-2.1.md).

# PokéScan 2.0

## Oberfläche und Bedienung

- Neues, ruhigeres Design mit einheitlichen Farben, Icons und Bedienelementen.
- Android-Navigation und responsive Desktop-Ansicht; helle, dunkle und
  geräteabhängige Darstellung; fünf konsistente Akzentfarben.
- Aussagekräftige Leerzustände, deutliche Fokusmarkierungen und Dialoge statt
  Browser-Prompts. Weniger direkte Löschaktionen auf Kartenkacheln.
- Dashboard mit Referenzwert, Preisabdeckung, erfassten Kaufkosten und
  Backup-Erinnerung. Keine erfundenen Karten oder Beispielpreise in der Sammlung.

## Scan und Kartenverwaltung

- Fotozuschnitt mit Reglern oder gezogenem Rahmen; Drehen, Bildkomprimierung.
- Scan-Warteschlange mit einzeln geprüften Bildern und Weiterführung nach Speichern.
- Lokale OCR mit Ergebnisprüfung; Suche in DE/EN, optional japanische Ausgabe.
- Lokaler Bildvergleich funktional ersetzt; optional Vergleich innerhalb eines
  Sets. Fehler der bisherigen Fingerprint-Variable beseitigt.
- Set, Kartennummer und Seltenheit aus einem bestätigten Datenbanktreffer.
- Finish, Auflage und Shadowless getrennt, alte Varianten bleiben verständlich.
- Zustand startet als „Ungeprüft“ statt pauschal „Near Mint“.
- Zusatzfelder werden zusammen mit der Bearbeitung zuverlässig gespeichert.
- Suche über Tags und Notizen, Set-/Sprach-/Variantenfilter, Tausch- und
  Verkaufsstatus, weitere Sortierungen und kompakte Listenansicht.
- Dubletten berücksichtigen Sprache, Zustand, Finish, Auflage und Grading.
- Entfernte Karten können kurzfristig wiederhergestellt werden; Fotos bleiben
  zur Sicherheit erhalten. Änderungen werden lokal protokolliert.

## Sammlung und Daten

- Blätterbares Album mit neun Fächern pro Seite, Wischen und Pfeiltasten.
- Eigenständige Wunschliste mit Set, Budget und Übergang zur Kartensuche.
- Haupt-Backup enthält jetzt tatsächlich Fotos, Profil und Wunschliste.
- Einheitlicher Import für v1–v4, strenge Validierung und vorab gespeicherte
  Fotoobjekte. Fehlerhafte Einträge werden nicht stillschweigend verworfen.
- CSV mit Schutz vor der Interpretation von Text als Tabellenformel.
- Preisabrufe einzeln und für die Sammlung; fehlende Daten überschreiben keine
  vorhandenen Werte. Lokale Preisbeobachtungen mit Variantenkennzeichnung.
- Normal-/Holo-Preise werden nicht als Reverse-, First-Edition-, Shadowless-
  oder Grading-Preise ausgegeben.
- Begrenzter Offline-Cache für API-Daten und Referenzbilder; kontrollierte Updates.
- Synchronisierte Anzeige bei Änderungen in einem anderen Browser-Tab.

## Weiterhin offen

Allgemeine KI-Erkennung, automatische sichere Druckvariantenbestimmung,
Cloud-Konten/Synchronisierung, Push-Preisalarme und Zustandsbewertung.
Der neue Bildvergleich ersetzt kein trainiertes Identifikationsmodell.
