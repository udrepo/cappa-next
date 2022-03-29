import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({children, title, descContent, keywords}) {
    return <>
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content={descContent}
                key="desc"
            />
            <meta name="keywords" content={keywords}/>
            <meta property="og:title" content="Tours in Cappadocia | Open Cappadocia" />
            <meta
                property="og:description"
                content={descContent}
            />
            <meta
                property="og:image"
                content="https://static.onecms.io/wp-content/uploads/sites/28/2018/10/hot-air-balloons-festival-cappadocia-turkey-HOTAIR0605.jpg"
            />
        </Head>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
    </>
}