
import Link from 'next/link'
import useTranslation from "next-translate/useTranslation";

import {FaQuestionCircle, FaWhatsapp} from "react-icons/fa";

export default function NavBar() {

    let {t} = useTranslation();

    console.log(t('common:nav'));
    return <nav className="m-4 md:mx-10 md:my-4 flex justify-between">
        <div><Link href="/"><a className="text-dark-blue text-2xl font-bold">Cappadocia Travel</a></Link></div>
        <div className="flex">
            <div><Link href="/"><a><FaWhatsapp color="#1A2B49" size="30"/></a></Link></div>
            <div className="ml-4"><Link href="/"><a><FaQuestionCircle color="#1A2B49" size="30"/></a></Link></div>
        </div>
    </nav>
}