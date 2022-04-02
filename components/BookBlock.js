import Image from 'next/image'
import {FaCreditCard} from "react-icons/fa";
import useTranslation from "next-translate/useTranslation";
import BookForm from "./BookForm";
import {useState} from "react";

export default function BookBlock({price, title}) {
    const [showBF, setShowBF] = useState(false);
    let {t} = useTranslation();
    return <div className="hidden lg:block absolute top-0 right-0 px-4 pt-10
    w-80 border-solid border-2 border-t-main-text" id="book">
        <div className="flex justify-around items-center">
            <div className="flex flex-col text-main-text justify-start items-start">
                <p className="font-extrabold text-2xl">€ {price}</p>
                <p className="">{t('tour:pp')}</p>
            </div>
            <div className="flex flex-col w-3/5 gap-2">
                <button className="px-1 py-2 bg-whatsapp h-fit rounded-3xl text-white font-bold"
                // onClick={()=>{setShowBF(true)}}
                >
                    <a href="https://wa.me/77052743248/">
                        {t('tour:bookInWA')}</a>
                </button>
                <button className="px-1 py-2 bg-instagram h-fit rounded-3xl text-white font-bold ">
                    <a href="https://www.instagram.com/open.cappadocia/"> {t('tour:bookInIG')}</a>
                </button>
            </div>
        </div>
        <div className="flex py-4 gap-4">
            <FaCreditCard size={35}/>
            <p>{t('tour:bookText')}</p>
        </div>
        <div className="flex gap-2 items-center mb-4">
            <p>{t('tour:payWith')} </p>
            <Image src="/assets/pay/visa.png" height={30} width={30}/>
            <Image src="/assets/pay/master-card.png" height={30} width={30}/>
            <Image src="/assets/pay/american-express.png" height={30} width={30}/>
            <Image src="/assets/pay/union.png" height={30} width={30}/>
        </div>
        {showBF && <BookForm/>}
    </div>
}