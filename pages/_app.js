import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../layout/Layout'
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (

    <>
      <Head>
        <title>OMAR SALAMA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/omar-fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
