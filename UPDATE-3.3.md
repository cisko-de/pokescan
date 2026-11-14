# PokéScan 3.3

14. November 2026. Statische PWA für GitHub Pages, ohne Build-Schritt oder laufend kostenpflichtigen Dienst. Bestehende Speicher-Namen und Backup-Formate bleiben erhalten.

## Sprache wechseln

Unter **Mehr → Aussehen → App-Sprache** stehen Deutsch, Englisch, Spanisch und Französisch bereit. Beim ersten Start wird eine unterstützte Gerätesprache gewählt, sonst Deutsch. Eine manuelle Auswahl wird dauerhaft gespeichert und sofort angewendet. Unbekannte neue Übersetzungsschlüssel fallen auf Deutsch zurück.

Die Sprache der **physischen Karte** bleibt davon unabhängig. Auswahlwerte, Druckmerkmale und Preiszuordnungen werden nicht übersetzt oder umgeschrieben. Eigene Notizen, Profiltexte und gespeicherte Kartennamen bleiben im Datensatz unverändert. Auf Wunsch werden sichtbare Kartennamen aus dem Katalog in der App-Sprache angezeigt; fehlt die übersetzte Katalogkarte oder eine Verbindung, bleibt der gespeicherte Name sichtbar. Das lädt bei Bedarf zusätzliche Katalogdaten. Unter App-Sprache lässt sich diese Anzeige ausschalten.

## Preise klarer einordnen

EUR und USD bleiben getrennt. Die EUR-Hauptreferenz verwendet weiterhin den gewählten Trend-/Durchschnittswert mit seiner tatsächlichen Quellenbezeichnung. In den Kartendetails und im Vergleich sind zusätzlich Markttrend, gemeldeter Tiefstwert und Durchschnitt getrennt sichtbar, sofern für die bestätigte Variante vorhanden. Fehlende Werte erscheinen als „Nicht verfügbar“.

Der Tiefstwert ist ein aggregierter Anbieterwert, kein live geprüftes Angebot für genau deine Sprache und deinen Zustand; Versand ist nicht enthalten. Zustand und Kartensprache sind bei den eingebauten Referenzen nicht zuverlässig einzeln aufgelöst. Deshalb wird kein Zustandsabschlag erfunden und kein beschädigtes Exemplar als gleichwertiges Verkaufsangebot bezeichnet. Eigene Wertschätzungen bleiben ausdrücklich eigene Schätzungen.

Normal, Holo, Reverse Holo, 1st Edition, Shadowless und Grading dürfen nicht blind auf einen gemeinsamen Preis zurückfallen. Unbestätigte Varianten bleiben preisoffen. Die gespeicherten Beobachtungen zeigen den bisherigen lokalen Verlauf; sie sind kein vollständiges historisches Marktarchiv. Änderungen gegenüber der vorigen Beobachtung erhalten eine Richtung und Farbe. Anbieterdatum und letzter erfolgreicher Abruf bleiben unterscheidbar. Ein fehlender neuer Preis löscht keinen vorhandenen Wert.

## Suche, Vorschläge und Erkennung

- Katalogsuche nach Kartenname/Nummer oder separat nach Setname/Set-ID. In der eigenen Sammlung bleibt die Suche lokal; die Katalogsuche erfolgt beim Hinzufügen.
- Kombinierte Eingaben wie `Glurak 151 006/165`; zusätzliche Felder grenzen Set und Nummer ein.
- Deutsch, Englisch, Spanisch und Französisch werden in der breiten Suche einbezogen. Alternativ nur in der gewählten Kartensprache suchen. Häufige internationale Pokémon-Namen erhalten passende Suchvarianten.
- Ergebnisse werden zunächst in Portionen von 48 angezeigt; „Weitere Karten laden“ lädt tatsächliche weitere API-Seiten. Es gibt keine Begrenzung auf zwanzig Vorschläge.
- Zusätzliche Filter prüfen Set, Seltenheit, Oberfläche und verfügbare Auflage. Bei fehlenden Kartendetails werden Eigenschaften nicht geraten. „Filter anwenden“ kann deshalb zusätzliche Kartendetails laden.
- Name, Nummer und Set bleiben beim bildbasierten Sortieren beteiligt. Hohe Bildähnlichkeit allein verdrängt nicht automatisch eine genaue textliche Zuordnung. Bildähnlichkeitswerte sind keine kalibrierten Trefferwahrscheinlichkeiten.
- Französische und spanische Titelzeilen und Lebenspunkte werden besser bereinigt. Automatische OCR beginnt bei französischer/spanischer App-Sprache mit dem passenden lateinischen Modell und Englisch; erkannte Kartensprache kann davon abweichen.

Der vorhandene lokale Fotoeditor, Randerkennung, Qualitätswarnungen, Korrekturvorschläge, Schnellscan und experimentelle lokale Bild-KI bleiben erhalten. Ein einzelnes Foto bestätigt keine Druckvariante oder Echtheit. Unscharfe oder spiegelnde Fotos enthalten unter Umständen zu wenig Information; nach dem Zuschnitt die Vorschau prüfen.

## Manuell hinzufügen

