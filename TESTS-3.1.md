# Testbericht PokéScan 3.1

Stand: 12. November 2026.

## Ergebnisse

- 63 Node-Funktionstests mit `node --test tests/*.test.cjs` bestanden.
- 33 interne Browserprüfungen für die geänderten Bedienabläufe bestanden.
- Zusätzlich per echter Browser-Eingabe geprüft: Karte 700 ms gedrückt halten aktiviert die Auswahl, ohne die Detailansicht zu öffnen; Auswahl beenden funktioniert.
- JavaScript-Syntax und lokale Asset-Verweise geprüft.
- Mobile Ansichten bei 320/390 Pixel Breite kontrolliert: manuelle Eingabe, Kartendetails und Farbauswahl. Kein horizontaler Seitenüberlauf in den kontrollierten Ansichten.

## Neue Testfälle

Manuelles Speichern ohne Foto/Katalogtreffer und ohne automatische Netzsuche; eigene Referenz beim Anlegen; Bildauswahl „kein Bild“; eigene Referenz und Vollbild; klare Detailreiter; vereinfachte Bearbeitung; unabhängige Raster für Sammlung und Alben; Spalten auf Albumseiten ohne Veränderung der neun Fachpositionen; 13 sichtbare Farbfelder; tatsächlich angewendete neue Farbe und eigener Farbwert; lesbare Akzentbeschriftung; neue Profilfelder mit erneuter Einlesung; Werte ausblenden.

Mehrfachauswahl, Anzahl/Wert, Favoriten, Rückgängig ohne Verlust später hinzugefügter Karten, alle gefilterten Treffer wählen, Gruppen-Vorschau, freie Fächer unter Erhalt unbeteiligter Karten, Gruppen-Rückgängig, gezieltes Verschieben aus einem Ausgangsalbum. Eigene Referenzdateien im Backup und neue Fotoreferenzen beim Wiederherstellen. Preis-Cache aktualisieren, explizites Neuladen, klar beschrifteter englischer Rückgriff bei fehlendem deutschem Datensatz.

## Reale Preisdaten

Über HTTPS erfolgreich abgerufen: `sv03.5-006`, `sv03.5-001`, `swsh3-136`, `base1-4`, jeweils `/de/` und `/en/` bei TCGdex. Aufgezeichnete Varianten-/Preisblöcke liegen als reproduzierbare Fixtures in `tests/fixtures/`. Sie sind Stichproben vom Testzeitpunkt und keine aktuellen Standardwerte für die Sammlung.

Die Verarbeitung aller acht Antworten liefert positive EUR-Referenzen für die unmarkierte Standardoberfläche und, sofern vorhanden, die gewöhnliche Reverse-Variante. Unbekannte Auflagen und Grading fallen nicht auf Standardpreise zurück. Im Browser wurde außerdem `sv03.5-006` live gewählt und ein positiver EUR-Preis angezeigt.

Die übrigen Browserprüfungen verwenden isolierte, ausdrücklich als Testdaten bezeichnete Karten; für Fehler- und Cachefälle werden API-Antworten kontrolliert simuliert. Die internen Testseiten und Testkarten werden nicht mit der produktiven App ausgeliefert. Die 85 Browserprüfungen im Bericht zu 3.0 sind historische Ergebnisse; sie werden hier nicht als erneut komplett ausgeführt gezählt.

## Grenzen

Keine vollständige Katalog-/Preisabdeckung behauptet. Keine verifizierte PSA-Komplettdatenbank. Keine neuen Nachweise zur Trefferquote des experimentellen CLIP-Modells. Kein Test auf einem echten Samsung-Gerät, kein Android-Kamera-Berechtigungsdialog und keine Installation auf deinem GitHub-Pages-Ursprung. Diese Geräte-/Installationsprüfungen bleiben nach dem Upload erforderlich.
