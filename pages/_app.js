import Preloader from '@/components/Preloader';
import '@/styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';



import React from 'react'
import Head from 'next/head';

const App = ({ Component, pageProps }) => {

  const router = useRouter();

  return (
    <AnimatePresence mode='wait'>
      <motion.div key={router.pathname}>

        <Head>
          <link rel="icon" href="https://raw.githubusercontent.com/Angelbet/Aquaklin/b85507108c4046a8dd2707a78e31f693698fdca7/app/favicon.ico" />
        </Head>

        <Component {...pageProps} />

        <motion.div
          className='slide-in'
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Preloader />
        </motion.div>

        <motion.div
          className='slide-out'
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Preloader />
        </motion.div>

      </motion.div>
    </AnimatePresence>
  )
}

export default App;