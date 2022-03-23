import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({children}) {
    return <>
        <Head>
            <title>Cappadocia</title>
        </Head>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
    </>
}