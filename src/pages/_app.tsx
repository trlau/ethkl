import '../styles/globals.css'
import React from 'react'
import RootLayout from '../components/Layout'
import { WalletProvider } from "../modules/wallet/services/context";


interface AppProps {
  Component: React.ElementType;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </RootLayout>
  );  
}