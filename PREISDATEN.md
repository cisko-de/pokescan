# Preisdaten in PokéScan 3.1

## Eingebaute Daten

PokéScan verwendet den öffentlichen TCGdex-Katalog. Europäische Referenzen stammen aus dessen Cardmarket-Preisfeldern, amerikanische aus TCGplayer-Preisfeldern. Es sind keine garantierten Verkaufspreise deiner konkreten Karte. Währungen, Oberflächen, Auflagen und Grading werden nicht vermischt.

Ein deutscher Katalogeintrag kann die übergreifende Markt-Referenz desselben englischen Katalogeintrags nutzen, sofern ID und Kartennummer übereinstimmen. Dieser Rückgriff ist als englische Katalog-/Markt-Referenz beschriftet, nicht als Preis einer deutschen Einzelkarte. Zustand wird nicht über erfundene Multiplikatoren eingerechnet.

Die App speichert echte Abrufbeobachtungen. Ein 7-/30-Tage-Mittel wird nicht rückwirkend in tägliche Kursdaten umgewandelt. Offline-Daten behalten ihr vorhandenes Abrufdatum. Unbekannte Zeitpunkte bleiben unbekannt. Die Verkaufsanzahl ist ohne externe Belege unbekannt.

## Weitere Daten importieren

Unter **Mehr → Weitere Marktdaten** kann eine JSON-Datei eingelesen werden. Die dort herunterladbare Vorlage enthält absichtlich keine Beispielpreise. Ein manueller Eintrag ist auch in den Kartendetails unter **Erfasste Verkäufe & Datenqualität** möglich.

Die JSON-Datei hat diese Form:

```json
{"format":"pokescan-market-v1","records":[]}
```

Jedes Objekt in `records` benötigt:

| Feld | Bedeutung |
| --- | --- |
| `cardId` | Exakte TCGdex-ID, z. B. `sv03.5-6`; bei rein manuellen Karten deren lokale ID aus einem Backup |
| `kind` | `sale` für tatsächlich erzielten Verkauf, `snapshot` für Verlaufspunkt, `grade` für Grading-Referenz |
| `price` | Zahl, nicht Text; 0 bis 100.000.000 |
| `currency` | `EUR` oder `USD` |
| `date` | Datum `YYYY-MM-DD` oder ISO-Zeitpunkt; keine zukünftigen Beobachtungen |
| `source` | Nachvollziehbare Quelle, maximal 150 Zeichen |
| `finish` | `Normal`, `Holo`, `Reverse Holo` oder `Unklar` |
| `language` | Kartensprache exakt wie in der App, z. B. `Deutsch` oder `Englisch` |
| `edition` | `unlimited`, `first` oder `unknown`; Standard `unlimited` |
| `shadowless` | `true` oder `false`; Standard `false` |
| `grader` | Optional `PSA`, `BGS`, `CGC` oder `SGC` |
| `grade` | Bei Grading eine Zahl von 1 bis 10, sonst `null` |
| `url` | Optionaler HTTPS-Quellenlink |

Grading-Unternehmen und Note müssen gemeinsam angegeben sein. `kind=grade` benötigt ein Grading. Karten-ID, Finish, Auflage, Shadowless und Sprache müssen zur Karte passen. Für das Diagramm werden Währung und Bewertungsstufe zusätzlich getrennt ausgewählt. Einzelverkäufe stehen separat, damit sie nicht mit Durchschnittsreferenzen vermischt werden.

Die App prüft Struktur und Zuordnung, bestätigt aber nicht, dass eine selbst eingetragene Quelle wahr ist. Alle importierten/selbst erfassten Werte bleiben als solche erkennbar. Ungültige Dateien werden als Ganzes abgewiesen. Maximal 20.000 Datensätze bzw. 15 MB je Import. Wiederholtes Importieren derselben Datensätze kann Dubletten erzeugen; vor großen Importen ein Komplett-Backup erstellen.

Importierte Grading-Referenzen erscheinen in der Detailanalyse. Sie ersetzen nicht stillschweigend den EUR-Sammlungswert. Der Kostenrechner verwendet ausschließlich die von dir eingetragenen Verkaufspreis-Annahmen und Gebühren.

## Anbieterinformationen

- TCGdex API: https://tcgdex.dev/
- Filter, Sortierung, Pagination: https://tcgdex.dev/rest/filtering-sorting-pagination
- PSA Auktionsrecherche: https://www.psacard.com/auctionprices
- PriceCharting API-Informationen: https://www.pricecharting.com/api-documentation

PSA-Recherche ist ein externer Link, keine API-Anbindung. PriceCharting ist ebenfalls nicht angeschlossen. Die App enthält keine Zugangsschlüssel, keine kostenpflichtige Anmeldung und kein automatisches Scraping. Eine zusätzliche automatische Verkaufs-/Grading-Datenquelle müsste separat ausgewählt und rechtmäßig angebunden werden.

## Änderungen in 3.1

Kartendetails werden online nach sechs Stunden erneuert. Explizites Aktualisieren umgeht den lokalen Detailcache. Deutsche Varianten-Metadaten werden normalisiert; besondere Foil-Muster bleiben von gewöhnlichen Reverse-Preisen getrennt. Ein fehlgeschlagener deutscher Detailabruf kann eine ausdrücklich beschriftete englische Markt-Referenz nutzen. Für den aktuellen Testumfang siehe TESTS-3.1.md.
