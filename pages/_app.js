import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/nav'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'

import en from '../i18n/en.json'
import vn from '../i18n/vn.json'
import { AnimatePresence } from 'framer-motion'

const messages = {
  en,
  vn
}

function getDirection(locale) {
  return "ltr";
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = useRouter();
  return (
    <>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Head>
          <meta name='viewport' content="width-device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} dir={getDirection(locale)} />
          </AnimatePresence>
        </main>
      </IntlProvider>
    </>
  )
}
