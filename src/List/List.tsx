import * as React from 'react';
import { useEffect, useState } from 'react';
import Log from '../shared/Log';
import ListItem from './ListItem';

const initialLogData: Log[] = [{
  id: 1,
  from: '09:00',
  until: '10:00',
  title: 'work',
  duration: 60
}, {
  id: 2,
  from: '10:00',
  until: '12:00',
  title: 'work even more',
  duration: 120
}];

const List: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setLogs(prevLogs => {
        return initialLogData;
      });
    }, 1000);
  },[]);

  function handleDelete(item: Log): void {
    console.log('delete Item');
    // delete elements from state

    setLogs((prevLogs) => {
      return prevLogs.filter((prevLog) => prevLog.id !== item.id);
    })
  }

  return <>
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