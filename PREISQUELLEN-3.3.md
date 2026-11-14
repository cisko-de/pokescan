# Preisquellen und externe Grenzen

Recherche vom 13. November 2026.

## Automatisch angeschlossen

TCGdex liefert Kartendaten und, soweit verfügbar, Cardmarket-Referenzen in EUR und TCGplayer-Referenzen in USD. Die App bevorzugt diese Cardmarket-Daten für die EUR-Anzeige. Die Zuordnung prüft Oberfläche und Sonderauflage; unklare Varianten erhalten keinen aus einem anderen Druck übernommenen Preis. Bei einem Rückgriff auf den englischen Katalog steht dies an der Quelle. Eine englische Referenz ist damit kein nachgewiesener Verkaufspreis einer deutschen Karte.

Anbieter-Daten können fehlen und Produktzuordnungen können Fehler enthalten. TCGdex nennt selbst noch bestehende Probleme bei einigen Karten-/Seltenheits-Zuordnungen. Ein mitgelieferter Preis ist deshalb keine Garantie für die exakte Druckausgabe. Auch Zustand und Kartensprache sind nicht durchgehend präzise aufgelöst. Es wird kein pauschaler Zustandsfaktor oder erfundener PSA-Aufschlag angewendet.

Die zusätzlichen Felder für `trend`, `low`, `avg`, `avg7` und `avg30` werden aus der passend zugeordneten Preisreihe übernommen, statt Normal- und Foil-Spalten zu vermischen. Nicht gelieferte Felder bleiben leer. Ein gemeldeter Tiefstwert ist kein geprüftes aktuelles Einzelangebot einschließlich Versand.

Quellen: [TCGdex-Kartenobjekt](https://tcgdex.dev/reference/card), [TCGdex-FAQ](https://tcgdex.dev/faq), [Marktpreisintegration](https://tcgdex.dev/de/markets-prices).

## Direkte Cardmarket-Anbindung

Cardmarket nimmt laut aktueller Hilfeseite keine neuen API-Anträge an. Die öffentlichen Produkt- und Preisexporte dürfen laut Anbieter in eigene Anwendungen eingebunden werden. Eine solche zusätzliche Integration benötigt eine bestätigte Produktzuordnung und einen erreichbaren Dateizugriff. Die verlinkten Exportseiten waren in der Recherche nicht lesbar (HTTP 403); eine vollständige neue Export-Anbindung ist deshalb nicht als funktionierend eingebaut oder behauptet. Die bestehende automatische Quelle über TCGdex bleibt aktiv. Es wurden keine Kontozugangsdaten angefordert, hinterlegt oder übertragen.

Quellen: [Cardmarket API-Hinweis](https://help.cardmarket.com/en/cardmarket-api), [Cardmarket zu öffentlichen Exporten](https://insight.cardmarket.com/en/Articles/whats-new-on-cardmarket-7-2025).

## Nicht automatisch verfügbar

Vollständige historische Verkäufe, exakte Zustands-/Sprachpreise und umfassende PSA-/BGS-/CGC-Verläufe benötigen zusätzliche belegbare Daten. Der vorhandene Quellenimport und manuelle Referenzeintrag bleiben erhalten. Die Charts zeigen gespeicherte Beobachtungen bzw. ausdrücklich importierte Daten; keine rückwirkend erfundene Preisreihe.

Wunschpreise werden beim Abruf in der offenen App geprüft. Ein statischer GitHub-Pages-Client führt nach dem Schließen keine verlässlichen periodischen Preisabfragen aus. Für Push-Alarme und geräteübergreifende Konten wird zusätzliche Infrastruktur benötigt; siehe KONTEN-UND-APIS.md.
