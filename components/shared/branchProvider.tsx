'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import Cookies from 'js-cookie';
import { GetNameBranch } from '@/app/actions/branchAction';
import { usePathname } from 'next/navigation';

interface BranchContextType {
  branch: string;
  setBranch: (value: string) => void;
}

const BranchContext = createContext<BranchContextType | undefined>(undefined);

export const BranchProvider = ({ children }: { children: ReactNode }) => {
  const initialBranch = 'شعبه';
  const pathName = usePathname();
  const [branch, setBranch] = useState<string>(initialBranch);

  const cookie = Cookies.get('branch') as string;
  async function GetBranch() {
    if(cookie){
      const nameBranch = await GetNameBranch(cookie);
      setBranch(nameBranch ? `شعبه ${nameBranch}` : 'شعبه');
    }
  }

  useEffect(() => {
    GetBranch()
  }, []);

  useEffect(()=>{
    GetBranch()
  },[cookie])

  return (
    <BranchContext.Provider value={{ branch, setBranch }}>
      {children}
    </BranchContext.Provider>
  );
};

export const useBranchContext = (): BranchContextType => {
  const context = useContext(BranchContext);
  if (!context) {
    throw new Error('useBranchContext must be used within a BranchProvider');
  }
  return context;
};
