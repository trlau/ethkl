import '@/styles/globals.css'
import React from 'react'
import '@/styles/globals.css'
import RootLayout from '../components/Layout'

interface AppProps {
  Component: React.ElementType;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );  
}