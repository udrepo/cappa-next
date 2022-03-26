import {useRouter} from "next/router";
import Link from 'next/link'
import {FaFacebookMessenger, FaHeart, FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa";
import Image from 'next/image'

export default function Footer() {
    const router = useRouter();
    return <footer className="w-full h-full bg-dark-blue text-white p-4 lg:px-20 py-7 flex flex-col gap-4 lg:flex-row justify-between">
        <div className="lg:flex flex-col justify-start gap-8">
            <a className="text-white text-2xl font-bold">Open Cappadocia</a>
            <div className="flex gap-4">
            <p>Languages:</p>
            <ul className="flex gap-4">
                {router.locales.map((locale) =>
                    <li className="text-main-text" key={locale}>
                        <Link href={router.asPath} locale={locale}><a>{locale.toUpperCase()}</a></Link>
                    </li>
                )}
            </ul>
            </div>
        </div>
        <hr className="lg:hidden"/>
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
        <hr className="lg:hidden"/>
        <div className="flex flex-col gap-4 lg:justify-end">
            <div className="hidden lg:block place-self-center">
                <Image src="/assets/cappa_ill.jpg"
                width="119" height="170"
                />
            </div>
            <p className="text-sm flex justify-center gap-2 font-bold">© 2022. Open Cappadocia. Made with love!<FaHeart color="red"/></p>
            <div className="flex justify-center gap-4">
                <a href="https://wa.me/77052743248/"><FaWhatsapp size="22" color=""/></a>
                <a href="https://www.instagram.com/open.cappadocia/"><FaInstagram size="22" color=""/></a>
                <a href="https://m.me/gurtourtourcontact"><FaFacebookMessenger size="22" color=""/></a>
                <a href="https://t.me/getyourtour"><FaTelegram size="22" color=""/></a>
            </div>
        </div>
    </footer>
}