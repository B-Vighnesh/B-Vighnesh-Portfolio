import type { Metadata, Viewport } from 'next';
import { Syne, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAF8' },
    { media: '(prefers-color-scheme: dark)', color: '#07070A' },
  ],
};

export const metadata: Metadata = {
  title: 'B Vighnesh Kumar',
  description:
    'Portfolio of B Vighnesh Kumar — a Full stack developer from Mangalore, India. Specializing in Spring Boot APIs, React.js, and MySQL. Building systems that are reliable, scalable, and practical.',
  keywords: [
    'B Vighnesh Kumar',
    'Backend Developer',
    'Full Stack Developer',
    'Spring Boot',
    'React Developer',
    'Java Developer',
    'Mangalore',
    'India',
    'Software Engineer',
  ],
  authors: [{ name: 'B Vighnesh Kumar' }],
  creator: 'B Vighnesh Kumar',
  openGraph: {
    title: 'B Vighnesh Kumar — Software Product Developer',
    description: 'Full stack developer building reliable, scalable systems.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
        {children}
      </body>
    </html>
  );
}
