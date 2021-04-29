# Installierbarkeit

- Installiere die App
  - in der src/index.js `serviceWorkerRegistration.register();` statt `serviceWorkerRegistration.unregister();`
  - `npm run build`
  - `node server.js`
  - Im Browser: http://localhost:8080
- Teste die verschiedenen Möglichkeiten des Manifests und des Service Workers
