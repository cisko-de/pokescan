POKÉSCAN 3.3
Stand: 14.11.2026

Kostenlose statische PWA für Android, iOS und Desktop. Kein Build, kein Konto und
kein eigener Server nötig. Die Sammlung bleibt lokal auf deinem Gerät.

UPDATE
1. In der bisherigen App ein Komplett-Backup MIT Fotos erstellen.
2. Diese ZIP vollständig entpacken und ALLE enthaltenen App-Dateien in den
   bisherigen GitHub-Pages-Ordner kopieren; vorhandene Dateien ersetzen.
3. Gleiche Adresse im gleichen Browser öffnen. Unter Mehr auf Updates prüfen
   und die neue Version übernehmen. Browserdaten nicht löschen.

NEU STARTEN
Alle JS-, CSS- und HTML-Dateien, manifest.webmanifest und den vollständigen
icons/-Ordner in die Repository-Wurzel hochladen. Settings > Pages > main > root.
Die HTTPS-Adresse öffnen, im Android-Browser „App installieren“ wählen.
Die Ordner tests/ und Markdown-Anleitungen sind für den Betrieb nicht nötig.

LOKAL / VS CODE
Im Projektordner:
  Windows: python -m http.server 8080 --bind 127.0.0.1
  Linux/macOS: python3 -m http.server 8080 --bind 127.0.0.1
Dann http://127.0.0.1:8080 öffnen. Nicht per Datei-Doppelklick starten.
Alternativ Start-Windows.cmd bzw. start.sh verwenden.

ANLEITUNGEN
UPDATE-3.3.md: neue Funktionen, Bedienung und Installation
KONTEN-UND-APIS.md: Konten, Geräteabgleich und passende APIs
PREISQUELLEN-3.3.md: aktuelle Preisquellen und externe Grenzen
PREISDATEN.md: Preisquellen, Importe, Grading und Grenzen
TESTS-3.3.md: ausgeführte Tests und nicht bestätigte Live-/Gerätefunktionen

Preise und Erkennung hängen von verfügbaren Drittanbieterdaten ab. Es gibt
keinen angeschlossenen vollständigen PSA-/Verkaufsfeed. Zusätzliche Verkaufs-
und Grading-Daten können mit Quelle importiert oder selbst erfasst werden.
Die optionale lokale CLIP-Bild-KI ist experimentell und benötigt einen großen
Download. Sie ersetzt nicht die Prüfung von Bild, Nummer und Druckvariante.
