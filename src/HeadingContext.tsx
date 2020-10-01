import * as React from "react";
import { useState } from "react";
import Log from "./shared/Log";

export const LogsContext = React.createContext<[Log[], React.Dispatch<React.SetStateAction<Log[]>>]>(null as any);

export const LogsProvider: React.FC = (props: any) => {
  const [logs, setLogs] = useState<Log[]>([]);

  return <LogsContext.Provider value={[logs, setLogs]} {...props} />
};
