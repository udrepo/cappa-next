import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({children, title}) {
    return <>
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content="Cappadocia Tours"
                key="desc"
            />
            <meta property="og:title" content="Social Title for Cool Page" />
            <meta
                property="og:description"
                content="And a social description for our cool page"
            />
            <meta
                property="og:image"
                content="https://example.com/images/cool-page.jpg"
            />
        </Head>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
    </>
}