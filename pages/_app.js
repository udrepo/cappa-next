import '../styles/globals.css'
import Layout from "../components/Layout";
import useTranslation from "next-translate/useTranslation";


function MyApp({ Component, pageProps }) {
  let {t} = useTranslation();
  return <Layout title={t('common:title')}>
    <Component {...pageProps}/>
  </Layout>
}

export default MyApp
