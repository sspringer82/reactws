import * as React from 'react';
import ListItem from './ListItem';
import useLogs from './useLogs';

const List: React.FC = () => {
  const {logs, handleDelete} = useLogs();
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