Die manuelle Eingabe bleibt ohne Scan und ohne Datenbanktreffer möglich. Unter **Eigene Vorder- & Rückseite** lassen sich beide Fotos über Kamera/Galerie ergänzen. Eigene Referenzbilder und die bisherige Bildauswahl bleiben zusätzlich verfügbar. Ein laufender Fotoimport blockiert das Speichern bis zum Abschluss. Name und Anzahl sowie Kaufpreis werden geprüft; negative Kaufpreise und gebrochene Stückzahlen werden abgelehnt.

Ein Kaufdatum ergänzt Kaufpreis und Anzahl. Doppelte Karten mit gleicher Sprache, Variante und Zustand lösen weiter die vorhandene Rückfrage aus. Fehlende Katalogdaten oder Preise verhindern keinen manuellen Eintrag.

## Wunschliste

Wunschkarten aus Suchtreffern, Scanner oder Kartenaktionen vormerken. Bilder, Set, Nummer, Seltenheit, Sprache, Oberfläche, Auflage und vorhandene Referenzpreise bleiben erhalten. Zielpreis, Priorität, Kategorien und Notizen lassen sich ändern. Filter und Sortierung sind in einem aufklappbaren Bereich zusammengefasst.

Gleiche Varianten werden nicht doppelt eingetragen. Andere Sprachen, Oberflächen, Auflagen oder Grades bleiben getrennt. Exakter Besitz wird mit Anzahl angezeigt; eine lediglich gleiche Katalogkarte kann als Hinweis erscheinen, wenn die Variante abweicht. Die Übernahme in die Sammlung bestätigt erst Besitz, Anzahl, Zustand, Kaufpreis/-datum und Album. Ein bereits vorhandenes Exemplar wird geöffnet, statt still ein weiteres anzulegen.

„Preise prüfen“ wertet Ziele während der geöffneten App aus. Alte oder gespeicherte Referenzen werden nicht als sicher aktueller Preisalarm bezeichnet. Es gibt keine Hintergrund-/Push-Benachrichtigung. Export und Textteilen beziehen sich auf die gefilterte Liste; ein Wunschlisten-Import ergänzt neue Einträge und überspringt Duplikate. Eigene Fotodateien sind im Komplett-Backup enthalten, nicht im teilbaren Wunschlisten-Export.

## Vergleich mit zwei bis vier Karten

Karten aus Sammlung, Wunschliste oder geladenen Suchtreffern vergleichen. Der Vergleich ist über den Kopf mit `⇄` wieder erreichbar. Mehrfachauswahl in der Sammlung bietet ebenfalls Vergleichen an.

Bilder, Merkmale, EUR-Referenzen, Preisabstände, Kaufpreise und Differenzen stehen in gleichen Spalten. Unterschiede sind hervorgehoben. Fehlende Angaben bleiben sichtbar. Bei zwei Karten lässt sich ein Bild-Slider samt Zoom verwenden. Vorderseiten und eigene Rückseiten sind getrennt wählbar; eine fehlende Rückseite wird nicht durch ein beliebiges Katalogbild ersetzt. Bilder öffnen im Vollbild, Karten können direkt ausgetauscht werden. Geänderte Varianten im Vergleich verändern die gespeicherte Karte nicht und verwenden nicht deren alten Preis.

Auf kleinen Bildschirmen ist die Tabelle bei Bedarf horizontal scrollbar; drei/vier Karten werden nicht unlesbar schmal gedrückt.

## Set-Tracker und größere Sammlungen

Set-Fortschritt unterscheidet Kartensprache und bestätigte Oberflächen. Ohne vollständige Details werden ungeprüfte Varianten ausdrücklich gezählt. „Varianten & Preise laden“ ergänzt Details bei Bedarf. Fehlende bestätigte Varianten können gesammelt auf die Wunschliste. Eine Kostensumme enthält nur bekannte Referenzen; fehlende Werte sind keine 0-Euro-Karten.

Sammlungsraster zeigen zunächst 120 Einträge, Wunschlisten 60. Weitere werden per Schaltfläche angezeigt. Suche, Export und Auswahl verwenden weiterhin die gesamte gefilterte Datenmenge. Die vorhandenen Alben, freien Fächer, Unteralben, Cover, eigenen Spaltenzahlen und Mehrfachbearbeitung bleiben erhalten.

## Update installieren

1. Vorher ein **Komplett-Backup mit Fotos** erstellen.
2. ZIP vollständig entpacken und alle App-Dateien sowie `icons/` in den bisherigen GitHub-Pages-Ordner hochladen. Neue Dateien wie `organizer-rules.js`, `wishlist.js`, `comparison.js`, `tracker.js`, `discovery.js`, `locales.js`, `i18n.js` und `organizer.css` gehören dazu.
3. Dieselbe HTTPS-Adresse im selben Browser öffnen und unter Mehr → Daten auf Updates prüfen. Browserdaten nicht löschen.
4. App-Sprache wechseln; eine Karte öffnen; Wunschliste/ Vergleich und einen manuellen Eintrag prüfen. Das vollständige Testergebnis steht in TESTS-3.3.md.

Die ZIP aktualisiert dein GitHub-Repository nicht automatisch. Echte Kamera-/Installationsprüfungen auf deinem Android-Gerät und auf iOS bleiben nach dem Upload nötig.
