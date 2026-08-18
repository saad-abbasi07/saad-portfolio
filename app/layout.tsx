import Sidebar from './components/Sidebar';
import './globals.css';
import { Quicksand, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from './contexts/ThemeContext';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Saad Abbasi - Full Stack Developer & Machine Learning Engineer',
  description: 'Portfolio of Saad Abbasi - Full Stack Developer specializing in React, Next.js, Node.js, and Machine Learning. Building modern web applications and AI solutions.',
  keywords: ['Full Stack Developer', 'Machine Learning', 'React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Saad Abbasi' }],
  openGraph: {
    title: 'Saad Abbasi - Full Stack Developer & ML Engineer',
    description: 'Portfolio showcasing web development and machine learning projects',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/main_images/Creatix.jpg',
        width: 1200,
        height: 630,
        alt: 'Saad Abbasi - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saad Abbasi - Full Stack Developer',
    description: 'Portfolio of a Full Stack Developer & Machine Learning Engineer',
    images: ['/images/main_images/Creatix.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#A855F7',
};

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#A855F7" />
        <meta name="msapplication-TileColor" content="#A855F7" />
        <meta name="format-detection" content="telephone=no" />
      </head>
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