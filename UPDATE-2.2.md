# PokéScan 2.2 – einfacher hinzufügen und sortieren

## Auf GitHub aktualisieren

1. In der bisherigen App unter Einstellungen ein Komplett-Backup mit Fotos erstellen.
2. Diese ZIP entpacken. Den gesamten Inhalt in dasselbe GitHub-Pages-Repository hochladen und bestehende Dateien ersetzen. `index.html` muss im bisherigen Veröffentlichungsordner liegen.
3. Nach der Veröffentlichung die App neu öffnen und das bereitstehende Update installieren. Bei Bedarf unter Einstellungen auf „Auf App-Update prüfen“ tippen.
4. Sammlung und Fotos prüfen. Die bisherigen Speicher-Schlüssel und die Fotodatenbank bleiben erhalten. Ein Wechsel von Domain, Repository-Pfad, Browser oder Gerät kann einen Backup-Import erfordern.

## Hinzufügen und Bearbeiten

- Drei klare Abschnitte: Foto, Karte auswählen, Prüfen & Speichern.
- Foto-Werkzeuge, Bildvergleich, Set-Suche, Preisdetails und seltene Angaben liegen in aufklappbaren Bereichen.
- Nach einer Trefferauswahl werden die Bildvorschläge eingeklappt. „Andere Karte wählen“ öffnet sie wieder.
- Name, Finish, Zustand, Anzahl und Album sind direkt erreichbar. Auflage, Notizen, Tags und weitere Angaben bleiben verfügbar.
- Auch die Bearbeitungsansicht zeigt zunächst die wichtigsten Angaben. Set, Nummer, Alben und Zusatzangaben lassen sich gezielt aufklappen.
- Alle Auswahlfelder verwenden weiterhin eigene, durchsuchbare Auswahlmenüs.

## Fotos und Texterkennung

- Kamera- und Galerie-Dateien ohne MIME-Typ werden nicht mehr aussortiert.
- Wenn der schnelle Bilddecoder scheitert, wird ein zweiter Decoder verwendet. Unterstützte Formate hängen weiterhin vom Browser ab; JPG ist die zuverlässigste Kameraeinstellung.
- Die übernommene Vorschau erscheint vor dem optionalen automatischen Zuschnitt. Schlägt die Randprüfung fehl, bleibt das Original nutzbar.
- Dasselbe Bild kann wiederholt ausgewählt werden; Fehler erscheinen direkt bei der Vorschau.
- Kartensprache standardmäßig automatisch: Schriftanalyse im Textbereich und typische Kartenwörter helfen bei der Modellwahl. Eine manuelle Sprachwahl ist weiterhin möglich. Unsichere Sprachen werden nicht als sicher erkannt ausgegeben.
- OCR nutzt breitere Namensbereiche und den Kartenfuß. Alternative Namenslesungen werden mit tatsächlichen Katalognamen abgeglichen, statt nur den internen OCR-Messwert zu verwenden.
- OCR lässt Tesseract die passenden Kern- und Sprachdateien wählen, statt eine zusätzliche feste Kombination von Downloadquellen vorzugeben.
- Nach einmaliger Aktivierung kann die Erkennung direkt nach der Fotoübernahme starten. In den Einstellungen abschaltbar; automatische Sprachwahl ist separat steuerbar.
- Fotos werden lokal verarbeitet. Tesseract und Sprachmodelle benötigen beim ersten Download Internet. Es ist kein zusätzlicher Cloud-KI-Dienst eingebaut.

## Alben

- „Karten anordnen“ aktiviert Ziehgriffe in Übersicht und Blätteralbum.
- Karten lassen sich am Griff mit Maus oder Finger verschieben. Pfeile und Tastatur sind als Alternative vorhanden.
- Jede Albumreihenfolge wird separat gespeichert. Die Reihenfolge der allgemeinen Sammlung und anderer Alben wird dadurch nicht verändert.
- Pfeile können Karten über Seitengrenzen verschieben. Neue Karten werden hinten angehängt.
- Albumreihenfolgen bleiben beim Umbenennen und im Komplett-Backup erhalten.

## Vorschläge und Preise

- Namensähnlichkeit wird bei gemischter Namens-/Nummernsuche stärker berücksichtigt. Fehlertolerante Namen werden auch ergänzt, wenn bereits einige Nummerntreffer vorhanden sind.
- Große Bildvorschläge, Nachladen und Sprachhinweise bleiben erhalten.
- Preis steht kompakt bei „Prüfen & Speichern“; Herkunft, Preisdatum, Varianten und eigene Schätzung im aufklappbaren Preisbereich.
- Ein Referenzpreis ist keine sprach-, zustands- oder gradinggenaue Bewertung. Spezialvarianten erhalten weiterhin nur eindeutig zugeordnete Werte.

## Grenzen und Prüfung

21 automatisierte Tests für Datenregeln, Backup-Kompatibilität, Preiszuordnung, OCR-Helfer, Geometrie und Albumreihenfolge. Browserprüfungen umfassen MIME-lose Bilder, Decoder-Fallback, sichtbare Fehler, Fotospeicherung, Bearbeiten, eigene Auswahlmenüs und Albumanordnung. Die echte OCR wurde mit einem englischen Base-Set-Pikachu und einer japanischen Pikachu-Referenz geprüft: Sprache und Sammlernummer wurden automatisch erkannt. Andere Sprachen sind eingebunden, aber nicht umfassend praktisch geprüft. Die tatsächliche Erkennung hängt vom Foto ab.

Die konkrete Android-Kamera kann hier nicht physisch getestet werden. Sprach- und Druckmerkmale sind weiterhin prüfpflichtig; insbesondere chinesische Schriftvarianten und kurze/unscharfe Texte lassen sich nicht immer automatisch unterscheiden. Internetdatenbanken enthalten nicht jede Karte oder zu jeder Karte ein Bild.
