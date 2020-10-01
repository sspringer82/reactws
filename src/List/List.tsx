import * as React from 'react';
import { useEffect, useState } from 'react';
import Log from '../shared/Log';
import ListItem from './ListItem';
import useLogs from './useLogs';

// const initialLogData: Log[] = [{
//   id: 1,
//   from: '09:00',
//   until: '10:00',
//   title: 'work',
//   duration: 60
// }, {
//   id: 2,
//   from: '10:00',
//   until: '12:00',
//   title: 'work even more',
//   duration: 120
// }];

const List: React.FC = () => {
  const title = useLogs();
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3001/logs');
      const data = await response.json();
      setLogs(data);
    })();
  },[]);

  async function handleDelete(item: Log): Promise<void> {
    const response = await fetch(`http://localhost:3001/logs/${item.id}`, {method: 'DELETE'});

    if (response.status === 200) {
      setLogs((prevLogs) => {
        return prevLogs.filter((prevLog) => prevLog.id !== item.id);
      });
    }
  }

  return <>
    <h1>{title}</h1>
    <table>
      <thead>
        <tr>
          <th>From</th>
          <th>Until</th>
          <th>Duration</th>
          <th>Title</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {logs.map(log => <ListItem key={log.id} item={log} onDelete={handleDelete}/>)}
      </tbody>
    </table>
  </>
};

export default List;