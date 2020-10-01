# Aufgabe 4

Verbindet die Liste mit dem dem (Backend-) Server

URL: http://localhost:3001

Http-Methode GET: Auslesen
Http-Methode DELETE: Löschen

```

  (async () => {
    const response = await fetch('http://localhost:3001');
    const data = await response.json();
    // set new State
  })();

```
