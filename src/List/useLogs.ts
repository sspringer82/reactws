import { useEffect, useState } from "react";

export default function useLogs() {
  const [state, setState] = useState('Timetracking Applikation');

  useEffect(() => {
    setTimeout(() => {
      setState((prevState) => `Fancy ${prevState}`);
    }, 2000); 
  }, []);

  return [state, setState];
}