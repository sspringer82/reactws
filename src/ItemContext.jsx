import React from 'react';

import Dexie from 'dexie';

var db = new Dexie('list');
db.version(1).stores({
  items: '&id, amount, unit, name',
  modification: '&id, type, data',
});

const ItemContext = React.createContext([]);

function useItem() {
  return React.useContext(ItemContext);
}

function ItemProvider(props) {
  const [items, setItems] = React.useState([]);
  const value = React.useMemo(() => {
    return {
      items,
      async getAll() {
        let data = [];
        if (items.length > 0) {
          return items;
        }
        let isOffline = false;
        if (navigator.onLine) {
          try {
            const response = await fetch('/item');
            data = await response.json();
          } catch (e) {
            isOffline = true;
          }
        } else {
          isOffline = true;
        }
        if (isOffline) {
          data = await db.table('items').toArray();
        } else {
          db.table('items').clear();
          db.table('items').bulkAdd(data);
          this.applyModifications();
        }
        setItems(data);
        return data;
      },
      async getOne(id) {
        let localItems = [...items];
        if (localItems.length === 0) {
          localItems = await this.getAll();
        }
        return localItems.find((localTodo) => localTodo.id === id);
      },
      async save(item) {
        let isOffline = false;
        let data = null;
        if (navigator.onLine) {
          let url = '/item';
          let method = 'POST';
          const body = JSON.stringify(item);
          if (item.id) {
            url += `/${item.id}`;
            method = 'PUT';
          }
          try {
            const response = await fetch(url, {
              method,
              headers: { 'Content-Type': 'application/json' },
              body,
            });
            data = await response.json();
          } catch (e) {
            isOffline = true;
          }
        } else {
          isOffline = true;
        }

        if (isOffline) {
          data = { ...item };
          if (!item.id) {
            const mods = await db.table('modification').toArray();
            const localIds = mods
              .map((mod) => mod.id.toString())
              .filter((mod) => mod.startsWith('l'))
              .map((mod) => mod.substring(1, mod.length))
              .map((mod) => parseInt(mod, 10));
            let nextId = 1;
            if (localIds.length > 0) {
              nextId = Math.max(...localIds) + 1;
            }
            data.id = `l${nextId}`;
          }
          db.table('modification').put({
            id: data.id,
            type: data.id.toString().startsWith('l') ? 'create' : 'update',
            data,
          });
          db.table('items').put(data, data.id);
        } else {
          this.applyModifications();
          db.table('items').put(data);
        }

        if (item.id) {
          setItems((prevItems) => {
            const index = prevItems.findIndex(
              (prevTodo) => prevTodo.id === data.id,
            );
            const changedTodos = [...prevItems];
            changedTodos[index] = data;
            return changedTodos;
          });
        } else {
          setItems((prevItems) => {
            return [...prevItems, data];
          });
        }
      },
      async remove(id) {
        let isOffline = false;
        if (navigator.onLine) {
          try {
            await fetch(`/item/${id}`, {
              method: 'DELETE',
            });
          } catch (e) {
            console.log(e);
            isOffline = true;
          }
        } else {
          isOffline = true;
        }
        if (isOffline) {
          if (id.toString().startsWith('l')) {
            db.table('modification').delete(id);
          } else {
            db.table('modification').put({
              id,
              type: 'delete',
            });
          }
          db.table('items').delete(id);
        } else {
          this.applyModifications();
          db.table('items').delete(id);
        }
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      },
      async applyModifications() {
        const modifications = await db.table('modification').toArray();
        modifications.forEach(async (modification) => {
          // eslint-disable-next-line default-case
          switch (modification.type) {
            case 'create':
              delete modification.data.id;
            // eslint-disable-next-line no-fallthrough
            case 'update':
              await this.save(modification.data);
              break;
            case 'delete':
              await this.remove(modification.id);
              break;
          }
          if (
            modification.data &&
            modification.data.id &&
            modification.data.id.toString().startsWith('l')
          ) {
            await db.table('item').delete(modification.data.id);
          }
          await db.table('modification').delete(modification.id);
        });
      },
    };
  }, [items]);
  return <ItemContext.Provider value={value} {...props} />;
}

export { ItemProvider, useItem };
