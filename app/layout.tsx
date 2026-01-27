import Sidebar from './components/Sidebar';
import './globals.css';
import { Quicksand, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from './contexts/ThemeContext';

const quicksand = Quicksand({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-quicksand',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${quicksand.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-white dark:bg-gray-900 transition-colors duration-300" style={{ fontFamily: 'var(--font-quicksand)' }}>
        <ThemeProvider>
          <Sidebar />
          <main className="ml-0 md:ml-[300px] min-h-screen transition-all duration-500">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}