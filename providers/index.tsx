import AuthProvider from '@/providers/authProvider';
import { CartProvider } from '@/providers/shopingCardProvider';
import { QueryProvider } from '@/providers/queryProvider';
import { ThemeProvider } from '@/providers/themeProvider';
import NextTopLoader from 'nextjs-toploader';

export default function AppProviders ({ children }: { children: React.ReactNode }) {
    return (
        <QueryProvider>
            <AuthProvider>
                <CartProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                    >
                        <NextTopLoader
                            color='#417F56'
                            shadow="0 0 10px #417F56,0 0 5px #417F56"
                            showSpinner={false}
                        />

                        {children}
                    </ThemeProvider>
                </CartProvider>
            </AuthProvider>
        </QueryProvider>
    )
}