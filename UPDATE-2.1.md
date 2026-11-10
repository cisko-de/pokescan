# PokéScan 2.1 – Karten hinzufügen und Erkennung

## Installation auf deinem bestehenden GitHub Pages

1. In der bisherigen App unter Einstellungen ein Komplett-Backup mit Fotos erstellen.
2. Diese ZIP entpacken. Alle enthaltenen App-Dateien im selben Repository und unter derselben Pages-Adresse ersetzen. Kein npm-Build nötig.
3. Warten, bis GitHub Pages die Änderungen veröffentlicht hat. In PokéScan unter Einstellungen auf „Auf App-Update prüfen“ und gegebenenfalls „Installieren“ tippen. Danach neu laden.
4. Sammlung und Fotos verwenden weiterhin dieselben Speicherkennungen. Browserdaten nicht löschen. Ein anderes Gerät, ein anderer Browser oder eine andere Domain hat einen eigenen Speicher.

## Was sich geändert hat

- Automatische Kartenvorschläge beim Tippen, mit kurzer Verzögerung gegen unnötige Anfragen. Name, Nummer und Set beeinflussen die Reihenfolge.
- Bis zu 500 gefundene Kandidaten werden berücksichtigt; jeweils 36 Bilder anzeigen und weitere Karten nachladen. Die Zahl ist eine Obergrenze, keine zugesicherte Trefferzahl.
- Nummernsuche berücksichtigt führende Nullen. Bei Angaben wie 4/102 werden bis zu 24 passende Kandidaten zusätzlich auf die offizielle Setgröße geprüft.
- Toleranter Namensabgleich bei OCR-Fehlern und erfolgloser Suche. Der dazu geladene Kartenindex wird auf dem Gerät zwischengespeichert.
- Große Kartenbilder mit einheitlichem Seitenverhältnis. Fehlende WebP-Bilder werden als PNG erneut versucht. Bei fehlenden Bildern wird eine weitere Referenzsprache geprüft und im Bild gekennzeichnet. Fehlende Originale können nicht immer ersetzt werden.
- Getrennte OCR-Bereiche für den Titel und kleine Nummern am unteren Kartenrand. Mehrere Aufbereitungen, Kontrastanpassung und invertierter Durchgang für helle Zeichen. Nummern werden getrennt mit einem lateinischen Modell gelesen.
- Fortschritt, Abbrechen und verständliche Hinweise bei nicht erreichbaren Modellen. Die Suche toleriert zusätzliche oder falsch gelesene Zeichen; ein Treffer wird weiterhin von dir bestätigt.
- Automatische Suche nach Kartenrändern, Drehung zur Hochformatausrichtung und Perspektivkorrektur. Ein bereits im Kartenformat vorliegendes Bild wird vorsichtshalber nicht nochmals automatisch zugeschnitten.
- Manuelle Vierpunktkorrektur und Wiederherstellung des vorbereiteten Originalfotos. Der bisherige Zuschnitt mit Reglern bleibt verfügbar.
- Alle Auswahlfelder werden durch eigene Menüs ersetzt, auch beim Bearbeiten, in Filtern und im Profil. Lange Listen haben eine Suche. Escape, Pfeiltasten, Home und End werden unterstützt.
- Einstellungen für automatischen Zuschnitt, Live-Suche, automatischen Bildvergleich nach OCR, Bildqualität, Suchsprachen, OCR-Gründlichkeit, Standardsprache, Standardzustand und bevorzugte Preiskennzahl.

## Sprachen und Erkennungsgrenzen

Wählbare OCR-Sprachen / Schriftvarianten:
Deutsch, Englisch, Japanisch, Chinesisch (vereinfacht), Chinesisch (traditionell), Koreanisch, Französisch, Spanisch, Italienisch, Portugiesisch, Niederländisch, Polnisch, Russisch, Thailändisch und Indonesisch.

Vor dem Scannen die Sprache der tatsächlichen Karte wählen. Das passende OCR-Modell wird beim ersten Gebrauch heruntergeladen. Ein Sprachhinweis aus dem gelesenen Text ist nur eine Vermutung; insbesondere chinesische und japanische Schrift ist nicht immer eindeutig unterscheidbar. Die App lädt nicht automatisch alle Sprachmodelle auf einmal.

