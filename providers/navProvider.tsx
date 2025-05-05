'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

type NavContextType = {
    branchName: string;
    setBranchName: (value: string) => void;
    urlMenu?: string;
    setUrlMenu: (value?: string) => void;
    showChooseModal: boolean;
    setShowChooseModal: (value: boolean) => void;
    open: boolean;
    setOpen: (value: boolean) => void;
    sessionCookie?: string;
};

const NavContext = createContext<NavContextType | null>(null);

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
    const sessionCookie = Cookies.get('branches');
    const [branchName, setBranchName] = useState('شعبه');
    const [urlMenu, setUrlMenu] = useState<string>();
    const [showChooseModal, setShowChooseModal] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (sessionCookie) setBranchName(`شعبه ${sessionCookie}`);
    }, [sessionCookie]);

    return (
        <NavContext.Provider
            value={{
                branchName,
                setBranchName,
                urlMenu,
                setUrlMenu,
                showChooseModal,
                setShowChooseModal,
                open,
                setOpen,
                sessionCookie
            }}
        >
            {children}
        </NavContext.Provider>
    );
};

export const useNavContext = () => {
    const context = useContext(NavContext);
    if (!context) throw new Error('NavContext باید داخل NavProvider استفاده بشه');
    return context;
};
