POKÉSCAN 2.1

Aktuelle Installation, Änderungen, Sprachmodelle und Testgrenzen: UPDATE-2.1.md
Die Hinweise dort ersetzen abweichende Angaben aus älteren Versionen unten.

PokéScan 2.0 — Deine Sammlung, im Blick
======================================
Weiterentwicklung der bereitgestellten Version 1.2. Stand: 10.11.2026.
Kostenlose statische PWA, Android zuerst, auch für Desktop. Keine Konten, keine
bezahlten Schlüssel, kein Backend und kein Build-Schritt erforderlich.

UPDATE EINER BESTEHENDEN INSTALLATION
1. In der bisherigen App ein Komplett-Backup MIT Fotos erstellen. In v1.2 liegt
   dieses unter Mehr > PokéScan Pro > Komplett-Backup mit Fotos. Der bisherige
   Haupt-Export in v1.2 enthält KEINE Fotos.
2. Alle App-Dateien dieser ZIP in dasselbe GitHub-Repository / denselben
   bisherigen Veröffentlichungsordner kopieren und vorhandene Dateien ersetzen.
   Neu: core.js muss ebenfalls hochgeladen werden. icons/ vollständig behalten.
3. GitHub Pages wie bisher veröffentlichen. Gleiche Adresse, gleicher Browser,
   gleiches Browserprofil: Die bisherigen Speicherschlüssel werden beibehalten.
4. App erneut öffnen. Falls die alte Oberfläche erscheint: einmal normal neu
   laden, dann unter Mehr auf Updates prüfen. Browserdaten NICHT löschen.
5. Bei anderer Domain, anderem Browser oder anderem Gerät: Backup importieren.

NEU AUF GITHUB PAGES STARTEN
- ZIP entpacken. index.html, app.js, core.js, style.css, sw.js,
  manifest.webmanifest und icons/ in die Wurzel eines Repositories hochladen.
- Repository > Settings > Pages > Deploy from a branch > main > /(root).
- Die von GitHub angezeigte HTTPS-Adresse öffnen. Unter Android / Chrome:
  Browser-Menü > App installieren / Zum Startbildschirm hinzufügen.
- tests/, README.txt und AENDERUNGEN.md dürfen mit hochgeladen werden; sie sind
  für den App-Betrieb nicht erforderlich. Keine node_modules nötig.

LOKAL / VS CODE
- Projektordner in VS Code öffnen; Live Server verwenden oder ein Terminal:
  Windows: python -m http.server 8080 --bind 127.0.0.1
  Linux/macOS: python3 -m http.server 8080 --bind 127.0.0.1
- http://127.0.0.1:8080 öffnen. index.html nicht per Doppelklick/file:// starten.
- Alternativ die beiliegende Start-Windows.cmd / start.sh verwenden.
- Die Kameraaufnahme ist unter Android auf der veröffentlichten HTTPS-Seite
  vorgesehen; auf dem Desktop eine Bilddatei auswählen.

SCANNEN
1. Sprache wählen, Foto aufnehmen oder mehrere Bilder aus der Galerie wählen.
2. Karte eng zuschneiden und bei Bedarf drehen. Gerade, helle Aufnahmen ohne
   Reflexionen liefern bessere Ergebnisse.
3. Text erkennen lassen oder Name/Nummer manuell eingeben. Die erste OCR lädt
   Drittanbieter-Bibliothek und Sprachmodelle nach Zustimmung herunter.
4. Treffer nach Name und Nummer suchen und bei Bedarf lokal nach Bild sortieren.
   Für unleserlichen Text: Bildsuche innerhalb eines Sets öffnen, Set-Katalog
   laden, Set wählen und Referenzbilder vergleichen lassen (max. 250).
5. Passenden Treffer anhand von Bild, Set, Nummer und Kartensprache bestätigen.
   Set und Seltenheit werden aus der Datenbank übernommen. Die gewählte Sprache
   bezeichnet die Datenbankausgabe und muss zur tatsächlichen Karte passen.
6. Finish, Auflage, Shadowless, Zustand und Anzahl prüfen; speichern.
   Bei mehreren Fotos wird danach das nächste Bild bereitgestellt.

