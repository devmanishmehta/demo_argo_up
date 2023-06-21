import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/landing.sass'
import 'animate.css'
import 'swiper/css';
import 'swiper/css/effect-fade';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
