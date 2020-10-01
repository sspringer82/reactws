import * as React from 'react';
import { useEffect, useState } from 'react';
import Log from '../shared/Log';
import Child from './Child';

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
    }, 5000);
  },[]);

  return <>
      <table>
      <thead>
        <tr>
          <th>From</th>
          <th>Until</th>
          <th>Duration</th>
          <th>Title</th>
        </tr>
      </thead>
      {logs.map(log => (
        <tr>
          <td>{log.from}</td>
          <td>{log.until}</td>
          <td>{log.duration}</td>
          <td>{log.title}</td>
        </tr>))}
    </table>
    <Child item={initialLogData[0]}></Child>
  </>
};

export default List;