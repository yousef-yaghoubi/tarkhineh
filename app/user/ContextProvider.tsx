import React, { createContext, useState } from 'react';

interface CounterContextType {
  count: number;
  setCount: React.Dispatch<number>
}

export const CountShowMenuBar = createContext<CounterContextType | undefined>(
  undefined
);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState<number>(0);

  return (
    <CountShowMenuBar.Provider value={{ count, setCount}}>
      {children}
    </CountShowMenuBar.Provider>
  );
}

export default ContextProvider;
