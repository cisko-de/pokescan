# Testbericht PokéScan 3.3

Abschluss: 14. November 2026. Lokaler Chromium-Browser und Node; externe Live-/OCR-Stichproben wurden am 13. November durchgeführt. Die Testdaten und internen Prüfseiten werden nicht mit der App ausgeliefert.

## Ergebnisse

- **89 Node-Funktionstests bestanden** mit `node --test tests/*.test.cjs`.
- **125 Browserprüfungen im zusammenhängenden Abschlusslauf bestanden**: 33 bisherige Abläufe, 25 Foto-/Aktionsprüfungen, 40 Wunschlisten-/Vergleichsprüfungen und 27 Prüfungen für Sprachen, Suche und manuelle Eingabe.
- **90 Layoutkombinationen** nach Korrektur ohne horizontalen Seiten-/Dialogüberlauf: sechs Ansichten (Wunschliste, Vergleich, manuell, Einstellungen, Katalogsuche, Preise), drei übersetzte Oberflächen (Englisch, Spanisch, Französisch) und fünf Frame-Breiten (320, 390, 768, 1024, 1440 Pixel). Die Vergleichstabelle darf intern horizontal scrollen.
- Separater Neulade-Test: Wunschkarte mit Variante, Kategorie, Zielpreis, zugehöriger Fotodatei und App-Sprache nach Browser-Neuladen erhalten.
- Vier synthetische Kartenbilder mit **echtem Tesseract OCR** bearbeitet: Deutsch/Pikachu, Englisch/Pikachu, Französisch/Dracaufeu, Spanisch/Pikachu. In allen vier Fällen wurden Name und `025/102` korrekt gelesen.
- Acht **Live-Antworten** von TCGdex für `sv03.5-006` und `swsh3-136`, jeweils Deutsch, Englisch, Spanisch und Französisch: acht erfolgreich, keine Cache-Rückfälle, keine nicht verfügbaren Antworten. Der Nicht-Holo-Preis von Wiesenior/Furret/Fouinar war verfügbar; ein unpassender Normalpreis wurde für Glurak-ex/Charizard ex/Dracaufeu-ex nicht ersatzweise ausgegeben.
- Alle JavaScript-Dateien auf Syntax und alle lokalen HTML-/Service-Worker-Asset-Verweise auf vorhandene Dateien geprüft. ZIP-Struktur und CRC vor Übergabe geprüft.

## Schwerpunkt der neuen Funktionstests

Migration alter Wünsche ohne Verlust des Budgets; getrennte Identitäten für Sprache, Oberfläche, Auflage, Shadowless und Grade; Duplikatvermeidung; natürliche Sortierung und fehlende Preise; echter Besitz gegenüber lediglich gleicher Katalogkarte; Zielpreis mit Datum/Cache-Kennzeichnung; unveränderte Quelle und begrenzte Preishistorie; sicherer Wunschlisten-Import/Export ohne lokale Foto-IDs; Backup-Kompatibilität.

Gerätesprache, feste Sprachwahl, wiederholter Wechsel zwischen allen vier Sprachen, unveränderte interne Auswahlwerte und Kartenidentität, geschützte eigene Notizen, deutsche Rückfalltexte, dynamische Beschriftungen. Französische/spanische Titel und Lebenspunkte; internationale Suchnamen; gemeinsames Ranking von Bild, Name, Nummer und Set; getrennte Normal-/Reverse-Reihen für Trend, Tiefstwert und Mittelwert.

## Schwerpunkt der Browserprüfungen

Wünsche aus Sammlung und Suche; Bilder und Metadaten; Kategorien, Priorität und Zielpreis; Speichern, Entfernen und Rückgängig; gleiche/abweichende Varianten; Speicherfehler ohne scheinbaren Erfolg; verspätete Preise nach einer Variantenänderung; Export und erneuter Import ohne Verdopplung; geprüfte Besitzübernahme mit Anzahl, Kaufpreis, Datum und Album; wiederholte Übernahme öffnet vorhandene Karte.

Vier Karten im Vergleich und blockierte fünfte Karte; gleiche Spalten und Unterschiede; unbekannte Werte; Bild-Slider und gemeinsamer Zoom; eigene Rückseite, fehlende Rückseite und Vollbild; Austauschen; zwei bis vier Suchtreffer wählen; vollständige Metadaten laden; Variante nur im Vergleich ändern, ohne gespeicherte Karte oder deren Preis zu verändern. Auswahl öffnet das Hinzufügen ohne verdeckenden Detaildialog und erhält ein bereits gescanntes Foto.