OCR-Sprachen und Kartenkatalog-Abdeckung sind unterschiedliche Dinge. Manche Sets, Übersetzungen oder Bilder fehlen in der Datenquelle. Asiatische Setnummern müssen nicht mit westlichen Sets übereinstimmen. Eine fremdsprachige Referenz ist deshalb keine Garantie für dieselbe Druckausgabe. Set, Kartennummer und Sprache am Treffer kontrollieren.

Die Erkennung läuft lokal mit Tesseract.js und einem einfachen Referenzbildvergleich. Es gibt keine zusätzliche Cloud-KI, kein neu trainiertes Pokémon-Klassifikationsmodell und keine Garantie auf fehlerfreie Erkennung. Glanz, 1st Edition, Shadowless, Echtheit und Zustand müssen selbst bestätigt werden. Zuschnitt funktioniert am besten mit einer einzelnen vollständig sichtbaren Karte auf ruhigem Hintergrund. Mehrere Karten, starke Spiegelungen, verdeckte Ecken und unruhiger Hintergrund können fehlschlagen. In diesem Fall die vier Ecken selbst markieren oder das Original wiederherstellen. Eine auf dem Kopf stehende Karte gegebenenfalls manuell drehen.

## Preise

- EUR-Referenzpreise mit Trend, Ab-Preis sowie 7- und 30-Tage-Mittel, soweit vorhanden. Die tatsächliche Kennzahl und das Datum der Quelle werden genannt.
- Detaildaten der Druckvariante werden bevorzugt. Standard-Holo-Produkt und Reverse-Serie werden getrennt behandelt. Gibt es keine eindeutige Zuordnung, bleibt der EUR-Preis offen.
- Spezialauflagen erhalten nur dann einen Wert, wenn der konkrete Datensatz eindeutig passt. Wenn verschiedene Spezialvarianten denselben Anbieter-Produktcode teilen, wird daraus kein genauer Variantenwert behauptet.
- USD-Marktwerte von TCGplayer erscheinen gegebenenfalls separat, auch für Reverse Holo. Es gibt keine versteckte Umrechnung in den EUR-Sammlungswert.
- Eigene EUR-Schätzung als ausdrücklich manuelle Preisquelle. Sie ist vom Kaufpreis getrennt und wird als Referenzwert gespeichert.
- Bevorzugter Trend oder 7-/30-Tage-Mittel in den Einstellungen. Fehlt die gewünschte Kennzahl, zeigt die App die verwendete Ersatzkennzahl ausdrücklich an.
- Veraltete oder undatierte Preisstände werden gekennzeichnet. Offline wird ein Preisabruf nicht als frischer Marktpreis dargestellt.

Referenzwerte sind keine Bewertung deiner tatsächlichen Karte nach Zustand oder Sprache und keine Verkaufsgarantie. Quellen können fehlerhafte oder unvollständige Zuordnungen enthalten.

## Prüfung dieser Version

16 automatisierte Tests für Backup-Kompatibilität, Dubletten, OCR-Zeichen und Namen, Modellzuordnung, Perspektivgeometrie, Randdetektion, Währungen und Variantenpreise.

Im Desktop-Browser praktisch geprüft: bebilderte Namenssuche, Fremdsprachen-Ersatzbilder, Setgrößen-Sortierung, Trefferübernahme, EUR-/USD-Preisanzeige, eigene Wertschätzung speichern, Zustand im neuen Menü ändern, automatischer Zuschnitt einer gedrehten Karte vor Hintergrund sowie englische und japanische OCR-Beispiele. Beim japanischen Beispiel lieferte der Name passende Treffer; die kleine Kartennummer blieb unklar und wurde nach der Trefferauswahl aus dem Katalog übernommen.

Chinesisch, Koreanisch und die weiteren Modelle sind eingebunden, aber noch nicht anhand echter Kartenbilder durchgehend geprüft. Keine Zusicherung einer bestimmten Trefferquote. Ein physisches Android-Gerät und neue vollständige Foto-Backup-Rundläufe wurden in dieser Version nicht getestet.

Tests mit Node.js: node --test tests/*.test.cjs

## Technische Quellen

- TCGdex Karten, Varianten und Preisfelder: https://tcgdex.dev/reference/card
- TCGdex Bildformate: https://tcgdex.dev/assets
- TCGdex Sprachkennungen: https://github.com/tcgdex/cards-database/blob/master/interfaces.d.ts
- Tesseract.js API: https://github.com/naptha/tesseract.js/blob/master/docs/api.md
- Tesseract Sprachmodelle: https://tesseract-ocr.github.io/tessdoc/Data-Files-in-different-versions.html
