import * as React from 'react';
import ListItem from './ListItem';
import useLogs from './useLogs';
import './List.scss';
import { H2 } from './List.styles';
import styles from './List.module.css';
import { headingContext } from '../HeadingContext';

const List: React.FC = () => {
  const {logs, handleDelete} = useLogs();
  const heading = React.useContext(headingContext);
  return <>
    <h1 style={{textDecoration: 'underline'}} className="heading">My Fancy Time Tracker</h1>
    <H2>...really fancy</H2>
    <h3 className={styles.heading3}>{heading}</h3>
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