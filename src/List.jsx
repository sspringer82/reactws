import { useState } from 'react';
import Form from './Form';
import ListItem from './ListItem';

const items = [
  {
    id: 1,
    amount: 4,
    unit: 'l',
    name: 'Milch',
    done: true,
  },
  {
    id: 2,
    amount: '2',
    unit: 'kg',
    name: 'Mehl',
    done: true,
  },
  {
    id: 3,
    amount: 10,
    unit: 'St',
    name: 'Eier',
    done: false,
  },
];

const List = () => {
  const [edit, setEdit] = useState(null);

  return (
    <div>
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onRemove={(id) => console.log(`remove ${id}`)}
          onSave={(i) => console.log(`save ${i}`)}
          onEdit={setEdit}
          edit={edit === item.id}
        />
      ))}
      <Form
        item={{ amount: '', unit: '', name: '', done: false }}
        onSave={(i) => console.log(`save ${i}`)}
      />
    </div>
  );
};

export default List;
