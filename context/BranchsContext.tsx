'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context value
interface MyContextType {
  state: string;
  updateState: (newValue: string) => void;
}
const subMain = [
  { id: 1, label: 'شعبه', route: '/branchs' },
  { id: 2, label: 'شعبه ونک', routeQuery: '/branchs/vanak' },
  { id: 3, label: 'شعبه اکباتان', routeQuery: '/branchs/ekbatan' },
  { id: 4, label: 'شعبه چالوس', routeQuery: '/branchs/chaloos' },
  { id: 5, label: 'شعبه اقدسیه', routeQuery: '/branchs/aghdasie' },
];

// Create the context with a default value
const BranchsContext = createContext<MyContextType | undefined>(undefined);

// Custom hook for easier access to the context
export const useMyContext = (): MyContextType => {
  const context = useContext(BranchsContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

// Define the provider component's props
interface MyProviderProps {
  children: ReactNode;
}

// Create the provider component
export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [state, setState] = useState<string>('');

  const updateState = (newValue: string) => setState(newValue);

  return (
    <BranchsContext.Provider value={{ state, updateState }}>
      {children}
    </BranchsContext.Provider>
  );
};