WICHTIGE GRENZEN
- Der Bildvergleich ist eine echte lokale Ähnlichkeitssuche mit Farb-/Kanten-
  merkmalen gegen bekannte Kandidaten bzw. ein gewähltes Set. Er ist KEIN
  trainiertes allgemeines KI-Modell und sucht nicht automatisch durch sämtliche
  Pokémon-Druckausgaben. Der Vergleichswert ist keine Erkennungswahrscheinlichkeit.
- Bilder können fehlen oder vom Anbieter nicht für den Vergleich freigegeben
  sein. Textsuche und manuelles Erfassen bleiben dann verfügbar.
- Holo / Reverse Holo, 1st Edition, Shadowless und Echtheit werden nicht
  zuverlässig automatisch festgestellt. Die App bietet getrennte Felder und
  eine Prüfhilfe. Sie bestätigt diese Merkmale nicht anhand eines einzelnen Fotos.
- EUR-Referenzpreise: TCGdex / Cardmarket, soweit verfügbar. Keine garantierten
  Verkaufswerte, keine verlässliche Zustand-/Sprach-/Grading-Bewertung.
- Für Reverse Holo, First Edition, Shadowless, unklare Finishes und gegradete
  Karten wird ohne eindeutige Quelle kein neuer Preis zugeordnet. Vorhandene
  Preise bleiben bei fehlgeschlagenen Abrufen erhalten. Nach Änderungen an
  Identität / preisrelevanten Merkmalen wird der alte Preis entfernt.
- Preisverlauf = lokal gespeicherte Abrufe, kein vollständiger Marktverlauf.
- Keine Anmeldung, Cloud-Synchronisierung, automatische Hintergrund-Preisalarme
  oder allgemeine KI-Kartenerkennung. Kein Server wird vorgetäuscht.

DATEN / OFFLINE
- Karten, Alben und Profil: bisherige localStorage-Schlüssel *.v1.
- Eigene Fotos: bisherige IndexedDB "pokescan-photos", Store "photos".
- Neue Fotos werden auf maximal 1800 Pixel an der längeren Kante verkleinert.
- Komplett-Backup v4 enthält Karten, Alben, Profil, Wünsche, lokale Verläufe und
  lesbare eigene Fotos. Alte v1-/v2-/v3-Backups bleiben importierbar.
- Fehlende Fotos werden beim Export ausdrücklich gemeldet. Bei Importen werden
  zunächst alle Daten geprüft und Fotos unter neuen IDs zwischengespeichert.
  Bestehende Fotos werden nicht vorab überschrieben. Alte Fotoobjekte werden
  zur Sicherheit nicht automatisch entfernt, auch nach Rückgängig/Löschen.
- Backup-Downloads als Datei behalten: Ein Exportdatum beweist nicht, dass die
  Datei auf einem anderen Gerät gesichert wurde.
- App-Oberfläche nach einem erfolgreichen Online-Start offline verfügbar.
  Bereits abgefragte Daten / angesehene Referenzbilder werden begrenzt gepuffert.
  Neue Datenbanktreffer, aktuelle Preise und erstmaliges OCR-Laden brauchen Netz.
- Browserdaten löschen, privater Modus oder Speicherbereinigung können lokale
  Daten entfernen. Regelmäßiges Komplett-Backup verwenden.
- CSV ist für Auswertungen gedacht und ersetzt kein Foto-Backup.

PRÜFUNGEN
- node --test tests/core.test.cjs (Node.js 18 oder neuer): Daten-/Preisregeln.
- Geprüft im Browser: Anlegen/Bearbeiten, Zusatzfelder, Album erstellen und
  zuordnen, Albumansicht, mobile Darstellung, Wunschliste, Live-Kartensuche
  und Übernahme von Set/Kartennummer/Seltenheit.
- End-to-End-Fotoauswahl, vollständiger Foto-Backup-Restore und OCR-Modelllauf
  konnten wegen einer hängen gebliebenen Browser-Dateiauswahl nicht vollständig
  geprüft werden. Kein Test auf einem physischen Android-Gerät erfolgt.

QUELLEN
https://tcgdex.dev/reference/card
https://tcgdex.dev/rest/filtering-sorting-pagination
https://github.com/naptha/tesseract.js
Pokémon und zugehörige Marken gehören ihren jeweiligen Rechteinhabern.
Dies ist ein unabhängiges Sammlerwerkzeug.
