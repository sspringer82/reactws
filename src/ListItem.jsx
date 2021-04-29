import Form from './Form';

const ListItem = ({ item, onRemove, onSave, onEdit, edit }) => {
  if (edit) {
    return (
      <Form
        item={item}
        onSave={(values) => {
          onEdit(null);
          onSave(values);
        }}
      />
    );
  }

  return (
    <div key={item.id}>
      <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
        {item.amount} {item.unit} {item.name}
      </span>
      <button
        onClick={() => {
          onSave({ ...item, done: !item.done });
        }}
      >
        🛒
      </button>
      <button onClick={() => onEdit(item.id)}>🖊</button>
      <button
        onClick={() => {
          onRemove(item.id);
        }}
      >
        🗑
      </button>
    </div>
  );
};

export default ListItem;
