# Testbericht – PokéScan 2.3

Prüfung vom 11.11.2026. Testdaten und interne Vorschauseiten sind nicht in der App enthalten.

## Automatisierte Tests: 29 bestanden

Ausführen mit installiertem Node.js: `node --test tests/*.test.cjs`.

- Einfügen vor und nach einem Ziel in beiden Verschieberichtungen; Anfang, Ende, eigene Position und ungültige Ziele.
- 300 aufeinanderfolgende Verschiebungen einer Sammlung aus 150 Karten: vollständige Mitgliedschaft, keine Dubletten und unveränderte Reihenfolge der übrigen Karten.
- Unabhängige Albumreihenfolgen, neue und entfernte Karten, Seitengrenzen und Backup-Rundlauf.
- Bestehende Prüfungen für OCR-Helfer, Sprachen, Zuschnitt-Geometrie, Dubletten, Variantenpreise, Währungen und alte Backup-Formate.

## Browserprüfungen: 41 bestanden

Geprüft mit lokalen Beispieldaten und echten browserseitigen Speicher- und Bildfunktionen:

- Zugänglicher Zurück-Pfeil; gefüllte Herzen in Karten und Details; Aktualisierung der Favoritenansichten.
- Kompakte Kartendetails, eingeklappte Nebenaktionen und Erkennung ungespeicherter Bearbeitungen.
- Favoritenänderung während einer Bearbeitung ohne Verlust der Eingaben; Abbrechen und bestätigtes Verwerfen.
- Ziehgriffe, korrekte Hervorhebung, Antippen und Platzieren, Rückgängig und getrennte Albumreihenfolgen.
- Genaue Position auf anderer Seite, Fokus in sichtbarer Ansicht, Tastatursteuerung, Erhalt der Reihenfolge beim Umbenennen.
- Abgebrochener Zeiger ohne Datenänderung; Entfernen der Ziehmarkierungen.
- Blättern während einer gehaltenen Verschiebung und anschließendes Ablegen auf der neuen Seite.
- Verlassen und erneutes Öffnen eines Albums beendet den Anordnen-Modus.
- Mehrfachauswahl über unterschiedliche Suchbegriffe und gemeinsames Hinzufügen ohne Dubletten.
- Zurücksetzen von Filtern und alle unterstützten Sprachen in eigenen Auswahlmenüs.
- Tatsächlicher vollständiger Backup-Export und Import einschließlich 16 Fotos sowie Albumreihenfolgen.
- Kamera-Bilddatei ohne gemeldeten Dateityp, Ersatzdecoder, wiederholte Bildauswahl, fehlgeschlagener Zuschnitt und sichtbarer Fehler bei ungültigen Bilddaten.
- Persistierte Albumreihenfolge im Browserspeicher.

## Zusätzliche Sicht- und Bedienprüfung

- Tatsächliches Ziehen mit der Maus in einem schmalen Blätteralbum: Pikachu wurde hinter Glurak einsortiert; die übrigen Karten blieben unverändert und vollständig sichtbar.
- 390- und 320-Pixel-Rahmen, einschließlich größerer Fächer beim Anordnen auf sehr schmalen Geräten. Kein horizontales Überlaufen in den geprüften Ansichten.
- Verschiebesteuerung in den geprüften schmalen Ansichten mindestens 44 Pixel hoch und 44 Pixel breit.
- Helle und dunkle Darstellung, ausgefüllte Favoritenherzen, eigene Auswahlmenüs und Symbolnavigation.

## Grenzen

Die Prüfungen verwenden Chromium im Browser und lokale Beispieldaten. Physische Android-Touchgesten und die Kamera des konkreten Nutzergeräts sind nicht abgedeckt. Ein realer Netzausfall und die Erkennung aller Sprachmodelle wurden in diesem Update nicht erneut praktisch geprüft. Referenzpreise hängen weiterhin von externen Datenquellen ab und sind keine Verkaufsgarantie.
