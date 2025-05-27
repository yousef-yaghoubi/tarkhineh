import SideBar from '@/components/shared/navbar/admin/sideBar/SideBar';
import clsx from 'clsx'
import localFont from 'next/font/local';
import React from 'react'
import { Toaster } from 'sonner';
import AppProviders from '@/providers';
import NavBar from '@/components/shared/navbar/admin/NavBar';
import '@/app/globals.css';
import '@smastrom/react-rating/style.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
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
                className={clsx(estedad.className, 'antialiased scrollbar bg-gray-100 dark:bg-background-1 selection:bg-tint-1 selection:text-gray-7')}
            >
                <AppProviders>
                <ReactQueryDevtools/>
                    <div className='flex flex-row w-full'>
                        <SideBar />
                        <div className='flex flex-col w-full lg:w-10/12 lg:[max-width:calc(100%-12rem)] absolute left-0 px-4 md:py-4 md:px-8 lg:px-14'>
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
                    </div>
                </AppProviders>
            </body>
        </html>
    )
}

export default layout