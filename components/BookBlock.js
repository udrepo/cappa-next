import Image from 'next/image'
import {FaCreditCard } from "react-icons/fa";

export default function BookBlock() {
    return <div className="hidden lg:block absolute top-0 right-0 px-4 py-10
    w-80 border-solid border-2 border-t-main-text">
        <div className="flex justify-around items-center">
            <div className="flex flex-col text-main-text justify-start items-start">
                <p className="font-extrabold text-2xl">$ 130</p>
                <p className="">per person</p>
            </div>
            <div className="flex flex-col w-3/5 gap-2">
                <button className="px-1 py-2 bg-whatsapp h-fit rounded-3xl text-white  font-bold ">
                    Book in WhatsApp
                </button>
                <button className="px-1 py-2 bg-instagram h-fit rounded-3xl text-white font-bold ">
                    Book in Instagram
                </button>
            </div>
        </div>
        <div className="flex py-4 gap-4">
            <FaCreditCard size={35}/>
            <p>Book this tour now in WhatsApp or Instagram</p>
        </div>
        <div className="flex gap-2 items-center">
            <p>Pay with: </p>
            <Image src="/assets/pay/visa.png" height={30} width={30}/>
            <Image src="/assets/pay/master-card.png" height={30} width={30}/>
            <Image src="/assets/pay/american-express.png" height={30} width={30}/>
            <Image src="/assets/pay/union.png" height={30} width={30}/>
        </div>
    </div>
}