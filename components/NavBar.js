
import Link from 'next/link'
import useTranslation from "next-translate/useTranslation";

import {FaQuestionCircle, FaWhatsapp} from "react-icons/fa";

export default function NavBar() {

    let {t} = useTranslation();

    console.log(t('common:nav'));
    return <nav className="m-4 md:mx-10 md:my-4 flex justify-between">
        <div><Link href="/"><a className="text-dark-blue text-2xl font-bold">Open Cappadocia</a></Link></div>
        <div className="flex">
            <div className="hover:text-whatsapp text-dark-blue hover:text-whatsapp hover:border-b-2 border-dark-blue"><Link href="/"><a><FaWhatsapp size="30"/></a></Link></div>
            <div className="ml-4 hover:text-light-blue hover:border-b-2 border-dark-blue"><Link href="/"><a><FaQuestionCircle size="30"/></a></Link></div>
        </div>
    </nav>
}