# PokéScan 3.1 – persönlicher und übersichtlicher

Stand: 12. November 2026. Diese Anleitung ergänzt 3.0 und ersetzt dort abweichende Angaben.

## Installation

1. In der bisherigen App ein **Komplett-Backup mit Fotos** erstellen.
2. Die neue ZIP vollständig entpacken und **alle App-Dateien** im bisherigen GitHub-Pages-Ordner ersetzen. Die neuen Dateien `personal-rules.js`, `personal.js`, `bulk.js` und `personal.css` müssen mit hochgeladen werden.
3. Unter derselben Adresse öffnen, unter **Mehr → Daten & App** nach Updates suchen und das Update übernehmen. Browserdaten nicht löschen. Die Speicherschlüssel bleiben erhalten.

Die ZIP ist Quellcode für deine bestehende PWA. Sie ist keine Android-APK. Ein lokaler Start funktioniert mit den weiterhin beiliegenden Startdateien bzw. einem lokalen HTTP-Server.

## Karten ohne Scan hinzufügen

**Start → Manuell hinzufügen** oder **Neue Karte → Manuell eingeben**. Name eintragen, bei Bedarf Nummer, Set, Sprache, Zustand und weitere Angaben ergänzen, dann speichern. Foto, OCR und Datenbanktreffer sind optional. Im manuellen Modus gibt es keine automatische Suche beim Tippen.

**Karte suchen** findet Katalogkarten über Namen/Nummer ohne Kamera. **Foto scannen** öffnet Kamera/Galerie und die Erkennung. Alle drei Wege nutzen dasselbe Speicherformular; die Wege sind sichtbar getrennt.

## Klare Kartendetails

- **Übersicht:** kleines Kartenbild, EUR-Referenz, gegebenenfalls separate USD-Referenz, Anzahl, Zustand, Sprache und Variante. Weitere Angaben und Verlauf sind eingeklappt.
- **Preise:** Diagramme, Quellen, Grading-Daten und Kostenrechner. Hier können Marktpreise aktualisiert oder fehlende Kartenverknüpfungen geprüft werden.
- **Bilder:** Vorder-/Rückseite, Vollbild, Bildauswahl und eigene Referenzdatei.

Beim Bearbeiten verschwinden die zusätzlichen Analysen, damit die Eingabefelder im Vordergrund stehen.

## Karten pro Reihe

**Sammlung → Filter & Darstellung → Karten pro Reihe**: automatisch oder 1–6 Karten.

Im geöffneten Album gibt es dieselbe Auswahl. Jedes Album kann eine eigene Spaltenzahl behalten. Diese gilt für Übersicht und blätterbare Seiten. Eine blätterbare Seite behält neun Fachpositionen; die Spaltenzahl ändert nur deren Anordnung auf dem Bildschirm. Viele Spalten ergeben auf kleinen Handys sehr kleine Karten; eine oder zwei Spalten sind gut lesbar.

## Welches Bild angezeigt wird

In **Mehr → Aussehen → Standardbild für Karten** wählst du einen App-Standard. Neue Karten können diesem Standard folgen oder eine eigene Auswahl speichern:

- Automatisch: Katalogbild bevorzugen, andernfalls eigenes Foto/eigene Referenz.
- Vorgegebenes Referenzbild.
- Mein Foto.
- Eigene Referenzdatei.
- Kein Bild.

**Kartendetails → Bilder → Bild für diese Karte** speichert eine Abweichung für genau diesen Eintrag. Die Wahl gilt auch in Sammlung und Alben. Bei einer ausdrücklich gewählten, aber fehlenden Bildart erscheint ein Platzhalter; es wird nicht heimlich eine andere Bildart verwendet.

Eine eigene Referenz kann schon beim manuellen Hinzufügen hochgeladen werden. Sie wird lokal gespeichert und mit dem Komplett-Backup exportiert und wiederhergestellt. Die Bildauswahl und eigene Referenzdatei ändern weder Karten-ID noch Marktwert automatisch. Rückseiten bleiben separat verfügbar.

