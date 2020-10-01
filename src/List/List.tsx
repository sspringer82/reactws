import * as React from 'react';

interface Item {
  id: number;
  title: string;
}

const List: React.FC = () => {

  const [state, setState] = React.useState<string>('Hallo Welt');
  // const [state, setState] = React.useState<Item[]>([]);

  React.useEffect(() => {
    setTimeout(() => {
      // setState('Hallo React');
      setState((prevState) => {
        return 'Hallo React';
      });
    }, 5000);
    return () => {} // handle unmount
  }, []); // [] 1x initial ausführen

  const logs = [{
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

  

  return <div>{state}</div>;


};

export default List;