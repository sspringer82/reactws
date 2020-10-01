import { useEffect, useState } from "react";
import Log from "../shared/Log";

export default function useLogs() {
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

  return {
    logs,
    handleDelete
  }
}