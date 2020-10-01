import * as React from 'react';
import { LogsContext } from '../HeadingContext';

const Counter: React.FC = () => {
  const [logs] = React.useContext(LogsContext)
  return <div>Anzahl: {logs.length}</div>
};

export default Counter;