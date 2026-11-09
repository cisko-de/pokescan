PokéScan v0.4 – Card Vault
==========================
1. Zuerst in v0.3 unter Mehr ein JSON-Backup erstellen.
2. Alle Dateien aus diesem Ordner in das Hauptverzeichnis des GitHub-Repositories cisko-de/pokescan hochladen; icons/ als Unterordner beibehalten.
3. GitHub Pages veröffentlicht aus main / (root). App nach dem Deploy schließen und neu öffnen.
4. Die Sammlung bleibt unter dem bisherigen localStorage-Schlüssel pokescan.collection.v1 gespeichert. Alben liegen unter pokescan.albums.v1.
5. Das v0.4-Backup enthält Sammlung UND Alben und kann auch alte v1-Backups importieren.
6. Die OCR lädt nach Einwilligung Tesseract.js von einem CDN. Die TCGdex-Suche und Preisabfrage benötigen Internet. Keine garantierten Cardmarket-Livepreise. Fotos werden nicht dauerhaft gespeichert.
7. Offline sind App-Oberfläche und lokal gespeicherte Daten verfügbar, sofern der Service Worker installiert ist. Externe Kartenbilder sind offline nicht garantiert.
