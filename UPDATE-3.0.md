# PokéScan 3.0

Stand: 12. November 2026. Diese Hinweise ersetzen abweichende Angaben älterer Versionen.

## Update installieren

1. In der bisherigen App unter **Mehr** ein **Komplett-Backup mit Fotos** erstellen.
2. Die ZIP entpacken und ihren vollständigen Inhalt in den bisherigen GitHub-Pages-Ordner kopieren. Vorhandene Dateien ersetzen und alle neuen JavaScript-/CSS-Dateien mit hochladen. Kein Build nötig.
3. Die App unter derselben Adresse und im selben Browser öffnen. Falls nötig unter **Mehr → App & Speicher** auf Updates prüfen und das neue Update übernehmen. Browserdaten nicht löschen.

Sammlung und Fotos behalten ihre bisherigen Speicherschlüssel. Ein Wechsel der Adresse oder des Geräts benötigt das Komplett-Backup. Alte Backups bleiben importierbar. Die neue Sicherung v5 enthält auch Rückseiten, Album-Cover, feste Fächer und importierte Preisdaten.

## Preise zuerst

- **Start → Preise & Werte** zeigt den erfassten EUR-Wert, Preisabdeckung, Kaufkosten und die Differenz für Karten mit beiden Angaben. USD wird separat angezeigt und nicht in EUR umgerechnet.
- **Preisprobleme** grenzt fehlende EUR-Werte ein. **Zuordnung prüfen** verknüpft eine vorhandene Karte mit dem richtigen Katalogtreffer, ohne sie erneut anzulegen.
- Bei Suchtreffern werden Preise nachgeladen. Nach der Auswahl stehen verfügbare Preise für Normal, Holo und Reverse direkt bei der Karte. Mehrere Oberflächen erfordern eine bewusste Auswahl.
- Kartendetails zeigen Referenzpreis, Datenstand und ein Diagramm der gespeicherten Beobachtungen. Währung und Grading können getrennt gewählt werden. Ohne Daten bleibt das Diagramm leer.
- Die Marktfeeds nennen keine belegte Anzahl einzelner Verkäufe. Das steht ausdrücklich dabei. Alte und offline gespeicherte Werte werden gekennzeichnet.
- Einzelverkäufe, PSA-/BGS-/CGC-Referenzen und vergangene Verlaufspunkte lassen sich mit Quelle nachtragen oder importieren. Sie werden nicht automatisch als verifizierte Verkäufe bezeichnet.
- Der eingeklappte Kostenrechner vergleicht eigene Annahmen für unbewertete Karten sowie PSA 8, 9 und 10 mit Gebühren, Grading, Versand und Kaufpreis.

**Grenze:** Es gibt keine neu angeschlossene vollständige Verkaufs- oder PSA-Datenbank. Das Update kann fehlende externe Preise nicht erzeugen. Cardmarket/TCGplayer bleiben Referenzen über TCGdex; Sprache, Zustand und Sonderdrucke sind darin nicht immer separat bepreist. Preise für unklare Varianten werden nicht blind übernommen. Details in PREISDATEN.md.

## Suche und Erkennung

- Eine gemeinsame Suchzeile versteht beispielsweise **Glurak 151 006/165**.
- Die Suche lädt Katalogseiten mit je 100 Datensätzen und zeigt zunächst 48 Treffer. **Weitere Karten laden** bzw. **Mehr geladene Treffer anzeigen** macht weitere Ergebnisse erreichbar. Keine feste Begrenzung auf 20 Treffer.
- Physische Karten haben Vorrang; Pocket-Karten werden standardmäßig ausgeblendet. Die Filter lassen sich ändern.
- Zwei Treffer lassen sich nebeneinander vergleichen. Unterschiede bei Set, Nummer und Sprache sind hervorgehoben.
- Bestätigte Suchzuordnungen werden auf diesem Gerät gespeichert und bei später passenden Suchanfragen höher einsortiert. Das ist eine lokale Merkhilfe, kein Training eines neuen KI-Modells.
- Geladene Katalogdaten werden lokal gespeichert und sind auch offline durchsuchbar. Nicht geladene Karten und Bilder stehen offline nicht automatisch bereit.
- Der Foto-Check warnt bei wenig Details und großen weißen Flächen. Er kann Unschärfe/Spiegelungen nur vermuten und blockiert das Speichern nicht.
- **Bild-KI ausprobieren** bietet optional einen lokalen CLIP-Vergleich der ersten 30 Kandidaten. Er braucht einen großen Modell-Download und kann langsam sein. Foto und Merkmale werden nicht an einen KI-Server hochgeladen. Referenzbilder, Modell und Laufzeit werden von externen Diensten geladen. Kein Echtheits-, Zustands- oder Grading-Nachweis.
- Der normale Scan, OCR und manuelle Suche funktionieren ohne diesen zusätzlichen CLIP-Schritt. Das Modell ist experimentell; ein erfolgreicher Download und eine Erkennung auf echten Android-Geräten wurden in dieser Umgebung nicht nachgewiesen.

## Sammlung und Alben

- **Mehrere bearbeiten** ändert Zustand, Sprache oder Album für ausgewählte Einträge. Sprachänderungen setzen unpassende Preise zurück.
- Beim Album-Bearbeiten können ein übergeordnetes Album, ein eigenes Cover und **feste Fächer** gewählt werden.
- In **Album blättern → Anordnen** eine Karte am Griff ziehen oder Griff und Zielfach antippen. Freie Fächer bleiben frei; zwei belegte Fächer werden getauscht. Das Pfeilkreuz öffnet die genaue Positionswahl. **Leere Seite** ergänzt neun weitere Plätze. Rückgängig bleibt verfügbar.
- In normalen Alben werden Karten wie zuvor in eine Reihenfolge eingeschoben. In Alben mit festen Fächern werden Plätze getauscht.
- **Set-Fortschritt** zählt verknüpfte Karten des gewählten deutschen Sets über die gesamte Sammlung. Mehrfachbesitz, Sprache und Finish werden dabei nicht als unterschiedliche Set-Karten gezählt. Fehlende Karten können gesucht oder auf die Wunschliste gesetzt werden.
- Rückseiten lassen sich in **Fotos & Vollbild** speichern. Beide eigenen Seiten und verfügbare Referenzbilder sind im Vollbild mit 100–400 % Zoom verfügbar.
- Favoriten behalten ein vollständig gefülltes Herz. Zurück und Schließen nutzen beschriftete Pfeil-/X-Symbole.

## Einfach anpassen

Unter **Mehr → Deine App gestalten** gibt es vier Designs: Vault, Minimal, Glas und Kontrast. Dazu große oder kompakte Karten, zwei Textgrößen und eine wählbare Startseite. Die Profilfarben umfassen jetzt auch Lagune, Kupfer und Graphit. Hell/Dunkel ist weiterhin unabhängig wählbar. Spezialfunktionen bleiben eingeklappt.

## Tests und Grenzen

44 automatisierte Funktionstests und 85 Browserprüfungen bestanden. Zusätzlich wurde eine Karte per tatsächlicher Zeigerbewegung in ein freies Fach gezogen und die Darstellung in 320-/390-Pixel-Rahmen kontrolliert. Umfang und Grenzen stehen in TESTS-3.0.md. Live-Preise, Modelle und echte Android-Kameraaufnahmen benötigen weiterhin einen Test auf deinem Gerät.
