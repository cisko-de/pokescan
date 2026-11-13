# Testbericht PokéScan 3.2

13. November 2026. Geprüft im lokalen Chromium-Browser und mit Node. Testkarten waren ausdrücklich als Testdaten markiert; sie werden nicht mit ausgeliefert.

## Ergebnis

- **69 Node-Tests bestanden** (`node --test tests/*.test.cjs`). Alle bisherigen Tests plus sechs neue Tests für Bildbearbeitung und Randerkennung.
- **58 interne Browserprüfungen bestanden**: 33 bisherige Abläufe erneut ausgeführt und 25 neue Prüfungen. Die Browser-Testseiten sind ausschließlich Entwicklungswerkzeuge und nicht Teil der ZIP.
- Syntax aller 26 JavaScript-Dateien und lokale HTML-/Service-Worker-Asset-Verweise geprüft.
- Drei zentrale Ansichten bei jeweils **320, 390, 768, 1024 und 1440 Pixel Frame-Breite** untersucht: Kartendetails, Aussehen und Fotoeditor. Seiten-Scrollbreite entsprach der verfügbaren Breite. Offene Dialoge hatten keinen inneren horizontalen Überlauf. Die tatsächliche Inhaltsbreite ist bei eingeblendeten Browser-Scrollleisten etwas geringer als die Frame-Breite.
- Aktionen- und Farbauswahl zusätzlich bei 320 Pixel geprüft: kein innerer horizontaler Überlauf.
- Zusätzlich mit echter Browser-Eingabe: Aktionen und Farbauswahl öffnen/schließen; Eckpunkt am Foto mit dem Zeiger ziehen und per Pfeiltaste verschieben. Übernehmen blieb aktiv. Proportionen des sichtbaren Canvas stimmen mit dem Bildformat überein.

## Neue Browserprüfungen

Gemeinsamer Detailkopf; Aktionsmenü mit Kartenname und drei erklärten Befehlen; Duplizieren; Entfernen öffnet Bestätigung ohne verdeckenden zweiten Dialog. Drei sichtbare Designgruppen und zwei geschlossene Zusatzbereiche; 13 Farben in eigener Auswahl; angezeigte aktuelle Farbe; Design zurücksetzen und rückgängig ohne Änderung der Sammlung; drei häufige Scan-Optionen direkt sichtbar.

Fotoeditor mit gültigem Vorschlag und Lupe; Feinkorrektur über Tastatur; Drehen; Helligkeitsanzeige; Abbrechen ohne Änderung; blockierte Übernahme bei gekreuzten Ecken; Speichern und Erhalt des Originals; korrektes Kartenformat; Original zurück; ältere Bearbeitung überschreibt kein inzwischen neu gewähltes Bild; automatische Prüfung kartenförmiger Hochformat-Fotos; konservativer Schutz gegen kleine innere Bildfenster; gespeichertes eigenes Bild öffnen und als neue Fotodatei sichern; zwei überlappende Foto-Importe behalten den zuletzt gewählten Eintrag.

Dabei wurde ein tatsächlicher Fehler behoben: Ein verzögertes close-Ereignis eines zuvor geschlossenen Fotoeditors konnte die Bearbeitung nach erneutem Öffnen leeren. Ein solches Ereignis räumt einen inzwischen wieder offenen Editor nicht mehr ab. Die komplette neue Browserfolge wurde danach erfolgreich wiederholt.

## Erneut geprüfte bisherige Abläufe

Manuelle Karte ohne Foto und ohne automatische Suche; eigene Referenz; Übersicht/Preise/Bilder und Bearbeiten; kein Bild; Vollbild; unabhängige Spaltenzahlen; Albumseiten und freie Fächer; Profil/Werte ausblenden; Mehrfachauswahl/Favoriten/Rückgängig; Gruppenplatzierung und gezieltes Verschieben; Foto-Backup und Wiederherstellung; veraltete Preise im Cache, explizite Aktualisierung und englische Marktreferenz bei fehlendem deutschen Datensatz.

Im Browser wurde außerdem `sv03.5-006` bei TCGdex live ausgewählt und ein positiver EUR-Preis geladen. Acht aufgezeichnete Anbieterantworten vom 12. November werden weiter als reproduzierbare Fixtures geprüft, nicht als aktuelle Standardpreise verwendet. Die übrigen Cache-/Fehlerfälle verwenden kontrolliert simulierte Antworten.

## Neue reine Funktionstests

Begrenzte Helligkeit und Kontrast, unveränderte Quelle und Alpha-Kanal; Kartenformat des zentrierten Vorschlags in Hoch-/Querformat und quadratischem Bild; vier Drehungen und Rückdrehung; begrenztes Verschieben; ungültige/zu kleine/gekreuzte Ecken; synthetische Außenränder mit geringem Kontrast und trapezförmiger Perspektive; leere und ungültige Fotos liefern keinen erfundenen Kartentreffer.

## Grenzen

Die neuen Randerkennungsfälle sind synthetische Geometrie-/Kontrastproben, keine gemessene Trefferquote auf vielen realen Kamerafotos. Kein Nachweis, dass Hüllen, komplexe Hintergründe, Glanz oder jede Druckvariante automatisch korrekt erkannt werden. Die Vorschau bleibt erforderlich.

Keine Prüfung auf echtem iPhone/iPad, Samsung/Android, in Safari oder mit einer physischen Kamera. Responsive Chromium-Ansichten ersetzen diese Geräteprüfungen nicht. Auch Installation, Kamera-Berechtigung und Update auf deinem GitHub-Pages-Ursprung müssen nach dem Upload kontrolliert werden. Keine neue Bewertung der experimentellen KI-Genauigkeit, keine vollständige Preis-/PSA-Abdeckung und kein Cloud-Sync-Test: Ein Backend ist noch nicht verbunden.
