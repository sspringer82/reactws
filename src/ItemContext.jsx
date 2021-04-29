import React from 'react';

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
        const response = await fetch('/item');
        const data = await response.json();
        setItems(data);
      },
      async getOne(id) {
        let localItems = [...items];
        if (localItems.length === 0) {
          localItems = await this.getAll();
        }
        return localItems.find((localTodo) => localTodo.id === id);
      },
      async save(item) {
        let url = '/item';
        let method = 'POST';
        const body = JSON.stringify(item);
        if (item.id) {
          url += `/${item.id}`;
          method = 'PUT';
        }
        const response = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body,
        });
        const data = await response.json();

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
        await fetch(`/item/${id}`, {
          method: 'DELETE',
        });
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      },
    };
  }, [items]);
  return <ItemContext.Provider value={value} {...props} />;
}

export { ItemProvider, useItem };
