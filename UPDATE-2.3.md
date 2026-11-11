# PokéScan 2.3 – übersichtlicher sammeln und Alben ordnen

## Update auf GitHub Pages

1. In der bisherigen App unter Einstellungen ein **Komplett-Backup mit Fotos** erstellen.
2. Die ZIP entpacken und ihren gesamten Inhalt in dasselbe GitHub-Repository hochladen. Bestehende Dateien ersetzen. `index.html` bleibt im bisherigen Veröffentlichungsordner.
3. Nach der Veröffentlichung die App neu öffnen und ein bereitstehendes Update installieren. Alternativ: Einstellungen → Auf App-Update prüfen.
4. Sammlung, Alben und eigene Fotos prüfen. Die bisherigen Speicher-Schlüssel und die Fotodatenbank werden weiterverwendet. Bei einem Wechsel von Domain, Browser oder Gerät ist ein Backup-Import erforderlich.

## Alben: verschieben ohne Rätselraten

- **Anordnen** schaltet die Verschiebesteuerung ein. **Fertig** beendet den Modus. Beim Verlassen eines Albums wird die Auswahl aufgeräumt.
- **Ziehen am Punktgriff:** Eine kleine Vorschau folgt dem Zeiger. Eine Linie markiert die Zielposition vor oder nach einer Karte. Nur die gezogene Karte wird abgedunkelt.
- **Ohne Ziehen:** Den Griff antippen und danach die Zielkarte wählen. Erneutes Antippen des Griffs oder Escape hebt die Auswahl auf.
- **Genaue Position:** Das Pfeilkreuz öffnet eine kleine Eingabe für die Position im Album. Seite und Fach werden dazu angezeigt. Damit sind auch größere Sprünge einfach.
- **Seitenübergreifend:** Eine gezogene Karte kurz über einen Blätterpfeil halten, dann auf der neuen Seite ablegen. Alternativ direkt eine Position auf einer anderen Seite eingeben.
- **Rückgängig:** Nach einem Verschieben kann die vorige Reihenfolge über die Meldung wiederhergestellt werden. Aktionsmeldungen bleiben bis zu 15 Sekunden sichtbar.
- **Tastatur:** Links/rechts bewegen um eine Position, oben/unten um eine Rasterzeile; Home/End an Anfang/Ende. Der Fokus folgt der Karte in der sichtbaren Ansicht.
- Abbrechen, Zeigerverlust oder Verlassen des Fensters hinterlassen keine halb gespeicherte Verschiebung.
- Jede Albumreihenfolge bleibt unabhängig. Andere Alben und die allgemeine Sammlung behalten ihre Reihenfolge. Neue Karten werden hinten ergänzt.
- **Karten hinzufügen** erlaubt die Auswahl mehrerer vorhandener Karten direkt im Album. Die Auswahl bleibt beim Wechsel des Suchbegriffs bestehen. Eine neue Karte kann von dort ebenfalls gescannt werden.

## Favoriten und Navigation

- Favoriten haben ein **vollständig gefülltes Herz** und eine deutlichere Umrandung. Das gilt für Kartengitter und Detailansicht; im Blätteralbum erscheint eine Herzmarkierung.
- Der Favoritenbereich und die Favoritenzahl werden direkt aktualisiert. Eine Meldung bestätigt Hinzufügen oder Entfernen.
- Zurück zu den Alben, Album bearbeiten und Blättern verwenden kompakte Symbole mit zugänglichen Beschriftungen und Hinweisen.
- Die Albumansicht zeigt den Albumnamen und die wichtigen Aktionen direkt; die allgemeine Einführung wird dort ausgeblendet.
- Hauptaktionen bleiben beschriftet. Seltenere Funktionen sind weiterhin vorhanden, aber gezielt aufklappbar.

## Einfachere Kartendetails und kleine Verbesserungen

- Zuerst erscheinen Anzahl, Zustand, Sprache, Kartenoberfläche und Werte. Zusätzliche Kartendaten und Preisquellen sind aufklappbar.
- Bearbeiten und Alben zuordnen bleiben direkt sichtbar; Duplizieren, Preisabruf und Löschen liegen unter **Weitere Aktionen**.
- Ungespeicherte Bearbeitungen werden vor dem Schließen erkannt. Favorit umschalten verwirft den eingegebenen Text nicht.
- Die Zustandsauswahl erklärt Begriffe wie Near Mint oder Played. **Kartenoberfläche** ersetzt die weniger verständliche Beschriftung Finish.
- Alle unterstützten Kartensprachen stehen auch im Sammlungsfilter zur Verfügung.
- Eine leere gefilterte Sammlung bietet **Filter zurücksetzen** an.
- Die Navigation verwendet verständlichere deutsche Begriffe. Alle Auswahlmenüs bleiben im eigenen Design und per Tastatur bedienbar.
- Große Touchflächen und sichtbarer Tastaturfokus; auf sehr schmalen Geräten erhält das Blätteralbum beim Anordnen größere Fächer.
- Backup-Export kennzeichnet sich als Version 2.3. Bestehende Backups bleiben kompatibel.

## Geprüft

**29 automatisierte Tests und 41 Browserprüfungen bestanden.** Zusätzlich wurden tatsächliches Ziehen in der schmalen Albumansicht sowie dunkle und helle Darstellung kontrolliert. Einzelheiten: `TESTS-2.3.md`.

Die konkrete Kamera und Touch-Hardware deines Android-Geräts konnte hier nicht physisch geprüft werden. Die vorhandene lokale Texterkennung, Preise und Fotoabläufe bleiben enthalten; Erkennungsergebnisse und Druckmerkmale müssen weiterhin kontrolliert werden.
