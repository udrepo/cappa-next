import {useRouter} from "next/router";
import Link from 'next/link'
import {FaFacebookMessenger, FaHeart, FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa";

export default function Footer() {
    const router = useRouter();
    return <footer className="w-full h-full bg-dark-blue text-white p-4 py-7 flex flex-col gap-4">
        <a className="text-white text-2xl font-bold">Open Cappadocia</a>

        <div className="flex justify-start gap-4">
            <p>Languages:</p>
            <ul className="flex gap-4">
                {router.locales.map((locale) =>
                    <li key={locale}>
                        <Link href={router.asPath} locale={locale}><a>{locale.toUpperCase()}</a></Link>
                    </li>
                )}
            </ul>
        </div>
        <hr/>
        <div id="footer-links">
            <ul>
                <li><a href="#order-form">Book now</a></li>
                <li><a href="https://wa.me/77052743248/">Help</a></li>
                <li><a href="">Privacy policy</a></li>
                <li className="mb-2"><a href="">Offer Agreement</a></li>
                <hr/>
                <li className="mt-2">Contacts
                    <br/>+7 705 274 3248 (WhatsApp)
                    <br/>+7 778 183 0799
                    <br/>Email: bookballontour@gmail.com
                </li>
            </ul>
        </div>
        <hr/>
        <div className="flex flex-col gap-4">
            <p className="text-sm flex justify-center gap-2 font-bold">© 2022. Open Cappadocia. Made with love!<FaHeart color="red"/></p>
            <div className="flex justify-center gap-4">
                <FaWhatsapp size="22" color=""/>
                <FaInstagram size="22" color=""/>
                <FaFacebookMessenger size="22" color=""/>
                <FaTelegram size="22" color=""/>
            </div>
        </div>
    </footer>
}