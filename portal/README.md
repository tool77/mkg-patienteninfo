# MKG im Carree Infoportal

Statische Webanwendung für versendbare Patientenlinks vor Beratungsterminen.

## Lokal öffnen

Empfohlen ist der lokale Server unter `http://localhost:8765/portal/index.html`. Dann werden die Patienteninformationen direkt in das Portal integriert und die Abschnittsnavigation wird aus den Dokumentüberschriften erzeugt.

`portal/index.html` kann auch direkt per Datei geöffnet werden. In diesem `file://`-Modus blockiert der Browser aus Sicherheitsgründen das Einlesen externer HTML-Dateien per JavaScript; das Portal zeigt die Merkblätter deshalb als eingebettetes Originaldokument an.

## Linkformat

Direktlink pro Thema:

```text
portal/index.html?thema=implantat_basis
portal/index.html?thema=implantat
portal/index.html?thema=implantat_vorbereitung
portal/index.html?thema=augmentationstechniken
portal/index.html?thema=vertikale_augmentation
portal/index.html?thema=sofortimplantat
portal/index.html?thema=knochenaufbau
portal/index.html?thema=sinuslift
portal/index.html?thema=implantat_freilegung
portal/index.html?thema=zahnloser_oberkiefer
portal/index.html?thema=zahnloser_unterkiefer
portal/index.html?thema=wsr
portal/index.html?thema=extraktion
portal/index.html?thema=extraktion_postop
portal/index.html?thema=weisheitszahn
portal/index.html?thema=weisheitszahn_postop
```

Finale direkt ladbare Patientenhandouts:

```text
implantat/implantat_basis_en.html
implantat/implantatberatung_vorbereitung_en.html
implantat/merkblatt_implantat_ausfuehrlich_en.html
knochenaufbau/merkblatt_augmentationstechniken_en.html
knochenaufbau/merkblatt_knochenaufbau_ausfuehrlich_en.html
sinuslift/merkblatt_sinuslift_ausfuehrlich_en.html
sofortimplantat/merkblatt_sofortimplantat_ausfuehrlich_en.html
implantat_freilegung/merkblatt_implantat_freilegung_ausfuehrlich_en.html
vertikale_augmentation/merkblatt_vertikale_augmentation_ausfuehrlich_en.html
zahnloser_oberkiefer/merkblatt_zahnloser_oberkiefer_ausfuehrlich_en.html
zahnloser_unterkiefer/merkblatt_zahnloser_unterkiefer_ausfuehrlich_en.html
wsr/merkblatt_wsr_ausfuehrlich_en.html
extraktion/merkblatt_extraktion_ausfuehrlich_final.html
extraktion/merkblatt_extraktion_ausfuehrlich_final_en.html
extraktion/post_op_extraktion.html
extraktion/post_op_extraktion_en.html
weisheitszahn/merkblatt_weisheitszahn_ausfuehrlich_final.html
weisheitszahn/merkblatt_weisheitszahn_ausfuehrlich_final_en.html
weisheitszahn/post_op_weisheitszahn.html
weisheitszahn/post_op_weisheitszahn_en.html
```

Alle Portalthemen haben eine englische Variante über `lang=en`. Ohne Sprachparameter wird Deutsch geladen.

```text
portal/index.html?thema=implantat_basis&lang=en
portal/index.html?thema=implantat_vorbereitung&lang=en
portal/index.html?thema=augmentationstechniken&lang=en
portal/index.html?thema=vertikale_augmentation&lang=en
portal/index.html?thema=sofortimplantat&lang=en
portal/index.html?thema=knochenaufbau&lang=en
portal/index.html?thema=sinuslift&lang=en
portal/index.html?thema=implantat_freilegung&lang=en
portal/index.html?thema=zahnloser_oberkiefer&lang=en
portal/index.html?thema=zahnloser_unterkiefer&lang=en
portal/index.html?thema=wsr&lang=en
portal/index.html?thema=extraktion&lang=en
portal/index.html?thema=extraktion_postop&lang=en
portal/index.html?thema=weisheitszahn&lang=en
portal/index.html?thema=weisheitszahn_postop&lang=en
```

Beim Veröffentlichen muss die Ordnerstruktur erhalten bleiben:

```text
/
├── portal/
│   └── assets/implantat/
├── implantat/
├── sofortimplantat/
├── knochenaufbau/
├── sinuslift/
├── implantat_freilegung/
├── vertikale_augmentation/
├── zahnloser_oberkiefer/
├── zahnloser_unterkiefer/
├── wsr/
├── extraktion/
└── weisheitszahn/
```
