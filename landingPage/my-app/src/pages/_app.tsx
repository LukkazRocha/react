import type { AppProps } from 'next/app'
import { FormAntD } from '../components/FormAntD/FormAntD';
import { FormInput } from '../components/FormInput/FormInput';

import '../components/InputFloatLabel/InputFloatLabel.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <FormInput />
    </>
  ) 
}

export default MyApp
