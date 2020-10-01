import * as React from 'react';
import Log from '../shared/Log';

interface Props {
  item: Log;
}

const Child: React.FC<Props> = ({item}) => {
  return <div>{item.title}</div>
}

export default Child;