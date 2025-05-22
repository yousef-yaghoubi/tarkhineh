import SideBar from '@/components/shared/navbar/admin/sideBar/SideBar';
import clsx from 'clsx'
import localFont from 'next/font/local';
import React from 'react'
import { Toaster } from 'sonner';
import '@/app/globals.css';
import AppProviders from '@/providers';
import NavBar from '@/components/shared/navbar/admin/NavBar';

const estedad = localFont({
    src: '../../fonts/EstedadKSHD-wght.woff2',
    variable: '--font-estedad',
    weight: '100 900',
    display: 'swap',
});
function layout({ children }: { children: React.ReactNode }) {
    return (
        <html dir="rtl" lang="fa-Ir">
            <body
                className={clsx(estedad.className, 'antialiased bg-gray-100 dark:bg-background-1 selection:bg-tint-1 selection:text-gray-7')}
            >
                <AppProviders>
                    <main className='flex flex-row w-full'>
                        <SideBar />
                        <div className='flex flex-col w-full'>
                            <NavBar />
                            {children}
                        </div>
                        <Toaster
                            richColors
                            closeButton
                            dir="rtl"
                            className={estedad.className}
                            position="top-right"
                        />
                    </main>
                </AppProviders>
            </body>
        </html>
    )
}

export default layout