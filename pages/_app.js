import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/nav'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content="width-device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Component {...pageProps} />
      </main>

    </>

  )
}
