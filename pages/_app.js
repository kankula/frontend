import '../styles/globals.css'
import Head from 'next/head'
import axios from 'axios';
import { getStrapiURL } from '../utils';

function MyApp({ Component, pageProps }) {
  // console.log(pageProps)
  return (
    <>
      <Head>
        <title>hello next.js</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </>

  )
}

MyApp.getInitialProps = async ({ router }) => {
  const { locale } = router
  // console.log(locale)
  let translationNav = undefined
  let translationFoo = undefined

  const [navigationRes, footerRes] = await Promise.all([
    axios.get(getStrapiURL("/navigation?populate[logo][populate]=*&populate[navmenu][populate]=*")),
    axios.get(getStrapiURL("/footer?populate=%2A"))
  ])
  const navigationData = await navigationRes.data
  const footerData = await footerRes.data

  if (locale === 'en') {
    const [en_navigationRes, en_footerRes] = await Promise.all([
      axios.get(getStrapiURL("/navigation?locale=en&populate[logo][populate]=*&populate[navmenu][populate]=*")),
      axios.get(getStrapiURL("/footer?locale=en&populate=%2A"))
    ])
    translationNav = await en_navigationRes.data
    translationFoo = await en_footerRes.data

  }


  return {
    pageProps: { navigation: translationNav ? translationNav : navigationData, footer: translationFoo ? translationFoo : footerData || null }
  }
}

export default MyApp
