import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/providers/themeProvider';
import Footer from '@/components/shared/footer/Footer';
import AuthProvider from '@/providers/authProvider';
import { CartProvider } from '@/providers/shopingCardProvider';
import { QueryProvider } from '@/providers/queryProvider';
import Navbar from '@/components/shared/navbar/Navbar';
import { Toaster } from '@/components/ui/sonner';
import 'leaflet/dist/leaflet.css';
import '@smastrom/react-rating/style.css';
import 'normalize.css';
import './globals.css';

const estedad = localFont({
  src: './fonts/EstedadKSHD-wght.woff2',
  variable: '--font-estedad',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ترخینه | طعم اصیل ایرانی 🍲',
  description:
    'سفارش آنلاین غذاهای سنتی ایرانی با بهترین کیفیت از ترخینه. تجربه‌ای بی‌نظیر از طعم خانه!',
  other: {
    'google-site-verification':'SbJIfFwhA1WyJ_B9Z1EO7COqcEg5SvAL_leBHy9KaNc',
  },
};

export default async function RootLayout({
  children,
  intercepting,
}: {
  children: React.ReactNode;
  intercepting: React.ReactNode;
}) {
  return (
    <html dir="rtl" lang="fa-Ir" className={estedad.className}>
      <body
        className={`antialiased dark:bg-background-1 selection:bg-tint-1 selection:text-gray-7`}
      >
        <QueryProvider>
          <AuthProvider>
            <CartProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
              >
                <Navbar />
                {children}
                {intercepting}
                <Toaster
                  richColors
                  closeButton
                  dir="rtl"
                  className={estedad.className}
                  position="top-right"
                />
                <Footer />
              </ThemeProvider>
            </CartProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
