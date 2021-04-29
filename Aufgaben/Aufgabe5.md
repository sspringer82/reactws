# Offlinefähigkeit im Service Worker

- ziehe die Offlinefähigkeit aus der Applikation in den Service Worker
- nutze im Service Worker die self.addEventListener('fetch') Methode dazu
- Das Event verfügt über ein request-Objekt mit folgenden Informationen
  - method: HTTP-Methode
  - url: angefragte URL
- Nutze die fetch-API, um mit dem Backend zu kommunizieren
- nutze die respondWith-Methode des event-Objekts, um eine Antwort an den Client zu formulieren
- Der Rückgabewert der respondWith-Callback-Funktion ist ein Response-Objekt (new Response(JSON.stringify(body)))
