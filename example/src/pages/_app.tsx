import type { AppProps } from 'next/app';

import './styles/globals.css'

import '../components/InputFloatLabel/InputFloatLabel.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
