# PokéScan 3.2

13. November 2026. Schwerpunkt: leichter erreichbare Aktionen, übersichtlichere Einstellungen und genaueres Zuschneiden eigener Fotos.

## Karte öffnen

Oben stehen jetzt **Bearbeiten**, **Alben** und **Aktionen**. Unter Aktionen findest du Preis aktualisieren, Duplizieren und Entfernen jeweils mit kurzer Erklärung. Das bisherige schwer auffindbare Aufklappfeld entfällt. Der Kopf bleibt in höheren Ansichten beim Scrollen erreichbar; auf niedrigen Bildschirmen nimmt er keinen dauerhaft festen Platz ein. Die getrennten Reiter Übersicht, Preise und Bilder bleiben erhalten.

## Einstellungen

Vier Bereiche: **Aussehen, Profil, Karten und Daten**. Unter Aussehen siehst du zunächst nur Hell/Dunkel/Automatisch, die aktuelle Farbe mit „Ändern“ und den Stil. Alle 13 Farben und die eigene Farbe bleiben verfügbar, erscheinen aber erst in der Farbauswahl. Lesbarkeit, Kartendarstellung und Startwerte sind in zwei beschrifteten Abschnitten eingeklappt. Design zurücksetzen betrifft nur das Design und lässt sich rückgängig machen.

Bei der Erkennung bleiben die drei häufigsten Optionen direkt sichtbar. Weitere Erkennungs- und Standardwerte sowie zusätzliche Marktdaten sind aufklappbar. Unter Daten steht eine ehrliche Erklärung zum Gerätewechsel: Die aktuelle Version speichert lokal, Anmeldung und Cloud-Abgleich sind noch nicht verbunden.

## Foto bearbeiten

Nach der Fotoauswahl steht **Foto bearbeiten** direkt beim Scan. Der Editor bietet:

- automatische Vorschläge für die Außenränder, auch bei hochformatigen Fotos;
- vier verschiebbare Ecken und eine Lupe für die gewählte Ecke;
- Eckenwahl über große Schaltflächen, am PC Feinkorrektur mit Pfeiltasten (Umschalt = zehn Bildpixel);
- Drehen nach links/rechts, perspektivische Entzerrung und Zuschnitt-Vorschau;
- aufklappbare Helligkeit und Kontrast, mit Rücksetzen;
- Abbrechen ohne Übernahme sowie Original zurück bei neuen Scan-Fotos.

Auch gespeicherte eigene Vorder-/Rückseiten und eigene Referenzbilder können unter Bilder bearbeitet werden. Zuerst das gewünschte eigene Bild anzeigen, dann „Eigenes Bild bearbeiten“. Katalogbilder werden nicht verändert. Nach dem Speichern entsteht eine neue lokale Bilddatei; die vorige Quelle wird nicht sofort gelöscht. Im Editor bleibt das Ausgangsbild bis zum Übernehmen unverändert. Ein neues Scan-Foto wird durch eine inzwischen veraltete Bearbeitung nicht überschrieben.

Die Randerkennung verwendet geglättete Kanten, adaptive Schwellen und bei gleichmäßigem Hintergrund zusätzlich Farbunterschiede. Ohne eindeutige Außenränder wird ein Vorschlag zum manuellen Anpassen angezeigt. Bei bereits kartenförmigen Hochformaten werden kleine innere Bildfenster nicht automatisch als ganze Karte ausgeschnitten. Automatischer Zuschnitt ist eine Hilfe, keine garantierte Erkennung. Bei unruhigem Hintergrund, Hüllen, schwachen Rändern und Spiegelungen die Vorschau prüfen. Verlorene Schrift und Spiegelungen werden nicht rekonstruiert.

## Handy, Tablet und PC

Größere Touch-Ziele, Berücksichtigung des unteren Bildschirmrands, angepasste Dialoghöhen und ein unverzerrtes Bearbeitungsbild. Mobil bleiben die Einstellungen kompakt; der Editor ordnet Bild, Lupe und Vorschau untereinander an. Textfelder verwenden mobil eine geeignete Schriftgröße, um unbeabsichtigtes Vergrößern auf iOS zu reduzieren. Am Desktop ist mehr Platz für Details und eine parallele Vorschau vorhanden.

## Weitere Fehlerkorrekturen

Schnelle Foto-Importe behalten das zuletzt gewählte Foto. Asynchrone rechteckige Zuschnitte prüfen, ob das Ausgangsfoto noch aktuell ist. Gekreuzte oder zu kleine Eckpunkte blockieren die Übernahme. Einstellungen und Fotos behalten die bisherigen Speicherformate und Backup-Kompatibilität.

## Konten und APIs

Siehe **KONTEN-UND-APIS.md** für einen konkreten Ausbau mit Supabase, eine Firebase-Alternative und passende OCR-/KI-Techniken. In 3.2 wurden keine neue Cloud-Verbindung, keine Anmeldung und kein zusätzlicher kostenpflichtiger Dienst aktiviert. Bestehende TCGdex-Preise und der experimentelle lokale Bildvergleich bleiben verfügbar. Eine fehlende Marktreferenz wird weiterhin nicht durch eine KI-Schätzung ersetzt.

## Installation des Updates

1. In der bisherigen App ein **Komplett-Backup mit Fotos** exportieren.
2. ZIP entpacken. Alle App-Dateien und icons/ im bisherigen GitHub-Pages-Ordner ersetzen. Neue Dateien wie layout.js, layout.css, photo-rules.js und photo-editor.js unbedingt mit hochladen.
3. Dieselbe HTTPS-Adresse im selben Browser öffnen; unter Mehr → Daten nach Updates suchen und 3.2 übernehmen. Browserdaten nicht löschen.
4. Prüfen: Eine Karte öffnen → Aktionen, Mehr → Aussehen und ein Foto → Foto bearbeiten.

Auf iPhone/iPad kann die HTTPS-App über Safari → Teilen → Zum Home-Bildschirm hinzugefügt werden. Android bietet die Installation im Browsermenü an. Die Sammlung in einem anderen Browser oder auf einem anderen Gerät bleibt bis zur künftigen Synchronisierung unabhängig. Die Tests und tatsächlichen Geräteprüfungen sind in TESTS-3.2.md beschrieben.
