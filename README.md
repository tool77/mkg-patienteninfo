# MKG im Carree Patienteninformation MVP

Statische Veröffentlichungskopie für GitHub Pages.

Wichtig: Dieses Verzeichnis ist ein eigenes Git-Repository und technisch vom Hauptprojekt getrennt. Das Hauptprojekt bleibt die Arbeits-/Masterversion; `public_mvp/` ist nur die reduzierte, aktuell online veröffentlichte MVP-Ausgabe.

## Enthaltene Themen

- Weisheitszahnentfernung, Deutsch und Englisch
- Nach der Weisheitszahn-OP, Deutsch und Englisch
- Zahnextraktion, Deutsch und Englisch
- Nach der Zahnextraktion, Deutsch und Englisch

## Direkte Links

- `/`
- `weisheitszaehne/`
- `weisheitszaehne-en/`
- `weisheitszaehne-nachsorge/`
- `weisheitszaehne-nachsorge-en/`
- `zahnentfernung/`
- `zahnentfernung-en/`
- `zahnentfernung-nachsorge/`
- `zahnentfernung-nachsorge-en/`
- `portal/index.html?thema=weisheitszahn`
- `portal/index.html?thema=weisheitszahn&lang=en`
- `portal/index.html?thema=weisheitszahn_postop`
- `portal/index.html?thema=weisheitszahn_postop&lang=en`
- `portal/index.html?thema=extraktion`
- `portal/index.html?thema=extraktion&lang=en`
- `portal/index.html?thema=extraktion_postop`
- `portal/index.html?thema=extraktion_postop&lang=en`

Die sprechenden Kurzlinks sind fuer E-Mail-Textbausteine und QR-Codes gedacht. Sie leiten auf die vorhandenen Portal-URLs weiter.

## Deployment

GitHub Pages liefert dieses Repository direkt aus.

- Repository: `https://github.com/tool77/mkg-patienteninfo`
- Custom Domain: `patienteninfo.mkg-im-carree.de`
- CNAME-Datei: `CNAME`
- Aktuelle Live-URL: `http://patienteninfo.mkg-im-carree.de/`
- HTTPS muss in GitHub Pages final geprüft/aktiviert werden, bevor der Link regulär an Patienten geht.

Es werden keine Patientendaten erfasst und keine Serverkomponenten benötigt.

## Legacy-Pfade

Folgende Pfade werden bewusst abgefangen, weil Browser/IONOS zeitweise dorthin gesprungen sind:

- `/defaultsite`
- `/defaultsite/`
- `/defaultside`
- `/defaultside/`

Sie liefern die Landingpage direkt aus und enthalten keinen Meta-Refresh, damit kein URL-Flackern entsteht.

## Späterer VPS-Umzug

Wenn die endgültige Version auf einen eigenen VPS umzieht:

- DNS der Subdomain von GitHub Pages auf die VPS-IP bzw. das VPS-Ziel umstellen.
- GitHub-Pages-Custom-Domain/CNAME entfernen oder das Repository archivieren, damit nicht zwei Systeme dieselbe Domain beanspruchen.
- Die produktive VPS-Version aus dem Hauptprojekt/Masterstand bauen, nicht blind aus `public_mvp/`.
- URL-Struktur beibehalten: `/`, `/portal/index.html?thema=...`, `lang=en` und die Legacy-Pfade.
- HTTPS auf dem VPS mit Let's Encrypt einrichten und alle Direktlinks testen.
