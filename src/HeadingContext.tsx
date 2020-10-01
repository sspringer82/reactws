import * as React from "react";

export const HeadingContext = React.createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(null as any);

export const HeadingProvider: React.FC = (props: any) => {

  const [state, setState] = React.useState<string>('');

  return <HeadingContext.Provider value={[state, setState]} {...props} />
};
