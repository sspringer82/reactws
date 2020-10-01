import { useContext, useEffect } from "react";
import { LogsContext } from "../HeadingContext";
import Log from "../shared/Log";

export default function useLogs() {
  const [logs, setLogs] = useContext(LogsContext);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3001/logs');
      const data = await response.json();
      setLogs(data);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[setLogs]);

  async function handleDelete(item: Log): Promise<void> {
    const response = await fetch(`http://localhost:3001/logs/${item.id}`, {method: 'DELETE'});

    if (response.status === 200) {
      setLogs((prevLogs) => {
        return prevLogs.filter((prevLog) => prevLog.id !== item.id);
      });
    }
  }

  return {
    logs,
    handleDelete
  }
}