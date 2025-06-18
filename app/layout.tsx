'use client';

import { ReactNode } from 'react';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache } from '../createEmotionCache';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme'; // create a theme file or import from MUI default
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

// Create a *single* client-side Emotion cache
const clientSideEmotionCache = createEmotionCache();

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <CacheProvider value={clientSideEmotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
