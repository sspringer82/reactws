import { Button } from '@material-ui/core';
import * as React from 'react';
import Log from '../shared/Log';

interface Props {
  item: Log;
  onDelete: (item: Log) => void;
}

const ListItem: React.FC<Props> = ({item, onDelete}) => {
  return <tr>
    <td>{item.from}</td>
    <td>{item.until}</td>
    <td>{item.duration}</td>
    <td>{item.title}</td>
    <td>
      <Button variant="contained" onClick={(e) => {
          onDelete(item);
        }}>löschen</Button>
    </td>
  </tr>;
}

export default ListItem;