/* UI translations. Database values, user text and card identity remain unchanged. */
(function(root){'use strict';const languages=['de','en','es','fr'];const table={};
const rows=`
Start|Home|Inicio|Accueil
Karten|Cards|Cartas|Cartes
Alben|Albums|Álbumes|Albums
Mehr|More|Más|Plus
Scannen|Scan|Escanear|Scanner
Sammlung|Collection|Colección|Collection
Wunschliste|Wishlist|Lista de deseos|Liste de souhaits
Favoriten|Favorites|Favoritos|Favoris
Einstellungen|Settings|Ajustes|Paramètres
Aussehen|Appearance|Apariencia|Apparence
Profil|Profile|Perfil|Profil
Daten|Data|Datos|Données
Karten & Preise|Cards & prices|Cartas y precios|Cartes et prix
Deutsch|German|Alemán|Allemand
Englisch|English|Inglés|Anglais
Spanisch|Spanish|Español|Espagnol
Französisch|French|Francés|Français
Japanisch|Japanese|Japonés|Japonais
Chinesisch (vereinfacht)|Chinese (simplified)|Chino simplificado|Chinois simplifié
Chinesisch (traditionell)|Chinese (traditional)|Chino tradicional|Chinois traditionnel
Koreanisch|Korean|Coreano|Coréen
Italienisch|Italian|Italiano|Italien
Portugiesisch|Portuguese|Portugués|Portugais
Niederländisch|Dutch|Neerlandés|Néerlandais
Polnisch|Polish|Polaco|Polonais
Russisch|Russian|Ruso|Russe
Thailändisch|Thai|Tailandés|Thaï
Indonesisch|Indonesian|Indonesio|Indonésien
Andere|Other|Otro|Autre
Alle|All|Todos|Tout
Alle Sprachen|All languages|Todos los idiomas|Toutes les langues
Alle Suchsprachen|All search languages|Todos los idiomas de búsqueda|Toutes les langues de recherche
Sprache|Language|Idioma|Langue
App-Sprache|App language|Idioma de la aplicación|Langue de l’application
Gerätesprache verwenden|Use device language|Usar idioma del dispositivo|Utiliser la langue de l’appareil
Kartennamen an App-Sprache anpassen|Display card names in app language|Mostrar nombres en el idioma de la aplicación|Afficher les noms dans la langue de l’application
Die App-Sprache ändert weder die Sprache deiner physischen Karten noch deren Preiszuordnung.|App language changes neither your physical card language nor price matching.|El idioma de la aplicación no cambia el idioma de tus cartas físicas ni sus precios.|La langue de l’application ne change ni la langue de vos cartes physiques ni leurs prix.
Sprachwechsel gespeichert.|Language preference saved.|Idioma guardado.|Langue enregistrée.
DEINE KARTENSAMMLUNG|YOUR CARD COLLECTION|TU COLECCIÓN DE CARTAS|VOTRE COLLECTION DE CARTES
DEINE SAMMLUNG|YOUR COLLECTION|TU COLECCIÓN|VOTRE COLLECTION
DEIN INVENTAR|YOUR INVENTORY|TU INVENTARIO|VOTRE INVENTAIRE
DEINE HIGHLIGHTS|YOUR HIGHLIGHTS|TUS FAVORITAS|VOS COUPS DE CŒUR
DEIN WORKSPACE|YOUR WORKSPACE|TU ESPACIO|VOTRE ESPACE
KARTENDETAILS|CARD DETAILS|DETALLES DE LA CARTA|DÉTAILS DE LA CARTE
KARTEN-STUDIO|CARD STUDIO|ESTUDIO DE CARTAS|ATELIER DE CARTES
KARTENAKTIONEN|CARD ACTIONS|ACCIONES DE CARTA|ACTIONS DE CARTE
DEIN NÄCHSTER FUND|YOUR NEXT FIND|TU PRÓXIMO HALLAZGO|VOTRE PROCHAINE TROUVAILLE
PREISE IM BLICK|PRICES AT A GLANCE|PRECIOS A LA VISTA|APERÇU DES PRIX
UNTERSCHIEDE IM BLICK|SPOT THE DIFFERENCES|COMPARA LAS DIFERENCIAS|COMPAREZ LES DIFFÉRENCES
ORGANISIERE DEINE SCHÄTZE|ORGANIZE YOUR TREASURES|ORGANIZA TUS TESOROS|ORGANISEZ VOS TRÉSORS
Deine Sammlung.|Your collection.|Tu colección.|Votre collection.
Mit jedem Scan mehr.|Growing with every scan.|Crece con cada escaneo.|Elle grandit à chaque scan.
Entdecken. Festhalten. Wiederfinden.|Discover. Save. Rediscover.|Descubre. Guarda. Encuentra.|Découvrez. Enregistrez. Retrouvez.
ERFASSTER REFERENZWERT|RECORDED REFERENCE VALUE|VALOR DE REFERENCIA REGISTRADO|VALEUR DE RÉFÉRENCE ENREGISTRÉE
Nur Karten mit verfügbarem Referenzpreis · kein Verkaufswert|Only cards with a reference price · not a sale value|Solo cartas con precio de referencia · no es un precio de venta|Cartes avec prix de référence uniquement · pas une valeur de vente
Einträge|Entries|Entradas|Entrées
Schnellzugriff|Quick access|Acceso rápido|Accès rapide
Karte scannen|Scan a card|Escanear carta|Scanner une carte
Neue Karte erfassen|Add a new card|Añadir carta nueva|Ajouter une carte
Meine Alben|My albums|Mis álbumes|Mes albums
Sammlung sortieren|Organize collection|Organizar colección|Organiser la collection
Dein nächster Fund|Your next find|Tu próximo hallazgo|Votre prochaine trouvaille
Deine Highlights|Your highlights|Tus favoritas|Vos coups de cœur
Preise & Werte|Prices & values|Precios y valores|Prix et valeurs
Verlauf, Quellen und Preisprobleme|History, sources and missing prices|Historial, fuentes y precios ausentes|Historique, sources et prix manquants
Zuletzt hinzugefügt|Recently added|Añadidas recientemente|Ajouts récents
Alle ansehen →|View all →|Ver todas →|Tout voir →
Mit Referenzpreis|With reference price|Con precio de referencia|Avec prix de référence
Erfasste Kaufkosten|Recorded purchase costs|Costes de compra registrados|Achats enregistrés
Deine Sammlung bleibt auf diesem Gerät. Sichere sie regelmäßig mit einem Komplett-Backup.|Your collection stays on this device. Create full backups regularly.|Tu colección permanece en este dispositivo. Haz copias completas con frecuencia.|Votre collection reste sur cet appareil. Faites régulièrement une sauvegarde complète.
Deine Sammlung ist lokal gespeichert. Zeit für ein Komplett-Backup.|Your collection is stored locally. Time for a full backup.|Tu colección se guarda localmente. Es hora de hacer una copia completa.|Votre collection est stockée localement. Pensez à une sauvegarde complète.
Jetzt sichern|Back up now|Hacer copia ahora|Sauvegarder maintenant
Alle Sets|All sets|Todas las expansiones|Toutes les extensions
Alle Varianten|All variants|Todas las variantes|Toutes les variantes
Variante|Variant|Variante|Variante
Normal|Regular|Normal|Normale
Holo|Holo|Holo|Holo
Reverse Holo|Reverse holo|Holo inversa|Holo inversée
Unklar|Unconfirmed|Sin confirmar|Non confirmée
Ungeprüft|Not checked|Sin revisar|Non vérifié
Noch nicht geprüft|Not checked yet|Aún sin revisar|Pas encore vérifié
Zustand|Condition|Estado|État
Near Mint · fast makellos|Near Mint · almost flawless|Near Mint · casi impecable|Near Mint · presque parfaite
Excellent · minimale Spuren|Excellent · minimal wear|Excellent · marcas mínimas|Excellent · traces minimes
Good · leichte Gebrauchsspuren|Good · light wear|Good · desgaste leve|Good · usure légère
Light Played · sichtbare Spuren|Light Played · visible wear|Light Played · desgaste visible|Light Played · usure visible
Played · stark bespielt|Played · heavy wear|Played · mucho desgaste|Played · très jouée
Poor · stark beschädigt|Poor · heavily damaged|Poor · muy dañada|Poor · très abîmée
Auflage|Edition|Edición|Édition
Unmarkiert / Unlimited|Unmarked / unlimited|Sin marca / ilimitada|Sans marque / illimitée
Unlimitiert|Unlimited|Ilimitada|Illimitée
Shadowless bestätigt|Shadowless confirmed|Shadowless confirmada|Shadowless confirmée
Ansicht|View|Vista|Affichage
Kartengitter|Card grid|Cuadrícula de cartas|Grille de cartes
Kompakte Liste|Compact list|Lista compacta|Liste compacte
Filter & Darstellung|Filters & display|Filtros y visualización|Filtres et affichage
Filter zurücksetzen|Reset filters|Restablecer filtros|Réinitialiser les filtres
Mehrere bearbeiten|Edit multiple|Editar varias|Modifier plusieurs cartes
Mehrere auswählen|Select multiple|Seleccionar varias|Sélectionner plusieurs cartes
Auswahl bearbeiten|Edit selection|Editar selección|Modifier la sélection
Auswahl beenden|End selection|Terminar selección|Quitter la sélection
Sichtbare auswählen|Select matching cards|Seleccionar coincidencias|Sélectionner les résultats
Alle Treffer auswählen|Select all results|Seleccionar todos los resultados|Sélectionner tous les résultats
Neueste zuerst|Newest first|Más recientes|Plus récentes
Name A–Z|Name A–Z|Nombre A–Z|Nom A–Z
Höchster Preis|Highest price|Precio más alto|Prix le plus élevé
Kartennummer|Card number|Número de carta|Numéro de carte
Anzahl|Quantity|Cantidad|Quantité
Doppelte Karten prüfen|Check duplicates|Buscar duplicadas|Rechercher les doublons
Dublettenfilter beenden|Clear duplicate filter|Quitar filtro de duplicadas|Retirer le filtre des doublons
Karten hinzufügen|Add cards|Añadir cartas|Ajouter des cartes
Karten anordnen|Arrange cards|Ordenar cartas|Disposer les cartes
Anordnen|Arrange|Ordenar|Disposer
Fertig|Done|Listo|Terminé
Übersicht|Overview|Resumen|Vue d’ensemble
Album blättern|Browse binder|Ver archivador|Feuilleter le classeur
Set-Fortschritt|Set progress|Progreso de expansión|Progression de l’extension
Neue Karte|New card|Nueva carta|Nouvelle carte
Suche, manuelle Eingabe oder Foto – du entscheidest.|Search, manual entry or photo — your choice.|Busca, introduce datos o haz una foto: tú eliges.|Recherche, saisie manuelle ou photo : à vous de choisir.
Foto|Photo|Foto|Photo
Karte prüfen|Review card|Revisar carta|Vérifier la carte
Speichern|Save|Guardar|Enregistrer
Kamera|Camera|Cámara|Appareil photo
Foto aufnehmen|Take photo|Hacer foto|Prendre une photo
Galerie / Dateien|Gallery / files|Galería / archivos|Galerie / fichiers
Bild auswählen|Choose image|Elegir imagen|Choisir une image
Karte erkennen|Identify card|Identificar carta|Identifier la carte
Foto hinzufügen|Add photo|Añadir foto|Ajouter une photo
Foto bearbeiten|Edit photo|Editar foto|Modifier la photo
Weitere Foto- & Erkennungshilfen|More photo & recognition tools|Más herramientas de foto y reconocimiento|Autres outils photo et reconnaissance
Automatisch zuschneiden|Auto crop|Recortar automáticamente|Recadrer automatiquement
Ränder & Perspektive|Edges & perspective|Bordes y perspectiva|Bords et perspective
Original wiederherstellen|Restore original|Restaurar original|Restaurer l’original
Original zurück|Restore original|Restaurar original|Restaurer l’original
Original verwenden|Use original|Usar original|Utiliser l’original
Karte zuschneiden|Crop card|Recortar carta|Recadrer la carte
Foto entfernen|Remove photo|Quitar foto|Retirer la photo
Bild um 90° drehen|Rotate image 90°|Girar imagen 90°|Tourner l’image de 90°
Ränder finden|Find edges|Detectar bordes|Détecter les bords
↶ Links|↶ Left|↶ Izquierda|↶ Gauche
↷ Rechts|↷ Right|↷ Derecha|↷ Droite
Vorschau|Preview|Vista previa|Aperçu
Helligkeit & Kontrast|Brightness & contrast|Brillo y contraste|Luminosité et contraste
Helligkeit|Brightness|Brillo|Luminosité
Kontrast|Contrast|Contraste|Contraste
Lichtwerte zurücksetzen|Reset light settings|Restablecer ajustes de luz|Réinitialiser la lumière
Übernehmen|Apply|Aplicar|Appliquer
Abbrechen|Cancel|Cancelar|Annuler
Schließen|Close|Cerrar|Fermer
Setze die vier Punkte auf die Kartenecken. Die Lupe hilft beim genauen Ausrichten.|Place the four points on the card corners. Use the magnifier for precision.|Coloca los cuatro puntos en las esquinas. Usa la lupa para mayor precisión.|Placez les quatre points aux coins de la carte. La loupe aide à les ajuster.
Außenränder vorgeschlagen. Ecken in der Vorschau prüfen.|Suggested outer edges. Check the corners in the preview.|Bordes exteriores propuestos. Revisa las esquinas en la vista previa.|Bords extérieurs proposés. Vérifiez les coins dans l’aperçu.
Spiegelungen und verlorene Details lassen sich nicht zuverlässig entfernen.|Glare and missing details cannot be reliably removed.|No se pueden eliminar de forma fiable los reflejos ni recuperar detalles perdidos.|Les reflets et les détails perdus ne peuvent pas être corrigés de façon fiable.
OCR-Ergebnis prüfen|Review OCR result|Revisar resultado OCR|Vérifier le résultat OCR
Erkannte Daten kontrollieren|Review recognized data|Revisar datos reconocidos|Vérifier les données reconnues
Die Texterkennung kann Fehler machen. Übernimm nur passende Vorschläge.|Text recognition can make mistakes. Confirm only matching suggestions.|El reconocimiento puede fallar. Confirma solo resultados correctos.|La reconnaissance peut se tromper. Confirmez uniquement les résultats corrects.
Erkannten Rohtext anzeigen|Show raw recognized text|Ver texto reconocido|Afficher le texte reconnu
Kandidaten nach Bild vergleichen|Compare candidates by image|Comparar candidatos por imagen|Comparer les résultats par image
Bildsuche innerhalb eines Sets|Image search within a set|Buscar por imagen en una expansión|Recherche par image dans une extension
Set-Katalog laden|Load set catalog|Cargar catálogo de expansiones|Charger le catalogue des extensions
Set suchen|Search sets|Buscar expansiones|Rechercher une extension
Set auswählen|Choose set|Elegir expansión|Choisir une extension
Zuerst Katalog laden|Load catalog first|Carga primero el catálogo|Chargez d’abord le catalogue
Set laden & Bildvergleich starten|Load set & compare images|Cargar expansión y comparar imágenes|Charger l’extension et comparer les images
Vergleich abbrechen|Cancel comparison|Cancelar comparación|Annuler la comparaison
Bild-KI ausprobieren|Try image AI|Probar IA de imágenes|Essayer l’IA d’images
Bild-KI starten|Start image AI|Iniciar IA de imágenes|Lancer l’IA d’images
Erkennung abbrechen|Cancel recognition|Cancelar reconocimiento|Annuler la reconnaissance
Kartendaten|Card information|Datos de la carta|Informations de la carte
Name *|Name *|Nombre *|Nom *
Name|Name|Nombre|Nom
Nummer|Number|Número|Numéro
Set|Set|Expansión|Extension
Suche nach Set eingrenzen|Narrow search by set|Limitar búsqueda por expansión|Limiter la recherche par extension
Schnellsuche|Quick search|Búsqueda rápida|Recherche rapide
Name, Set und Nummer in einer Zeile.|Name, set and number in one line.|Nombre, expansión y número en una línea.|Nom, extension et numéro sur une seule ligne.
Karten suchen|Search cards|Buscar cartas|Rechercher des cartes
Nur physische Karten|Physical cards only|Solo cartas físicas|Cartes physiques uniquement
Treffersprache|Result language|Idioma del resultado|Langue des résultats
Auswahl vergleichen (2–4)|Compare selection (2–4)|Comparar selección (2–4)|Comparer la sélection (2–4)
Nächstes Bild|Next image|Siguiente imagen|Image suivante
Nach dem Speichern direkt nächstes Bild|Next image after saving|Siguiente imagen al guardar|Image suivante après l’enregistrement
Kartenvorschläge|Card suggestions|Sugerencias de cartas|Suggestions de cartes
Bilder vergleichen und Treffer auswählen|Compare images and select a match|Compara imágenes y elige una carta|Comparez les images et choisissez une carte
Andere Karte wählen|Choose another card|Elegir otra carta|Choisir une autre carte
Kartenoberfläche|Card finish|Acabado de la carta|Finition de la carte
Album|Album|Álbum|Album
Kein Album|No album|Sin álbum|Aucun album
Preisdetails & eigene Wertschätzung|Price details & own estimate|Detalles de precio y estimación propia|Détails du prix et estimation personnelle
Noch kein Referenzpreis verfügbar.|No reference price available yet.|Aún no hay precio de referencia.|Aucun prix de référence disponible.
Eigene Wertschätzung pro Karte (€)|Own estimate per card (€)|Estimación propia por carta (€)|Estimation personnelle par carte (€)
Optional, wenn kein passender Marktpreis vorhanden ist.|Optional when no matching market price is available.|Opcional si no hay precio de mercado adecuado.|Facultatif si aucun prix de marché adapté n’est disponible.
Preis erneut abrufen|Refresh price|Actualizar precio|Actualiser le prix
Weitere Angaben · optional|More information · optional|Más datos · opcional|Informations complémentaires · facultatif
Kaufpreis pro Karte (€)|Purchase price per card (€)|Precio de compra por carta (€)|Prix d’achat par carte (€)
Kaufpreis|Purchase price|Precio de compra|Prix d’achat
Kaufdatum (optional)|Purchase date (optional)|Fecha de compra (opcional)|Date d’achat (facultative)
Status|Status|Estado|Statut
Tauschen|Trade|Intercambiar|Échanger
Verkaufen|Sell|Vender|Vendre
Tags|Tags|Etiquetas|Étiquettes
Seltenheit|Rarity|Rareza|Rareté
Notizen (optional)|Notes (optional)|Notas (opcional)|Notes (facultatives)
Notizen|Notes|Notas|Notes
Als Favorit markieren|Mark as favorite|Marcar como favorita|Marquer comme favori
In Sammlung speichern|Save to collection|Guardar en colección|Enregistrer dans la collection
Manuell hinzufügen|Add manually|Añadir manualmente|Ajouter manuellement
Ohne Foto und Scan|Without photo or scan|Sin foto ni escaneo|Sans photo ni scan
Karte suchen|Search card|Buscar carta|Rechercher une carte
Name oder Nummer|Name or number|Nombre o número|Nom ou numéro
Manuell eingeben|Enter manually|Introducir manualmente|Saisie manuelle
Ganz ohne Erkennung|No recognition needed|Sin reconocimiento|Sans reconnaissance
Kamera oder Galerie|Camera or gallery|Cámara o galería|Appareil photo ou galerie
Angaben & speichern|Review & save|Revisar y guardar|Vérifier et enregistrer
Name eingeben und speichern. Foto und Scan sind optional.|Enter a name and save. Photo and scanning are optional.|Introduce el nombre y guarda. La foto y el escaneo son opcionales.|Saisissez un nom et enregistrez. Photo et scan sont facultatifs.
Bild in deiner Sammlung|Image in your collection|Imagen en tu colección|Image dans votre collection
App-Standard verwenden|Use app default|Usar predeterminado|Utiliser le réglage de l’application
Automatisch · Referenz zuerst|Automatic · reference first|Automático · referencia primero|Automatique · référence d’abord
Vorgegebenes Referenzbild|Catalog reference image|Imagen de referencia del catálogo|Image de référence du catalogue
Eigenes Foto|Own photo|Foto propia|Photo personnelle
Eigene Referenz|Custom reference|Referencia propia|Référence personnalisée
Kein Bild|No image|Sin imagen|Aucune image
Eigene Referenzdatei hinzufügen (optional)|Add custom reference file (optional)|Añadir referencia propia (opcional)|Ajouter une référence personnelle (facultatif)
Eigene Vorder- & Rückseite|Own front & back photos|Fotos propias del anverso y reverso|Photos personnelles recto et verso
Vorderseite hinzufügen|Add front photo|Añadir anverso|Ajouter le recto
Rückseite hinzufügen|Add back photo|Añadir reverso|Ajouter le verso
Zusatzfotos entfernen|Remove extra photos|Quitar fotos adicionales|Retirer les photos supplémentaires
Vorderseite bereit|Front photo ready|Anverso listo|Recto prêt
Rückseite bereit|Back photo ready|Reverso listo|Verso prêt
Foto wird gespeichert …|Saving photo…|Guardando foto…|Enregistrement de la photo…
Katalog durchsuchen nach|Search catalog by|Buscar en el catálogo por|Rechercher dans le catalogue par
Kartenname / Nummer|Card name / number|Nombre / número de carta|Nom / numéro de carte
Setname oder Set-ID|Set name or set ID|Nombre o ID de expansión|Nom ou identifiant de l’extension
Suchfilter & Merkmale|Search filters & features|Filtros y características|Filtres et caractéristiques
Set eingrenzen|Filter by set|Filtrar por expansión|Filtrer par extension
Oberfläche|Finish|Acabado|Finition
Alle Oberflächen|All finishes|Todos los acabados|Toutes les finitions
Alle Auflagen|All editions|Todas las ediciones|Toutes les éditions
1st Edition verfügbar|1st edition available|Primera edición disponible|Première édition disponible
Shadowless im Katalog bestätigt|Shadowless confirmed in catalog|Shadowless confirmada en catálogo|Shadowless confirmée au catalogue
Filter anwenden|Apply filters|Aplicar filtros|Appliquer les filtres
Suchfilter zurücksetzen|Reset search filters|Restablecer filtros de búsqueda|Réinitialiser les filtres de recherche
Karte hinzufügen|Add card|Añadir carta|Ajouter une carte
Keine passenden Karten|No matching cards|No hay cartas coincidentes|Aucune carte correspondante
Keine passenden Treffer.|No matching results.|No hay coincidencias.|Aucun résultat correspondant.
Keine passenden Option.|No matching option.|No hay opción coincidente.|Aucune option correspondante.
Option suchen …|Search options…|Buscar opciones…|Rechercher une option…
Bitte auswählen|Please choose|Elige una opción|Veuillez choisir
Auswählen|Choose|Elegir|Choisir
Auswahl schließen|Close selection|Cerrar selección|Fermer la sélection
Darstellung|Appearance|Apariencia|Apparence
Hell|Light|Claro|Clair
Dunkel|Dark|Oscuro|Sombre
Automatisch|Automatic|Automático|Automatique
Wie auf dem Gerät|Use device setting|Como en el dispositivo|Comme sur l’appareil
Farbe|Color|Color|Couleur
Stil|Style|Estilo|Style
Standard|Standard|Estándar|Standard
Schlicht|Minimal|Minimalista|Minimaliste
Glas|Glass|Cristal|Verre
Hoher Kontrast|High contrast|Alto contraste|Contraste élevé
Oberflächenstil|Interface style|Estilo de interfaz|Style de l’interface
Darstellung, Farbe und Stil. Weitere Optionen bleiben eingeklappt.|Appearance, color and style. More options stay collapsed.|Apariencia, color y estilo. Las demás opciones permanecen plegadas.|Apparence, couleur et style. Les autres options restent repliées.
Lesbarkeit & Karten|Readability & cards|Legibilidad y cartas|Lisibilité et cartes
Startseite & Standardwerte|Home & defaults|Inicio y valores predeterminados|Accueil et valeurs par défaut
Design zurücksetzen|Reset design|Restablecer diseño|Réinitialiser le style
Farben & Lesbarkeit|Colors & readability|Colores y legibilidad|Couleurs et lisibilité
Deine Sammlerdaten|Your collector information|Tus datos de coleccionista|Vos informations de collectionneur
Scan & Preise|Scan & prices|Escaneo y precios|Scan et prix
Sicherung & App|Backup & app|Copias y aplicación|Sauvegarde et application
DEIN STIL|YOUR STYLE|TU ESTILO|VOTRE STYLE
Farbe wählen|Choose color|Elegir color|Choisir une couleur
Aus allen Farben wählen|Choose from all colors|Elegir entre todos los colores|Choisir parmi toutes les couleurs
Ändern →|Change →|Cambiar →|Changer →
Eigene Akzentfarbe|Custom accent color|Color de acento personalizado|Couleur d’accent personnalisée
Eigene Farbe|Custom color|Color personalizado|Couleur personnalisée
Amethyst|Amethyst|Amatista|Améthyste
Saphir|Sapphire|Zafiro|Saphir
Smaragd|Emerald|Esmeralda|Émeraude
Rosé|Rose|Rosa|Rose
Gold|Gold|Oro|Or
Lagune|Lagoon|Laguna|Lagon
Kupfer|Copper|Cobre|Cuivre
Graphit|Graphite|Grafito|Graphite
Rubin|Ruby|Rubí|Rubis
Eisblau|Ice blue|Azul hielo|Bleu glacier
Limette|Lime|Lima|Citron vert
Indigo|Indigo|Índigo|Indigo
Pfirsich|Peach|Melocotón|Pêche
Darstellung der Karten|Card display|Visualización de cartas|Affichage des cartes
Groß & übersichtlich|Large & clear|Grande y claro|Grand et lisible
Kompakt|Compact|Compacto|Compact
Textgröße|Text size|Tamaño de texto|Taille du texte
Groß|Large|Grande|Grande
Startseite|Home screen|Pantalla inicial|Écran d’accueil
Standardbild für Karten|Default card image|Imagen de carta predeterminada|Image de carte par défaut
Standardraster für Alben|Default album grid|Cuadrícula predeterminada de álbumes|Grille d’album par défaut
Karten pro Reihe|Cards per row|Cartas por fila|Cartes par ligne
Scannen & Erkennen|Scanning & recognition|Escaneo y reconocimiento|Scan et reconnaissance
Erweiterte Erkennung & Standardwerte|Advanced recognition & defaults|Reconocimiento avanzado y valores predeterminados|Reconnaissance avancée et valeurs par défaut
Fotos automatisch zuschneiden & entzerren|Automatically crop & straighten photos|Recortar y enderezar fotos automáticamente|Recadrer et redresser automatiquement les photos
Kartensprache automatisch bestimmen|Detect card language automatically|Detectar idioma de la carta|Détecter la langue de la carte
Kartenvorschläge beim Tippen laden|Load suggestions while typing|Cargar sugerencias al escribir|Charger les suggestions pendant la saisie
Nach OCR auch Referenzbilder vergleichen|Compare reference images after OCR|Comparar imágenes de referencia tras OCR|Comparer les images de référence après OCR
Hochauflösende Vorschau-Bilder|High resolution previews|Vistas previas de alta resolución|Aperçus haute résolution
Nach Fotoübernahme automatisch erkennen (nach einmaliger Aktivierung)|Recognize automatically after photo import (after activation)|Reconocer automáticamente tras importar foto (previa activación)|Reconnaître automatiquement après importation de photo (après activation)
Suchsprachen|Search languages|Idiomas de búsqueda|Langues de recherche
Gewählte Sprache + Deutsch / Englisch|Card language + German / English / Spanish / French|Idioma de carta + alemán / inglés / español / francés|Langue de carte + allemand / anglais / espagnol / français
Nur die gewählte Sprache|Selected card language only|Solo el idioma de carta elegido|Langue de carte sélectionnée uniquement
Texterkennung|Text recognition|Reconocimiento de texto|Reconnaissance de texte
Gründlich · mehrere Lesedurchgänge|Thorough · multiple passes|Completo · varias pasadas|Approfondie · plusieurs lectures
Schnell · zusätzliche Durchgänge bei Bedarf|Fast · more passes if needed|Rápido · más pasadas si hacen falta|Rapide · lectures supplémentaires si besoin
Standardsprache|Default card language|Idioma de carta predeterminado|Langue de carte par défaut
Standardzustand|Default condition|Estado predeterminado|État par défaut
Bevorzugter EUR-Referenzwert|Preferred EUR reference|Referencia EUR preferida|Référence EUR préférée
Cardmarket-Trend|Cardmarket trend|Tendencia Cardmarket|Tendance Cardmarket
7-Tage-Durchschnitt|7-day average|Media de 7 días|Moyenne sur 7 jours
30-Tage-Durchschnitt|30-day average|Media de 30 días|Moyenne sur 30 jours
Scan-Einstellungen zurücksetzen|Reset scan settings|Restablecer escaneo|Réinitialiser le scan
Daten sichern|Back up data|Guardar copia de datos|Sauvegarder les données
Komplett-Backup herunterladen|Download full backup|Descargar copia completa|Télécharger la sauvegarde complète
Backup importieren|Import backup|Importar copia|Importer une sauvegarde
Sammlung als CSV|Collection as CSV|Colección en CSV|Collection en CSV
Profil bearbeiten|Edit profile|Editar perfil|Modifier le profil
App installieren|Install app|Instalar aplicación|Installer l’application
Preise aktualisieren|Refresh prices|Actualizar precios|Actualiser les prix
Alle Referenzpreise aktualisieren|Refresh all reference prices|Actualizar todos los precios|Actualiser tous les prix de référence
App & Speicher|App & storage|Aplicación y almacenamiento|Application et stockage
Auf App-Update prüfen|Check for app update|Buscar actualización|Rechercher une mise à jour
Speicher & Verbindung prüfen|Check storage & connection|Comprobar almacenamiento y conexión|Vérifier le stockage et la connexion
Weitere Marktdaten|More market data|Más datos de mercado|Autres données du marché
Preisdaten importieren|Import price data|Importar datos de precios|Importer des données de prix
Leere Vorlage herunterladen|Download empty template|Descargar plantilla vacía|Télécharger un modèle vide
Preise & Datenschutz|Prices & privacy|Precios y privacidad|Prix et confidentialité
Datenquelle: TCGdex|Data source: TCGdex|Fuente de datos: TCGdex|Source de données : TCGdex
Preisprobleme|Price issues|Problemas de precios|Problèmes de prix
Referenzen aktualisieren|Refresh references|Actualizar referencias|Actualiser les références
Referenzbild|Reference image|Imagen de referencia|Image de référence
Mein Foto|My photo|Mi foto|Ma photo
Bilder|Images|Imágenes|Images
Preise|Prices|Precios|Prix
Bearbeiten|Edit|Editar|Modifier
Alben zuordnen|Assign albums|Asignar álbumes|Affecter des albums
In Alben speichern|Save in albums|Guardar en álbumes|Enregistrer dans les albums
Änderungen speichern|Save changes|Guardar cambios|Enregistrer les modifications
Aktionen|Actions|Acciones|Actions
Was möchtest du tun?|What would you like to do?|¿Qué quieres hacer?|Que souhaitez-vous faire ?
Preis aktualisieren|Refresh price|Actualizar precio|Actualiser le prix
Karte duplizieren|Duplicate card|Duplicar carta|Dupliquer la carte
Karte entfernen|Remove card|Quitar carta|Retirer la carte
Marktreferenzen für diese Variante neu laden|Reload market references for this variant|Recargar referencias para esta variante|Recharger les références pour cette variante
Eine weitere Kopie als eigenen Eintrag anlegen|Create another copy as a separate entry|Crear otra copia como entrada independiente|Créer une autre copie comme entrée distincte
Nach Bestätigung aus der Sammlung entfernen|Remove from collection after confirmation|Quitar de la colección tras confirmar|Retirer de la collection après confirmation
Duplizieren|Duplicate|Duplicar|Dupliquer
Löschen|Delete|Eliminar|Supprimer
Entfernen|Remove|Quitar|Retirer
Rückgängig|Undo|Deshacer|Annuler
Bestätigen|Confirm|Confirmar|Confirmer
Nicht verfügbar|Unavailable|No disponible|Indisponible
Nicht erfasst|Not recorded|Sin registrar|Non renseigné
Unbekannt|Unknown|Desconocido|Inconnu
Nicht bewertet|Not graded|Sin graduar|Non gradée
Unbewertet|Ungraded|Sin graduar|Non gradée
Grading|Grading|Graduación|Évaluation
Grade|Grade|Nota|Note
Kein Foto|No photo|Sin foto|Aucune photo
Preis offen|Price missing|Precio pendiente|Prix manquant
Preis prüfen|Check price|Comprobar precio|Vérifier le prix
Preise ansehen|View prices|Ver precios|Voir les prix
EUR-Referenz pro Karte|EUR reference per card|Referencia EUR por carta|Référence EUR par carte
Preisquelle|Price source|Fuente de precio|Source du prix
Preisstand|Price date|Fecha del precio|Date du prix
Letzter Abruf|Last retrieval|Última consulta|Dernière consultation
Kaufpreis / Karte|Purchase price / card|Precio de compra / carta|Prix d’achat / carte
Weitere Angaben & Verlauf|More information & history|Más datos e historial|Autres informations et historique
Weitere Kartendaten|More card details|Más datos de carta|Autres détails de la carte
Preisquelle & Stand|Price source & date|Fuente y fecha del precio|Source et date du prix
Gespeicherte Preisabrufe|Saved price observations|Consultas de precios guardadas|Relevés de prix enregistrés
Änderungsverlauf|Change history|Historial de cambios|Historique des modifications
Noch kein Verlauf|No history yet|Aún sin historial|Aucun historique
Noch keine Abrufe gespeichert.|No saved observations yet.|Aún no hay consultas guardadas.|Aucun relevé enregistré.
Noch keine Beobachtungen.|No observations yet.|Aún sin observaciones.|Aucune observation.
Marktpreise aktualisieren|Refresh market prices|Actualizar precios de mercado|Actualiser les prix du marché
Kartenvariante / Zuordnung prüfen|Review variant / matching|Revisar variante y asociación|Vérifier la variante et l’association
Karte zuordnen|Match card|Asociar carta|Associer la carte
Deine Kartenbilder|Your card images|Tus imágenes de cartas|Vos images de cartes
Bild für diese Karte|Image for this card|Imagen de esta carta|Image de cette carte
Eigene Referenz hinzufügen / ersetzen|Add / replace custom reference|Añadir / sustituir referencia propia|Ajouter / remplacer la référence personnelle
Fotos & Vollbild|Photos & full screen|Fotos y pantalla completa|Photos et plein écran
Rückseite|Back|Reverso|Verso
Vorderseite|Front|Anverso|Recto
Eigene Rückseite|Own back photo|Reverso propio|Verso personnel
Eigenes Bild bearbeiten|Edit own image|Editar imagen propia|Modifier l’image personnelle
Foto im Vollbild ansehen|View photo full screen|Ver foto a pantalla completa|Voir la photo en plein écran
Rückseite hinzufügen / ersetzen|Add / replace back photo|Añadir / sustituir reverso|Ajouter / remplacer le verso
Eigenes Foto hinzufügen / ersetzen|Add / replace own photo|Añadir / sustituir foto propia|Ajouter / remplacer la photo personnelle
Vorgegebenes Katalogbild|Catalog reference image|Imagen del catálogo|Image du catalogue
Dein lokal gespeichertes Bild|Your locally stored image|Tu imagen guardada localmente|Votre image stockée localement
Kein Bild ausgewählt|No image selected|Ninguna imagen elegida|Aucune image sélectionnée
Album erstellen|Create album|Crear álbum|Créer un album
Album bearbeiten|Edit album|Editar álbum|Modifier l’album
Albumname|Album name|Nombre del álbum|Nom de l’album
Übergeordnetes Album|Parent album|Álbum superior|Album parent
Keines|None|Ninguno|Aucun
Eigenes Cover|Custom cover|Portada propia|Couverture personnelle
Vorhandenes Cover entfernen|Remove current cover|Quitar portada actual|Retirer la couverture actuelle
Feste Fächer mit freien Plätzen|Fixed pockets with empty spaces|Huecos fijos con espacios vacíos|Pochettes fixes avec emplacements libres
Symbol|Icon|Icono|Icône
Ordner|Folder|Carpeta|Dossier
Besondere Karten|Special cards|Cartas especiales|Cartes spéciales
Album löschen|Delete album|Eliminar álbum|Supprimer l’album
+ Neues Album|+ New album|+ Nuevo álbum|+ Nouvel album
Dein Sammlerprofil|Your collector profile|Tu perfil de coleccionista|Votre profil de collectionneur
Deine persönliche Sammlung · lokal gespeichert|Your personal collection · stored locally|Tu colección personal · guardada localmente|Votre collection personnelle · stockée localement
Profilbild|Profile picture|Foto de perfil|Photo de profil
Benutzername|Username|Nombre de usuario|Nom d’utilisateur
Über mich|About me|Sobre mí|À propos de moi
Designfarbe|Theme color|Color del tema|Couleur du thème
Profil speichern|Save profile|Guardar perfil|Enregistrer le profil
Lieblings-Pokémon|Favorite Pokémon|Pokémon favorito|Pokémon préféré
Sammelschwerpunkt|Collection focus|Tema de colección|Thème de collection
Sammelziel (Kartenanzahl)|Collection goal (card count)|Objetivo de colección (cartas)|Objectif de collection (nombre de cartes)
Werte auf der Startseite und in Kartenrastern ausblenden|Hide values on home and card grids|Ocultar valores en inicio y cuadrículas|Masquer les valeurs sur l’accueil et les grilles
Profilbild entfernen|Remove profile picture|Quitar foto de perfil|Retirer la photo de profil
Wunschkarte hinzufügen|Add wish|Añadir deseo|Ajouter un souhait
Wunschkarte bearbeiten|Edit wish|Editar deseo|Modifier le souhait
Kartenname|Card name|Nombre de carta|Nom de la carte
Set / Nummer|Set / number|Expansión / número|Extension / numéro
Zielbudget (€)|Target budget (€)|Presupuesto objetivo (€)|Budget cible (€)
Zur Wunschliste hinzufügen|Add to wishlist|Añadir a deseos|Ajouter aux souhaits
Auf Wunschliste|Add to wishlist|Añadir a deseos|Ajouter aux souhaits
Wunschkarte entfernen|Remove wish|Quitar deseo|Retirer le souhait
Wunschkarten suchen|Search wishes|Buscar deseos|Rechercher des souhaits
Sortieren & filtern|Sort & filter|Ordenar y filtrar|Trier et filtrer
Sortierung|Sort order|Orden|Tri
Priorität|Priority|Prioridad|Priorité
Preis aufsteigend|Price: low to high|Precio: menor a mayor|Prix croissant
Preis absteigend|Price: high to low|Precio: mayor a menor|Prix décroissant
Zuletzt hinzugefügt|Recently added|Añadidas recientemente|Ajouts récents
Kategorie|Category|Categoría|Catégorie
Alle Kategorien|All categories|Todas las categorías|Toutes les catégories
Zeigen|Show|Mostrar|Afficher
Alle Wunschkarten|All wishes|Todos los deseos|Tous les souhaits
Noch nicht vorhanden|Not owned yet|Aún no disponible|Pas encore possédée
Bereits vorhanden|Already owned|Ya en colección|Déjà possédée
Letzter Preis im Zielbudget|Last price within target|Último precio dentro del objetivo|Dernier prix dans le budget
Ohne Preis|No price|Sin precio|Sans prix
Preise prüfen|Check prices|Comprobar precios|Vérifier les prix
Exportieren & teilen|Export & share|Exportar y compartir|Exporter et partager
Als Datei exportieren|Export as file|Exportar como archivo|Exporter en fichier
Text teilen|Share text|Compartir texto|Partager le texte
Wunschliste importieren|Import wishlist|Importar deseos|Importer les souhaits
Hoch|High|Alta|Haute
Niedrig|Low|Baja|Basse
Hohe Priorität|High priority|Prioridad alta|Priorité haute
Niedrige Priorität|Low priority|Prioridad baja|Priorité basse
Variante, Sprache & Notizen|Variant, language & notes|Variante, idioma y notas|Variante, langue et notes
In Sammlung übernehmen|Move to collection|Pasar a colección|Ajouter à la collection
Kaufpreis je Karte (€)|Purchase price per card (€)|Precio de compra por carta (€)|Prix d’achat par carte (€)
Kaufdatum|Purchase date|Fecha de compra|Date d’achat
Besitz bestätigen & speichern|Confirm ownership & save|Confirmar posesión y guardar|Confirmer la possession et enregistrer
Vergleichen|Compare|Comparar|Comparer
Karte vergleichen|Compare card|Comparar carta|Comparer la carte
Karten vergleichen|Compare cards|Comparar cartas|Comparer des cartes
Bildseite|Image side|Lado de la imagen|Face de l’image
Nebeneinander|Side by side|Lado a lado|Côte à côte
Bild-Slider|Image slider|Comparador de imágenes|Comparaison par superposition
Vergleich leeren|Clear comparison|Vaciar comparación|Vider la comparaison
Austauschen|Replace|Sustituir|Remplacer
Aus Sammlung|From collection|De la colección|De la collection
Aus Wunschliste|From wishlist|De deseos|De la liste de souhaits
Suchtreffer|Search result|Resultado de búsqueda|Résultat de recherche
Im Scanner wählen|Select in scanner|Elegir en escáner|Choisir dans le scanner
Variante prüfen|Review variant|Revisar variante|Vérifier la variante
Nur dieser Vergleich; die gespeicherte Karte bleibt unverändert.|Comparison only; saved card stays unchanged.|Solo para esta comparación; la carta guardada no cambia.|Uniquement pour cette comparaison ; la carte enregistrée reste inchangée.
EUR-Referenz|EUR reference|Referencia EUR|Référence EUR
Preisquelle & Stand|Price source & date|Fuente y fecha de precio|Source et date du prix
Differenz zu Karte 1|Difference from card 1|Diferencia respecto a carta 1|Différence par rapport à la carte 1
Vergleichsbasis|Reference card|Carta de referencia|Carte de référence
Marktwert − Kaufpreis|Market value − purchase price|Valor de mercado − precio de compra|Valeur de marché − prix d’achat
Nach Gebühren / Kaufpreis|After fees / purchase cost|Tras comisiones / compra|Après frais / achat
Nicht berechenbar|Cannot calculate|No calculable|Calcul impossible
Angaben fehlen / prüfen|Missing details / review|Faltan datos / revisar|Données manquantes / à vérifier
Kein eindeutiger Preis|No matching price|Sin precio inequívoco|Aucun prix certain
Verkaufsgebühren berücksichtigen|Include selling fees|Incluir comisiones de venta|Inclure les frais de vente
Gebühr (%)|Fee (%)|Comisión (%)|Frais (%)
Weitere Kosten je Karte (€)|Extra costs per card (€)|Otros costes por carta (€)|Autres frais par carte (€)
Bildüberlagerung|Image overlay|Superposición de imagen|Superposition d’images
Zoom|Zoom|Zoom|Zoom
Keine eigene Rückseite|No own back photo|Sin foto propia del reverso|Aucun verso personnel
Kein Bild ausgewählt|No image selected|Ninguna imagen seleccionada|Aucune image sélectionnée
Bilddatei fehlt|Image file missing|Falta archivo de imagen|Fichier image manquant
Referenzbild nicht geladen|Reference image not loaded|Referencia no cargada|Image de référence non chargée
Karte auswählen|Choose card|Elegir carta|Choisir une carte
Quelle|Source|Fuente|Source
Geladene Suchtreffer|Loaded search results|Resultados cargados|Résultats chargés
Karten durchsuchen|Search cards|Buscar cartas|Rechercher des cartes
Weitere anzeigen|Show more|Mostrar más|Afficher plus
Katalogkarte · beliebige Variante|Catalog card · any variant|Carta del catálogo · cualquier variante|Carte du catalogue · toute variante
Normal · unlimitiert|Regular · unlimited|Normal · ilimitada|Normale · illimitée
Holo · unlimitiert|Holo · unlimited|Holo · ilimitada|Holo · illimitée
Reverse Holo · unlimitiert|Reverse holo · unlimited|Holo inversa · ilimitada|Holo inversée · illimitée
Anzeige & weitere Daten|Display & more data|Vista y más datos|Affichage et autres données
Fehlende|Missing|Faltantes|Manquantes
Vorhandene|Owned|En colección|Possédées
Sortieren|Sort|Ordenar|Trier
Bekannter EUR-Wert|Known EUR value|Valor EUR conocido|Valeur EUR connue
Varianten & Preise laden|Load variants & prices|Cargar variantes y precios|Charger les variantes et les prix
Fehlende auf Wunschliste|Add missing to wishlist|Añadir faltantes a deseos|Ajouter les manquantes aux souhaits
Suchen / scannen|Search / scan|Buscar / escanear|Rechercher / scanner
Vorhanden|Owned|En colección|Possédée
Fehlt|Missing|Falta|Manquante
Druckvariante ungeprüft|Print variant not checked|Variante de impresión sin revisar|Variante d’impression non vérifiée
Alle Seltenheiten|All rarities|Todas las rarezas|Toutes les raretés
Alle Zustände|All conditions|Todos los estados|Tous les états
Keine Datenbankkarte zugeordnet|No catalog card linked|Sin carta de catálogo asociada|Aucune carte du catalogue associée
Kartenoberfläche auswählen|Choose card finish|Elegir acabado|Choisir la finition
Auflage prüfen|Review edition|Revisar edición|Vérifier l’édition
Kein eindeutig zugeordneter EUR-Preis verfügbar|No clearly matched EUR price available|Sin precio EUR claramente asociado|Aucun prix EUR clairement associé
Name und Anzahl prüfen|Check name and quantity|Revisa nombre y cantidad|Vérifiez le nom et la quantité
Kaufpreis prüfen|Check purchase price|Revisa precio de compra|Vérifiez le prix d’achat
Speichern fehlgeschlagen. Speicher prüfen und Backup erstellen.|Could not save. Check storage and create a backup.|No se pudo guardar. Revisa el almacenamiento y haz una copia.|Enregistrement impossible. Vérifiez le stockage et faites une sauvegarde.
Karte gespeichert|Card saved|Carta guardada|Carte enregistrée
Änderungen gespeichert|Changes saved|Cambios guardados|Modifications enregistrées
Wunschkarte gespeichert|Wish saved|Deseo guardado|Souhait enregistré
Wunschkarte aktualisiert|Wish updated|Deseo actualizado|Souhait mis à jour
Wunschkarte entfernt|Wish removed|Deseo eliminado|Souhait retiré
Karte in Sammlung übernommen|Card added to collection|Carta añadida a colección|Carte ajoutée à la collection
Design zurückgesetzt|Design reset|Diseño restablecido|Style réinitialisé
Foto zugeschnitten und ausgerichtet|Photo cropped and straightened|Foto recortada y enderezada|Photo recadrée et redressée
Foto konnte nicht geöffnet werden. Bitte JPG, PNG oder WebP verwenden.|Could not open image. Use JPG, PNG or WebP.|No se pudo abrir la imagen. Usa JPG, PNG o WebP.|Impossible d’ouvrir l’image. Utilisez JPG, PNG ou WebP.
Das Foto ist leer. Bitte erneut aufnehmen.|The photo is empty. Take another photo.|La foto está vacía. Haz otra foto.|La photo est vide. Prenez une autre photo.
Bild enthält keine lesbaren Bilddaten.|The image has no readable data.|La imagen no contiene datos legibles.|L’image ne contient aucune donnée lisible.
Foto zu groß. Bitte unter 30 MB verwenden.|Photo too large. Use a file under 30 MB.|Foto demasiado grande. Usa menos de 30 MB.|Photo trop volumineuse. Utilisez moins de 30 Mo.
Zusatzfotos werden noch gespeichert. Bitte kurz warten.|Extra photos are still saving. Please wait.|Se están guardando fotos adicionales. Espera.|Les photos supplémentaires sont en cours d’enregistrement. Patientez.
Foto wird noch übernommen. Bitte kurz warten.|Photo is still importing. Please wait.|La foto se está importando. Espera.|La photo est en cours d’importation. Patientez.
Texterkennung zuerst beenden oder abbrechen.|Finish or cancel text recognition first.|Termina o cancela el reconocimiento de texto.|Terminez ou annulez d’abord la reconnaissance de texte.
Offline: diese Kartendaten wurden noch nicht geladen.|Offline: these card details have not been downloaded.|Sin conexión: estos datos aún no se han descargado.|Hors ligne : ces données n’ont pas encore été téléchargées.
Datenquelle braucht zu lange – später erneut versuchen.|Data source timed out. Try again later.|La fuente tarda demasiado. Inténtalo más tarde.|La source met trop de temps à répondre. Réessayez plus tard.
Datenquelle nicht erreichbar|Data source unavailable|Fuente de datos no disponible|Source de données inaccessible
Karte nicht gefunden (404)|Card not found (404)|Carta no encontrada (404)|Carte introuvable (404)
Kein neuer eindeutiger EUR-Wert. Vorhandene Werte bleiben erhalten.|No new matching EUR value. Saved values are kept.|Sin nuevo valor EUR inequívoco. Se conservan los valores guardados.|Aucune nouvelle valeur EUR certaine. Les valeurs enregistrées sont conservées.
Marktreferenzen aktualisiert|Market references updated|Referencias actualizadas|Références du marché actualisées
Keine passenden Treffer. Kürzeren Namen, Nummer oder andere Sprache versuchen.|No matches. Try a shorter name, number or another language.|Sin coincidencias. Prueba un nombre más corto, un número u otro idioma.|Aucun résultat. Essayez un nom plus court, un numéro ou une autre langue.
Passende Karten suchen …|Searching for matching cards…|Buscando cartas coincidentes…|Recherche de cartes correspondantes…
Preis wird geprüft …|Checking price…|Comprobando precio…|Vérification du prix…
Preis nicht geladen|Price not loaded|Precio no cargado|Prix non chargé
Von dir bestätigt|Confirmed by you|Confirmada por ti|Confirmée par vous
Nummer passt|Number matches|Número coincidente|Numéro correspondant
Nummer & Setgröße passen|Number & set size match|Número y tamaño de expansión coincidentes|Numéro et taille de l’extension correspondants
Diese Kartenvariante ist bereits auf der Wunschliste.|This variant is already on your wishlist.|Esta variante ya está en tus deseos.|Cette variante est déjà dans vos souhaits.
Diese Kartenvariante ist schon auf deiner Wunschliste.|This variant is already on your wishlist.|Esta variante ya está en tus deseos.|Cette variante est déjà dans vos souhaits.
Diese Karte ist schon im Vergleich.|This card is already being compared.|Esta carta ya está en la comparación.|Cette carte est déjà dans la comparaison.
Bis zu vier Karten vergleichen. Im Vergleich eine Karte austauschen oder entfernen.|Compare up to four cards. Replace or remove a card in the comparison.|Compara hasta cuatro cartas. Sustituye o quita una carta de la comparación.|Comparez jusqu’à quatre cartes. Remplacez ou retirez une carte dans la comparaison.
Zwei bis vier Karten für den Vergleich auswählen.|Select two to four cards to compare.|Selecciona de dos a cuatro cartas.|Sélectionnez deux à quatre cartes à comparer.
PokéScan · Deine Sammlung, im Blick|PokéScan · Your collection at a glance|PokéScan · Tu colección a la vista|PokéScan · Votre collection en un regard
Mein Profil|My profile|Mi perfil|Mon profil
Sammlerprofil öffnen|Open collector profile|Abrir perfil de coleccionista|Ouvrir le profil de collectionneur
€ Mit Preis|€ With price|€ Con precio|€ Avec prix
+ Leere Seite|+ Empty page|+ Página vacía|+ Page vide
Griff ziehen. Oder antippen und danach die Zielkarte wählen.|Drag the handle, or tap it and then choose the target card.|Arrastra el asa o tócala y elige la carta de destino.|Faites glisser la poignée, ou touchez-la puis choisissez la carte cible.
Wischen oder Pfeiltasten zum Blättern. Tippe auf eine Karte für Details.|Swipe or use arrow keys to turn pages. Tap a card for details.|Desliza o usa las flechas para cambiar de página. Toca una carta para ver detalles.|Balayez ou utilisez les flèches pour tourner les pages. Touchez une carte pour ses détails.
Ordne Karten mehreren Alben zu – etwa Lieblingskarten, Tauschordner oder Base Set.|Assign cards to several albums, such as favorites, trades or Base Set.|Asigna cartas a varios álbumes, como favoritas, intercambios o Set Base.|Affectez les cartes à plusieurs albums : favoris, échanges ou Set de Base.
Öffne ein Album und wähle „Karten hinzufügen“. Unter „Anordnen“ legst du die Reihenfolge fest. Eine Karte kann in mehreren Alben liegen.|Open an album and choose “Add cards”. Use “Arrange” to set the order. A card can belong to several albums.|Abre un álbum y elige «Añadir cartas». Usa «Ordenar» para cambiar el orden. Una carta puede estar en varios álbumes.|Ouvrez un album et choisissez « Ajouter des cartes ». Utilisez « Disposer » pour l’ordre. Une carte peut figurer dans plusieurs albums.
Sprache · automatisch oder selbst wählen|Language · automatic or manual|Idioma · automático o manual|Langue · automatique ou manuelle
Foto aufnehmen oder auswählen. Es erscheint direkt hier; das Bild bleibt auf deinem Gerät.|Take or choose a photo. It appears here and stays on your device.|Haz o elige una foto. Aparece aquí y permanece en tu dispositivo.|Prenez ou choisissez une photo. Elle apparaît ici et reste sur votre appareil.
Experimentelles CLIP-Modell: vergleicht dein Foto mit Referenzbildern lokal auf diesem Gerät. Großer einmaliger Download; kann auf Handys langsam sein. Bestätigt weder Echtheit noch Druckmerkmale.|Experimental CLIP model: compares your photo with reference images on this device. Large initial download; may be slow on phones. Does not confirm authenticity or print features.|Modelo CLIP experimental: compara tu foto con referencias en este dispositivo. Descarga inicial grande; puede ir lento en móviles. No confirma autenticidad ni características de impresión.|Modèle CLIP expérimental : compare votre photo aux références sur cet appareil. Téléchargement initial volumineux ; peut être lent sur mobile. Ne confirme ni l’authenticité ni les caractéristiques d’impression.
Der lokale Bildvergleich sortiert bekannte Kandidaten. Er ist kein trainiertes KI-Modell und bestätigt keine Druckvariante.|Local image comparison ranks known candidates. It is not a trained AI model and does not confirm print variants.|La comparación local ordena candidatos conocidos. No es un modelo de IA entrenado ni confirma variantes.|La comparaison locale classe les résultats connus. Ce n’est pas un modèle d’IA entraîné et elle ne confirme aucune variante.
Wenn der Text unlesbar ist: Set wählen und dessen Referenzbilder lokal mit deinem zugeschnittenen Foto vergleichen. Benötigt Internet und lädt bis zu 250 Bilder.|If text is unreadable, choose a set and compare its reference images with your cropped photo locally. Requires internet and downloads up to 250 images.|Si el texto no se lee, elige una expansión y compara sus referencias con tu foto recortada localmente. Requiere internet y descarga hasta 250 imágenes.|Si le texte est illisible, choisissez une extension et comparez ses références à votre photo recadrée localement. Internet requis, jusqu’à 250 images téléchargées.
Ohne Foto: Name oder Nummer eingeben. Mit Foto: passenden Bildtreffer antippen.|Without photo: enter a name or number. With photo: tap the matching image.|Sin foto: introduce nombre o número. Con foto: toca la imagen correcta.|Sans photo : saisissez un nom ou numéro. Avec photo : touchez l’image correspondante.
Suche nach Name oder Nummer. Bestätige anschließend Bild, Set und Sprache.|Search by name or number, then confirm image, set and card language.|Busca por nombre o número y confirma imagen, expansión e idioma de la carta.|Recherchez par nom ou numéro, puis confirmez l’image, l’extension et la langue de la carte.
Suchergebnisse · Tippe auf das passende Kartenbild|Search results · tap the matching image|Resultados · toca la imagen correcta|Résultats · touchez l’image correspondante
Preis wird nach der Trefferauswahl geprüft.|Price is checked after selecting a match.|El precio se comprueba al elegir un resultado.|Le prix est vérifié après sélection d’un résultat.
Holo, 1st Edition oder Shadowless erkennen|Identify Holo, 1st edition or Shadowless|Identificar Holo, primera edición o Shadowless|Identifier Holo, première édition ou Shadowless
Holo: Der Bildbereich glänzt. Reverse Holo: Meist glänzt die Fläche außerhalb des Bildes; Muster unterscheiden sich je Set.|Holo: the artwork shines. Reverse holo: usually the area outside the artwork shines; patterns vary by set.|Holo: brilla la ilustración. Holo inversa: suele brillar la zona exterior; el patrón depende de la expansión.|Holo : l’illustration brille. Holo inversée : c’est généralement l’extérieur qui brille ; les motifs varient selon l’extension.
1st Edition: Prüfe den sichtbaren „Edition 1“-Stempel. Eine Holo-Karte kann gleichzeitig 1st Edition sein.|1st edition: check the visible “Edition 1” stamp. A holo card can also be first edition.|Primera edición: revisa el sello visible «Edition 1». Una carta holo también puede ser primera edición.|Première édition : vérifiez le tampon « Edition 1 ». Une carte holo peut aussi être une première édition.
Shadowless: Eine bestimmte englische Base-Set-Druckausgabe. Prüfe den fehlenden rechten / unteren Bildrahmenschatten und die Druckmerkmale. Deutsche Karten sind keine englischen Shadowless-Karten.|Shadowless is a specific English Base Set printing. Check the missing right/bottom frame shadow and print details. German cards are not English Shadowless cards.|Shadowless es una impresión específica del Set Base inglés. Revisa la ausencia de sombra derecha/inferior y los detalles. Las cartas alemanas no son Shadowless inglesas.|Shadowless désigne un tirage anglais précis du Set de Base. Vérifiez l’absence d’ombre droite/inférieure et les détails. Les cartes allemandes ne sont pas des Shadowless anglaises.
Ein einzelnes Foto bestätigt Glanz, Echtheit oder Druckausgabe nicht zuverlässig. Merkmale selbst prüfen.|One photo cannot reliably confirm foil, authenticity or printing. Check the features yourself.|Una foto no confirma de forma fiable brillo, autenticidad o edición. Revisa las características.|Une photo ne confirme pas de manière fiable la brillance, l’authenticité ou le tirage. Vérifiez les caractéristiques.
Dein eigenes Foto wird dauerhaft lokal auf diesem Gerät gespeichert. Es erscheint als Ersatzbild, falls kein Datenbankbild vorhanden ist. Sichere wichtige Fotos separat.|Your photo is stored locally on this device and used when no catalog image is available. Back up important photos separately.|Tu foto se guarda localmente y se usa si no hay imagen de catálogo. Guarda otra copia de las fotos importantes.|Votre photo est conservée localement et utilisée en l’absence d’image du catalogue. Sauvegardez séparément les photos importantes.
Passe den Ablauf an deine Fotos und deine Verbindung an.|Adapt the workflow to your photos and connection.|Adapta el proceso a tus fotos y tu conexión.|Adaptez le fonctionnement à vos photos et à votre connexion.
Fehlt der gewählte Wert, wird ein verfügbarer Wert mit seiner tatsächlichen Bezeichnung verwendet. Vorhandene Kartenpreise ändern sich erst beim erneuten Abruf.|If the selected metric is missing, another available metric is shown with its actual name. Saved prices change only after refresh.|Si falta el valor elegido, se muestra otro disponible con su nombre real. Los precios guardados cambian al actualizar.|Si la valeur choisie manque, une autre valeur disponible est affichée avec son vrai nom. Les prix enregistrés changent après actualisation.
Sammlung, Alben, Profil und eigene Fotos als eine Datei. Zum Gerätewechsel die Datei auf dem anderen Gerät importieren.|Collection, albums, profile and photos in one file. Import it on another device to transfer your data.|Colección, álbumes, perfil y fotos en un archivo. Impórtalo en otro dispositivo para transferir tus datos.|Collection, albums, profil et photos dans un fichier. Importez-le sur un autre appareil pour transférer vos données.
Unter Android im Browser-Menü „App installieren“ oder „Zum Startbildschirm hinzufügen“ wählen.|On Android, choose “Install app” or “Add to home screen” in the browser menu.|En Android, elige «Instalar aplicación» o «Añadir a pantalla de inicio» en el navegador.|Sur Android, choisissez « Installer l’application » ou « Ajouter à l’écran d’accueil » dans le navigateur.
Referenzpreise für verknüpfte Karten nacheinander abrufen. Fehlende Werte überschreiben keinen vorhandenen Preis.|Refresh linked cards one at a time. Missing values do not overwrite saved prices.|Actualiza las cartas asociadas una por una. Los valores ausentes no sustituyen precios guardados.|Actualisez les cartes associées une par une. Les valeurs manquantes ne remplacent pas les prix enregistrés.
Für vergangene Verkäufe und PSA-Werte gibt es keinen eingebauten kostenlosen Komplettfeed. Eigene oder rechtmäßig bezogene Daten können über das dokumentierte Format importiert werden. Die Herkunft bleibt sichtbar.|No complete free feed of past sales or PSA prices is included. Import your own or lawfully obtained data using the documented format. Sources stay visible.|No se incluye un registro gratuito completo de ventas pasadas o precios PSA. Puedes importar datos propios o autorizados con el formato documentado. Se muestra su origen.|Aucun flux gratuit complet de ventes passées ou de prix PSA n’est inclus. Importez vos données ou des données autorisées au format documenté. Les sources restent visibles.
Referenzpreise von TCGdex / Cardmarket sind keine Verkaufsgarantie und berücksichtigen Zustand, Grading oder Kartensprache nicht zuverlässig. Reverse Holo und Spezialauflagen erhalten nur bei eindeutiger Zuordnung einen EUR-Referenzpreis. Zusätzlich verfügbare USD-Referenzen werden separat angezeigt. Preisverläufe zeigen nur in dieser App gespeicherte Abrufe.|TCGdex / Cardmarket reference prices are not guaranteed sale values and do not reliably account for condition, grading or language. Reverse holo and special editions receive EUR values only when matched clearly. USD references are separate. Charts show observations saved in this app.|Las referencias TCGdex / Cardmarket no garantizan un precio de venta ni reflejan siempre estado, graduación o idioma. Holo inversa y ediciones especiales solo reciben valor EUR con asociación clara. Las referencias USD van separadas. Los gráficos muestran observaciones guardadas en la aplicación.|Les références TCGdex / Cardmarket ne garantissent pas un prix de vente et ne reflètent pas toujours l’état, la note ou la langue. Les variantes inversées et spéciales n’ont un prix EUR qu’avec une association certaine. Les références USD sont séparées. Les graphiques montrent les relevés enregistrés dans l’application.
Sammlung und Fotos bleiben in diesem Browser. Beim Laden von Kartendaten und Referenzbildern erhalten TCGdex-Server übliche Verbindungsdaten. OCR lädt Tesseract.js und Sprachmodelle nach deiner Zustimmung; das Foto wird lokal verarbeitet. Browserdaten löschen entfernt lokale Daten. Es gibt keine Cloud-Synchronisierung.|Collection and photos stay in this browser. Loading catalog data and images sends ordinary connection data to TCGdex. OCR downloads Tesseract.js and language models after consent; photos are processed locally. Clearing browser data removes local records. No cloud sync is connected.|La colección y las fotos permanecen en este navegador. Al cargar el catálogo y las imágenes, TCGdex recibe los datos normales de conexión. OCR descarga Tesseract.js y modelos tras tu permiso; las fotos se procesan localmente. Borrar datos del navegador elimina los registros locales. No hay sincronización en la nube conectada.|Collection et photos restent dans ce navigateur. Le chargement du catalogue et des images transmet les données habituelles de connexion à TCGdex. L’OCR télécharge Tesseract.js et les modèles après accord ; les photos sont traitées localement. Effacer les données du navigateur supprime les données locales. Aucune synchronisation cloud n’est connectée.
Halte fest, welche Karten dir noch fehlen.|Keep track of the cards you still want.|Apunta las cartas que aún te faltan.|Gardez la liste des cartes qui vous manquent.
EUR und USD sind getrennte Markt-Referenzen. Zustand und Kartensprache sind nicht immer preisgenau abgebildet.|EUR and USD are separate market references. Condition and language are not always reflected precisely.|EUR y USD son referencias separadas. Estado e idioma no siempre se reflejan con precisión.|EUR et USD sont des références distinctes. L’état et la langue ne sont pas toujours reflétés précisément.
Die wichtigsten Angaben direkt ändern. Alles Weitere findest du darunter.|Edit key details here. More options are below.|Edita aquí los datos principales. Hay más opciones debajo.|Modifiez ici les informations essentielles. Les autres options sont en dessous.
Set & Kartennummer|Set & card number|Expansión y número|Extension et numéro
Weitere Angaben · Notizen, Auflage & Grading|More details · notes, edition & grading|Más datos · notas, edición y graduación|Autres détails · notes, édition et évaluation
Weitere Aktionen|More actions|Más acciones|Autres actions
KARTEN ORGANISIEREN|ORGANIZE CARDS|ORGANIZAR CARTAS|ORGANISER LES CARTES
Wähle alle Alben, in denen diese Karte erscheinen soll.|Choose every album where this card should appear.|Elige los álbumes donde debe aparecer esta carta.|Choisissez tous les albums où cette carte doit figurer.
Das ist ein lokales Profil, kein Online-Konto. Für andere Geräte benötigst du weiterhin ein Backup.|This is a local profile, not an online account. Use a backup to transfer to another device.|Este perfil es local, no una cuenta en línea. Usa una copia para pasar a otro dispositivo.|Ce profil est local, pas un compte en ligne. Utilisez une sauvegarde pour changer d’appareil.
Wähle den Kartenbereich. Ziehe einen Rahmen im Bild oder nutze die Regler.|Select the card area. Draw a box or use the sliders.|Selecciona la zona de la carta. Dibuja un marco o usa los controles.|Sélectionnez la zone de la carte. Tracez un cadre ou utilisez les curseurs.
Links|Left|Izquierda|Gauche
Oben|Top|Arriba|Haut
Breite|Width|Ancho|Largeur
Höhe|Height|Alto|Hauteur
Zuschnitt übernehmen|Apply crop|Aplicar recorte|Appliquer le recadrage
Preisarten getrennt|Separate price metrics|Precios separados|Indicateurs de prix séparés
Marktreferenz · nicht zustands- oder sprachgenau|Market reference · not condition or language specific|Referencia de mercado · no específica por estado o idioma|Référence du marché · non spécifique à l’état ou à la langue
Eigene Schätzung · kein Marktpreis|Own estimate · not a market price|Estimación propia · no es precio de mercado|Estimation personnelle · pas un prix de marché
Markttrend|Market trend|Tendencia de mercado|Tendance du marché
Gemeldeter Tiefstwert|Reported low|Mínimo comunicado|Minimum communiqué
Durchschnitt|Average|Media|Moyenne
7-Tage-Mittel|7-day average|Media de 7 días|Moyenne sur 7 jours
30-Tage-Mittel|30-day average|Media de 30 días|Moyenne sur 30 jours
Letzter erfolgreicher Abruf|Last successful retrieval|Última consulta correcta|Dernière consultation réussie
Zustand deiner Karte|Your card condition|Estado de tu carta|État de votre carte
Der gemeldete Tiefstwert ist ein aggregierter Anbieterwert, kein garantiert verfügbares Angebot für deine Sprache oder deinen Zustand. Versand ist nicht enthalten.|The reported low is an aggregated provider metric, not a guaranteed available offer for your language or condition. Shipping is excluded.|El mínimo comunicado es un valor agregado, no una oferta garantizada para tu idioma o estado. No incluye envío.|Le minimum communiqué est un indicateur agrégé, pas une offre garantie pour votre langue ou état. Les frais de port sont exclus.
Noch nicht vorhanden|Not owned yet|Aún no la tienes|Pas encore possédée
Preisziele werden beim Abruf in der geöffneten App geprüft. Keine Hintergrund- oder Push-Alarme.|Targets are checked when refreshing prices in the open app. No background or push alerts.|Los objetivos se comprueban al actualizar en la aplicación abierta. Sin alertas en segundo plano ni notificaciones push.|Les objectifs sont vérifiés lors de l’actualisation dans l’application ouverte. Aucune alerte en arrière-plan ou notification push.
Exportiert die aktuell gefilterte Liste. Eigene Fotodateien sind nur im Komplett-Backup enthalten. Teilen erstellt keinen öffentlichen Link.|Exports the current filtered list. Own photos are only in the full backup. Sharing does not create a public link.|Exporta la lista filtrada. Las fotos propias solo van en la copia completa. Compartir no crea un enlace público.|Exporte la liste filtrée. Les photos personnelles sont uniquement dans la sauvegarde complète. Le partage ne crée aucun lien public.
Eine Änderung der Druckvariante oder Sprache entfernt die bisherige Preiszuordnung.|Changing the print variant or language clears its previous price matching.|Cambiar la variante o idioma elimina la asociación previa del precio.|Changer la variante ou la langue supprime l’ancienne association de prix.
Übernimm erst, wenn du die Karte besitzt. Die Wunschkarte bleibt als „Vorhanden“ markiert. Ein fehlender Kaufpreis wird nicht geschätzt.|Transfer only when you own the card. The wish remains marked as owned. A missing purchase price is not estimated.|Transfiérela solo cuando tengas la carta. El deseo queda marcado como disponible. No se estima el precio de compra si falta.|Ajoutez-la uniquement si vous possédez la carte. Le souhait reste marqué comme possédé. Un prix d’achat manquant n’est pas estimé.
Eigene Annahmen pro Karte; keine Gewinnprognose. Berechnung aus der EUR-Referenz.|Your assumptions per card, not a profit forecast. Calculated from the EUR reference.|Suposiciones por carta, no una previsión de ganancias. Calculado desde la referencia EUR.|Vos hypothèses par carte, pas une prévision de gain. Calcul basé sur la référence EUR.
Katalog gerade nicht erreichbar; gespeicherte Angaben bleiben sichtbar.|Catalog unavailable; saved details remain visible.|Catálogo no disponible; se muestran los datos guardados.|Catalogue indisponible ; les données enregistrées restent visibles.
Besitz wird in der gewählten Sprache gezählt. Einzelne Grading-Karten zählen nur in der allgemeinen Katalogansicht.|Ownership is counted in the chosen language. Graded cards count only in the general catalog view.|Se cuenta la posesión en el idioma elegido. Las cartas graduadas solo cuentan en la vista general.|La possession est comptée dans la langue choisie. Les cartes gradées ne comptent que dans la vue générale du catalogue.
Lädt die Kartendetails dieses Sets. Ohne diese Angaben ist eine vollständige Unterscheidung nach Holo/Reverse nicht möglich.|Loads this set’s card details. Full holo/reverse separation requires these details.|Carga los detalles de esta expansión. Son necesarios para distinguir todas las holo e inversas.|Charge les détails de cette extension. Ils sont nécessaires pour distinguer toutes les variantes holo et inversées.
Keine belastbare Kostensumme. Fehlende Preise werden nicht als 0 € gezählt.|No reliable total cost. Missing prices are not counted as €0.|Sin coste total fiable. Los precios ausentes no se cuentan como 0 €.|Aucun coût total fiable. Les prix manquants ne valent pas 0 €.
Optional, auch beim manuellen Hinzufügen. Kamera oder Galerie verwenden. Falls die Kamera nicht öffnet, Browserberechtigung prüfen oder eine vorhandene Bilddatei auswählen.|Optional, including manual entry. Use camera or gallery. If the camera does not open, check browser permission or choose an existing image.|Opcional, también en entrada manual. Usa cámara o galería. Si no se abre la cámara, revisa el permiso o elige una imagen existente.|Facultatif, même en saisie manuelle. Utilisez l’appareil photo ou la galerie. Si l’appareil ne s’ouvre pas, vérifiez l’autorisation ou choisissez une image existante.
Oberfläche, Seltenheit und Auflage werden aus geladenen Kartendetails geprüft. Ein Treffer bestätigt noch nicht die Variante deines Fotos.|Finish, rarity and edition are checked using loaded card details. A result does not confirm the variant in your photo.|Se revisan acabado, rareza y edición con los datos cargados. Un resultado no confirma la variante de tu foto.|Finition, rareté et édition sont vérifiées avec les détails chargés. Un résultat ne confirme pas la variante de votre photo.
Mit dem Herz markieren|Mark with the heart|Marcar con el corazón|Marquer avec le cœur
Diese Sprache und Kartenvariante vormerken|Save this language and variant as a wish|Guardar este idioma y variante como deseo|Mémoriser cette langue et variante comme souhait
Mit bis zu drei weiteren Karten vergleichen|Compare with up to three other cards|Comparar con hasta tres cartas más|Comparer avec jusqu’à trois autres cartes
Zur Wunschliste hinzugefügt|Added to wishlist|Añadida a deseos|Ajoutée aux souhaits
Referenzpreise für diese Variante|Reference prices for this variant|Precios de referencia para esta variante|Prix de référence pour cette variante
Im Katalog suchen|Search catalog|Buscar en el catálogo|Rechercher dans le catalogue
Zuerst Name, Set oder Nummer eintragen.|Enter a name, set or number first.|Introduce primero nombre, expansión o número.|Saisissez d’abord un nom, une extension ou un numéro.
Foto scannen|Scan photo|Escanear foto|Scanner une photo
Normale Priorität|Normal priority|Prioridad normal|Priorité normale
Häufig|Common|Común|Commune
Selten|Rare|Rara|Rare
Name, Set oder Nummer …|Name, set or number…|Nombre, expansión o número…|Nom, extension ou numéro…
z. B. Glurak|e.g. Charizard|p. ej. Charizard|p. ex. Dracaufeu
markierte Felder unterscheiden sich. Bei Bedarf seitlich wischen. Marktpreise gelten pro Karte; Zustand und Sprache sind nicht immer preisgenau abgebildet.|highlighted fields differ. Swipe sideways if needed. Prices are per card; condition and language are not always reflected precisely.|los campos resaltados son distintos. Desliza de lado si hace falta. Los precios son por carta; estado e idioma no siempre se reflejan con precisión.|les champs surlignés diffèrent. Balayez horizontalement si nécessaire. Prix par carte ; l’état et la langue ne sont pas toujours reflétés précisément.
Zielpreis erreicht|Target price reached|Precio objetivo alcanzado|Prix cible atteint
Letzter Wert im Zielbudget|Last value within target|Último valor dentro del objetivo|Dernière valeur dans le budget
Stand prüfen|Check date|Revisar fecha|Vérifier la date
In Sammlung|Add to collection|Añadir a colección|Ajouter à la collection
z. B. 4/102|e.g. 4/102|p. ej. 4/102|p. ex. 4/102
`;
for(const line of rows.trim().split('\n')){const [de,en,es,fr]=line.split('|');if(de&&en&&es&&fr)table[de]={en,es,fr};}
function detect(preference='system',device=[]){if(languages.includes(preference))return preference;for(const item of device){const lang=String(item).toLowerCase().split('-')[0];if(languages.includes(lang))return lang;}return'de';}
const reverse=new Map();for(const [de,row]of Object.entries(table))for(const v of Object.values(row))if(v!==de&&!reverse.has(v))reverse.set(v,de);
function translate(source,lang='de'){if(!languages.includes(lang))return source;const original=String(source),value=reverse.get(original)||original;if(lang==='de')return value;const exact=table[value]?.[lang];if(exact)return exact;const patterns=[[/^(\d+) Karten$/,['$1 cards','$1 cartas','$1 cartes']],[/^(\d+) Einträge$/,['$1 entries','$1 entradas','$1 entrées']],[/^(\d+) \/ (\d+) Wünsche$/,['$1 / $2 wishes','$1 / $2 deseos','$1 / $2 souhaits']],[/^(\d+) mit Preis$/,['$1 with prices','$1 con precio','$1 avec prix']],[/^([^·\n]+) bekannte Referenzwerte$/,['$1 in known reference values','$1 en referencias conocidas','$1 de références connues']],[/^(\d+) ohne EUR-Preis$/,['$1 without EUR price','$1 sin precio EUR','$1 sans prix EUR']],[/^Vorhanden × (\d+)$/,['Owned × $1','En colección × $1','Possédée × $1']],[/^Zielpreis (.+)$/,['Target price $1','Precio objetivo $1','Prix cible $1']],[/^Weitere Karten anzeigen \((\d+) \/ (\d+)\)$/,['Show more cards ($1 / $2)','Mostrar más cartas ($1 / $2)','Afficher plus de cartes ($1 / $2)']],[/^Weitere Wunschkarten anzeigen \((\d+) \/ (\d+)\)$/,['Show more wishes ($1 / $2)','Mostrar más deseos ($1 / $2)','Afficher plus de souhaits ($1 / $2)']],[/^(\d+) pro Reihe$/,['$1 per row','$1 por fila','$1 par ligne']],[/^(\d+) ausgewählt$/,['$1 selected','$1 seleccionadas','$1 sélectionnées']],[/^(\d+) angezeigt · (\d+) geladen$/,['$1 shown · $2 loaded','$1 mostradas · $2 cargadas','$1 affichées · $2 chargées']],[/^(.+) – Details öffnen$/,['$1 – Open details','$1 – Abrir detalles','$1 – Ouvrir les détails']],[/^Als Favorit markieren: (.+)$/,['Mark as favorite: $1','Marcar como favorita: $1','Marquer comme favori : $1']],[/^Favorit entfernen: (.+)$/,['Remove favorite: $1','Quitar favorito: $1','Retirer des favoris : $1']],[/^Farbe ändern: (.+)$/,['Change color: $1','Cambiar color: $1','Changer la couleur : $1']],[/^Seite (\d+) \/ (\d+)$/,['Page $1 / $2','Página $1 / $2','Page $1 / $2']],[/^Ecke (\d+)$/,['Corner $1','Esquina $1','Coin $1']],[/^Datenquelle antwortet mit HTTP (\d+)$/,['Data source returned HTTP $1','La fuente respondió HTTP $1','La source a renvoyé HTTP $1']],[/^Laden fehlgeschlagen: (.+)$/,['Could not load: $1','Error al cargar: $1','Chargement impossible : $1']],[/^Speichern fehlgeschlagen: (.+)$/,['Could not save: $1','Error al guardar: $1','Enregistrement impossible : $1']]];for(const [pattern,out]of patterns)if(pattern.test(value))return value.replace(pattern,out[['en','es','fr'].indexOf(lang)]);const parts=value.split(/(\s*[·\n]\s*)/);if(parts.length>1)return parts.map((p,i)=>i%2?p:translate(p,lang)).join('');return value;}
const api={languages,table,detect,translate,current:'de'};root.PokeLocale=api;if(typeof module!=='undefined')module.exports=api;
})(globalThis);
