import './App.css';
import { ItemProvider } from './ItemContext';
import List from './List';
import Prompt from './Prompt';

function App() {
  return (
    <ItemProvider>
      <List />
      <Prompt />
    </ItemProvider>
  );
}

export default App;
