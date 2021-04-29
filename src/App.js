import './App.css';
import { ItemProvider } from './ItemContext';
import List from './List';

function App() {
  return (
    <ItemProvider>
      <List />
    </ItemProvider>
  );
}

export default App;
