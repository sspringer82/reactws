# Getting it up and running

## Initiales Setup

- Installiere die Pakete json-server und formik
  - `npm install json-server formik`
- Lade die Dateien data.json und server.js aus dem Repo herunter
- Lade die Dateien Form.jsx, List.jsx und ListItem.jsx aus dem src-verzeichnis des Repos herunter.
- Integriere die List.jsx-Komponente in deine App.js-Datei

# Aufgabe 1

- Verbinde die Komponenten List, ListItem und Form zu einer Applikation
- Der Server läuft unter http://localhost:8080 (node server.js)
  - Wirksames Mittel gegen CORS: `"proxy": "http://localhost:8080"`in der package.json
  - `fetch('/item').then(response => response.json()).then(data => console.log(dat`));`
- Unter dem Pfad /item steht eine REST-API zur Verfügung
- Optionen:
  - Serverkommunikation entweder in der List.jsx direkt
  - Serverkommunikation in einem CustomHook (z.B. useItem.js)
  - Einfaches zentrales Statemanagement mit der Context API
    - https://kentcdodds.com/blog/application-state-management-with-react