## Mehrfachauswahl

Eine Karte etwa eine halbe Sekunde gedrückt halten oder **Mehrere auswählen** drücken. Danach weitere Karten antippen. Unten erscheinen Anzahl, erfasster EUR-Wert und Aktionen. **Sichtbare auswählen** umfasst die aktuelle gefilterte Ergebnisliste, auch weiter unten liegende Karten.

**Herzen/Bearbeiten:** Favoriten setzen/entfernen, Tausch-/Verkaufsstatus, Sprache, Zustand und Album ändern. Die Albumaktion erklärt ausdrücklich, ob zusätzlich hinzugefügt, aus einem bestimmten Ausgangsalbum verschoben oder aus dem gewählten Album entfernt wird. Andere Albumzuordnungen bleiben beim Verschieben erhalten.

Im Album gibt es zusätzlich **Anordnen** für die Auswahl. Die Vorschau nennt die Zielpositionen. In Alben mit festen Fächern werden fremd belegte Fächer übersprungen; die Reihenfolge der ausgewählten Karten bleibt erhalten. Bestätigte Mehrfachänderungen und Gruppenplatzierungen bieten **Rückgängig**. Es gibt absichtlich keine neue Mehrfach-Löschfunktion.

## Farben, Profil und Einstellungen

**Mehr** ist in vier Bereiche gegliedert: **Aussehen**, **Mein Profil**, **Karten & Preise**, **Daten & App**.

Unter **Aussehen** sind 13 Farbfelder direkt sichtbar: Amethyst, Saphir, Smaragd, Rosé, Gold, Lagune, Kupfer, Graphit, Rubin, Eisblau, Limette, Indigo und Pfirsich. Zusätzlich ist eine eigene Akzentfarbe möglich; schwarze oder weiße Beschriftung wird für die Akzentfarbe passend gewählt. Die vier bisherigen Designs und Hell/Dunkel bleiben unabhängig wählbar.

Das lokale Profil bietet nun Lieblings-Pokémon, Sammelschwerpunkt, ein Sammelziel mit Fortschrittsanzeige und das Ausblenden von Werten auf Startseite/Kartenrastern. Ein Profilbild lässt sich auch wieder entfernen. Es bleibt ein Profil auf diesem Gerät, kein öffentliches Konto und keine Cloud-Synchronisierung.

## Preisverbesserungen und Grenzen

- Katalogdetails werden bei bestehender Verbindung nach sechs Stunden neu angefragt. Offline bleiben die vorhandenen Daten nutzbar; der ursprüngliche Stand bleibt sichtbar.
- **Marktpreise aktualisieren** umgeht den lokalen Detailcache.
- Deutsche Bezeichnungen innerhalb der Varianten-Metadaten werden für die Preiszuordnung normalisiert. Sonderdrucke wie Cosmos-Reverse werden nicht mit der gewöhnlichen Reverse-Ausgabe gleichgesetzt.
- Dokumentierte TCGplayer-Variantenbezeichnungen werden zusätzlich berücksichtigt, ohne USD in EUR umzurechnen.
- Eine eindeutig beschriftete englische Markt-Referenz kann auch dann geladen werden, wenn der deutsche Katalogabruf scheitert.
- Beim Speichern einer bereits ausgewählten Katalogkarte wird ein noch laufender Preisabruf abgewartet.

In diesem Durchlauf wurden acht echte API-Antworten (vier Karten jeweils Deutsch/Englisch) geprüft. Zusätzlich wurde eine echte Katalogkarte samt positivem EUR-Preis im Browser geladen. Das bestätigt diese Stichprobe, nicht eine vollständige Preisabdeckung. Die Quelle kennt weiterhin nicht für jede Karte/jeden Sonderdruck passende Preise. Es wurde kein neuer vollständiger PSA-/Einzelverkaufsfeed angeschlossen. Siehe PREISDATEN.md.
