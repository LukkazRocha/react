import type { AppProps } from 'next/app'
import { Demo } from '../components/Demo/Demo'

import "../components/FloatLabel/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Demo />
    </>
  ) 
}

export default MyApp
