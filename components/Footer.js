import {useRouter} from "next/router";
import Link from 'next/link'
import {FaFacebookMessenger, FaHeart, FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa";
import Image from 'next/image'
import useTranslation from "next-translate/useTranslation";


export default function Footer() {
    const router = useRouter();
    let {t} = useTranslation();
    return <footer className="w-full h-full bg-dark-blue text-white p-4 py-7 md:px-20 flex flex-col gap-4 lg:flex-row justify-between">
        <div className="lg:flex flex-col justify-start gap-8">
            <Link href="/"><a><Image src="/assets/logo.png" width={220} height={63} /></a></Link>
            <div className="flex gap-4 mt-2">
            <p>{t('common:languages')}</p>
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
                <li><a href="https://wa.me/77052743248/">{t('common:bookNow')}</a></li>
                <li><a href="https://wa.me/77052743248/">{t('common:help')}</a></li>
                <li><a href="">{t('common:privacy')}</a></li>
                <li className="mb-2"><a href="">{t('common:agreement')}</a></li>
                <hr/>
                <li className="mt-2">{t('common:contacts')}
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
                width="119" height="170" alt="cappadocia balloon flight"
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