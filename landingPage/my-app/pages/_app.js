import Example from '../Example';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Example />
    </>
  )
}

export default MyApp