Manuelle Eingabe ohne Scan, Foto oder automatische Suche; eigene Referenz sowie eigene Vorder-/Rückseiten; Anzahl, Preis und Datum; negative Preise und gebrochene Stückzahlen abgelehnt; atomare Bearbeitung. Kontrollierte Suche mit 400 geladenen Treffern und Nachladen auf 420, zunächst 48 bzw. 96 sichtbare Treffer; vier Suchsprachen; Set-Suche ohne Namen/Nummer; Seltenheitsfilter nach Kartendetails; verspätete alte Suchantwort; leere Treffer.

Set-Tracker trennt Kartensprache und Oberfläche. Ungeprüfte Varianten werden nicht als bestätigte Fehlkarten ausgegeben. Fehlende Karten gesammelt vormerken, ohne Duplikate. Bekannte Kosten nur als Teilwerte ausweisen. Vollständiger Foto-Export und Wiederherstellung mit neuen Fotoreferenzen auch für Wünsche; Rückfall auf den Katalogcache bei simuliertem Netzwerkfehler.

Die vorherigen Prüfungen decken unter anderem Albumreihenfolge, freie Fächer, Gruppenplatzierung, Mehrfachverschieben, Favoriten, Rückgängig, eigene Raster, Profil, Bildauswahl, Zoom, Preis-Cache, Preisaktualisierung und englische Marktreferenz bei fehlenden deutschen Daten ab.

## Gefundene und korrigierte Probleme

- Bisheriger Vergleich nur mit zwei Suchtreffern und kaum Daten; neue gemeinsame Vergleichsansicht für bis zu vier Quellen.
- Alte Wunschliste verlor erweiterte Metadaten beim Einlesen; strukturierte Migration und Foto-Backup ergänzt.
- Reine Set-Suche brach ohne Namen/Nummer ab; Set-Abfrage ergänzt.
- Bildsortierung konnte Textübereinstimmung verdrängen; gemeinsames Ranking ergänzt.
- Lange französische Formular-/Auswahltexte führten an drei Stellen zu horizontalem Überlauf. Schrumpfbare Flex-/Grid-Kinder und passende Beschriftungen korrigiert; anschließend alle 90 Kombinationen erneut kontrolliert.
- Übersetzung erfasste den Wortbestandteil „Scan“ im Logo. Marke von Übersetzung ausgenommen; anschließend `PokéScan` in der französischen Ansicht geprüft.
- Vergleichsauswahl konnte einen Detaildialog über dem Hinzufügen stehen lassen; Navigation korrigiert und erneut geprüft.

Im kalten Browser erfasste ein allgemeiner Netz-Aufrufzähler auch die optionale Hintergrund-Lokalisierung von Kartennamen. Die isolierten Grundfunktionstests schalten diese Zusatzabfrage deshalb aus; Sprachwechsel und Live-Sprachkataloge werden separat geprüft.

## Grenzen und noch erforderliche Geräteprüfungen

Keine Prüfung auf einem physischen Android-Gerät, iPhone/iPad oder in Safari. Bildschirmbreiten in Chromium sind keine vollständige Geräteemulation. Kameraöffnung, Android-/iOS-Berechtigungsdialoge, Galerieanbieter, Installation, Neustart nach Betriebssystemende und Update auf deinem GitHub-Pages-Ursprung müssen auf dem Gerät geprüft werden.

Die vier OCR-Bilder sind kontrollierte, klar beschriftete synthetische Testkarten, keine gemessene Erkennungsquote für echte Sammlerkarten. Gedrehte Geometrie, Kontrast und Ränder sind durch reine Bild-/Editorprüfungen abgedeckt; starke Unschärfe, Glanz, Hüllen und alle Kameramodelle wurden nicht als verlässlich erkannt bestätigt. Kein neuer Nachweis zur Genauigkeit des experimentellen CLIP-Modells, keine Echtheits- oder automatische Grading-Zusage.

Die Live-Stichprobe ist keine vollständige Preisabdeckung. Preisquellen und Grenzen sind in PREISQUELLEN-3.3.md dokumentiert. Eine vollständige direkte Cardmarket-API, Cloud-Synchronisierung oder Push-Preisalarme sind nicht verbunden. Fehler-/Cache-/Suchmengenfälle verwenden gezielt simulierte Antworten. Layoutvorschauen verwenden isolierte Testdaten ohne Schreibzugriff auf die echte Sammlung.
