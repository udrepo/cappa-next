import Link from 'next/link'
import Image from 'next/image'
import useTranslation from "next-translate/useTranslation";

import {FaQuestionCircle, FaWhatsapp} from "react-icons/fa";
import useWindowSize from "../hooks/useWindowSize";

export default function NavBar() {

    let {t} = useTranslation();

    const size = useWindowSize();


    const setHeight = () => {
        if (size.width < 1000) return 52;
        return 63;
    }

    const setWidth = () => {
        if (size.width < 1000) return 181;
        return 220;
    }

    console.log(t('common:nav'));
    return <nav className="m-4 my-0 md:mx-20 md:my-4 flex justify-between">
        <div className="self-end"><Link href="/"><a className="">
            <Image src="/assets/logo.png" width={setWidth()} height={setHeight()}/>
        </a></Link></div>
        <div className="flex py-4">
            <div className="hover:text-whatsapp text-dark-blue hover:text-whatsapp hover:border-b-2 border-dark-blue">
                <Link href="/"><a><FaWhatsapp size="30"/></a></Link></div>
            <div className="ml-4 hover:text-light-blue hover:border-b-2 border-dark-blue"><Link
                href="/"><a><FaQuestionCircle size="30"/></a></Link></div>
        </div>
    </nav>
}