import { useEffect, useState } from 'react';
import Form from './Form';
import { useItem } from './ItemContext';
import ListItem from './ListItem';

const List = () => {
  const [edit, setEdit] = useState(null);
  const itemService = useItem();
  useEffect(() => {
    itemService.getAll();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.ononline = () => {
      itemService.applyModifications();
    };
  });

  return (
    <div>
      {itemService.items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onRemove={(id) => itemService.remove(id)}
          onSave={(i) => itemService.save(i)}
          onEdit={setEdit}
          edit={edit === item.id}
        />
      ))}
      <Form
        item={{ amount: '', unit: '', name: '', done: false }}
        onSave={(i) => itemService.save(i)}
      />
    </div>
  );
};

export default List;
