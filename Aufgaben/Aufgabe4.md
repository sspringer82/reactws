# Offlinefähigkeit

1. Browser ist offline: `navigator.onLine`
2. Server ist nicht erreichbar: `try {fetch(...)} catch(e) {...}`

- Lesenden Zugriff:

  - fetch auf den Server: erfolgreich: in die indexeddb speicher und im Browser anzeigen
  - ": nicht erfolgreich: daten aus der indexeddb auslesen und im Browser anzeigen

- Schreibenden Zugriff:

  - fetch auf den Server: erfolg: in die indexeddb schreiben und anzeigen
  - ": nicht erfolgreich: in einer "manipulations" Table festhalten, in die indexeddb schreiben, anzeigen
  - wenn wieder Verbindung: "manipuliations" auf den Server anwenden

- Sonderfall create: virtuelle Ids erzeugen

# Aufgabe 4

- Sorge dafür, dass die lesenden Zugriffe innerhalb der Applikation offlinefähig sind
- Installiere dexie (npm install dexie)
- Erzeuge eine Datenbank (const db = new Dexie('dbName');) und zugehörige Stores (db.version(1).stores({items: '&id'}))
- Speichere nach einem erfolgreichen Lese-Request die Daten in die Datenbank (db.table('items').clear(); db.table('items').bulkAdd(data))
- Ist die Applikation offline, lies die Daten aus der IndexedDB
