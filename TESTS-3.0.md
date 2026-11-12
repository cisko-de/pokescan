# Testbericht PokéScan 3.0

Stand: 12. November 2026.

## Bestanden

- **44 Node-Funktionstests** mit `node --test tests/*.test.cjs`.
- **41 Browserprüfungen** für bestehende Funktionen.
- **44 weitere Browserprüfungen** für die neuen Funktionen.
- Syntaxprüfung aller JavaScript-Dateien.
- Mobile Layoutprüfung in 320-/390-Pixel-Iframes im Chromium-Browser. Kein horizontaler Seitenüberlauf in den kontrollierten Karten-/Albumansichten.
- Eine zusätzliche echte Zeiger-Ziehbewegung: Glurak von Fach 1 in das freie Fach 2. Ergebnis im sichtbaren Album und Rückgängig-Meldung bestätigt.

## Abgedeckte Fälle

Suche mit 137 physischen Treffern über zwei Katalogseiten; Ausblenden digitaler Pocket-Karten; nachladbare Ergebnisliste; Zwei-Karten-Vergleich; gemeinsame Suchzeile; bestätigte Zuordnungen merken; Offline-Katalog inklusive altem Abrufdatum; veraltete Suchantwort nach Zurücksetzen ignorieren.

EUR/USD trennen; Oberflächenwahl vor Preisübernahme; separate Reverse-Serie; keine Preisübernahme aus mehrdeutigen Druckvarianten; keine Standardpreis-Übernahme für unbekannte Auflagen, Shadowless oder Grading; Diagramme aus gespeicherten Beobachtungen; getrennte PSA-Stufen; eigene Verkaufsdaten mit Quelle; Kostenrechner mit Gebühren; Preisprobleme eingrenzen.

Mehrfachbearbeitung ohne Verlust bisheriger Albumzuordnungen; Preisrücksetzung bei Sprachänderung; Unteralben ohne Eltern-Zyklen; Lücken in festen Fächern; belegte Fächer tauschen; Zielposition 22; leere Seiten; Blättern mit Lücken; Abbruch einer Ziehgeste; Rückgängig; unabhängige Reihenfolge normaler Alben; seitenübergreifendes Verschieben; Tastaturbedienung; Mehrfachauswahl beim Suchen.

Front-/Rückseiten und Cover im vollständigen Backup; Remapping ihrer Fotoreferenzen beim Import; alte Backupformate; Vollbild-Zoom; Schnellscan übernimmt Sprache/Zustand und bleibt aktiviert; gefüllte Herzen; Bearbeiten erhält offene Eingaben; Verwerfen-Dialog; leere Filteransicht; Ersatz-Bilddecoder; gleiche Datei erneut aufnehmen; fehlgeschlagener Zuschnitt; ungültiges Bild; Set-Fortschritt und Wunschliste; gespeicherte Darstellungsoptionen.

## Testgrenzen

Die Browser-Datenprüfungen verwenden klar gekennzeichnete, isolierte Testdaten und simulierte API-Antworten. Sie belegen die App-Logik und Bedienabläufe, nicht die Verfügbarkeit oder Vollständigkeit der Anbieter. Testdaten und interne Browser-Testseiten sind nicht in der produktiven ZIP enthalten.

Direkte Abrufversuche bei TCGdex scheiterten in dieser Umgebung mit „Failed to fetch“. Deshalb wurden weder eine erfolgreiche aktuelle Live-Preisabfrage noch die heutige Katalogabdeckung nachgewiesen. Es wird nicht behauptet, dass jede Karte einen Preis besitzt.

Der optionale CLIP-Download und eine erfolgreiche Modell-Erkennung wurden nicht bestätigt. Ebenso nicht: echte Android-Kamera-/Berechtigungsdialoge, gerätespezifische Speichergrenzen, tatsächliche Touchgesten auf einem Android-Gerät und die Installation auf deinem GitHub-Pages-Ursprung. Der Zeigertest lief im Chromium-Testbrowser. OCR-/Modellgüte ist damit nicht prozentual messbar.

Für den Test nach dem Upload: Backup erstellen, App aktualisieren, eine bekannte Normal-/Holo-/Reverse-Karte mit Name und Nummer suchen, Quellenstand prüfen, dieselbe Suche anschließend offline öffnen und ein Albumfach per Antippen verschieben. Für die neue Version alle enthaltenen App-Assets mit hochladen.
