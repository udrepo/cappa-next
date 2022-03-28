import Views from "../../components/Views";
import {AiFillStar} from "react-icons/ai";
import {FaBus, FaCreditCard, FaHistory, FaPumpSoap} from "react-icons/fa";
import TourBlocks from "../../components/TourBlocks";
import AdVideo from "../../components/AdVideo";
import BookNowButton from "../../components/BookNowButton";
import IncludedLi from "../../components/IncludedLi";
import Reviews from "../../components/Reviews";
import BookBlock from "../../components/BookBlock";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function TourPage(){
    let {t} = useTranslation();
    return <main className="mb-10 md:mx-20">
        <hr className="hidden lg:block -mx-20"/>
        <div className="mx-4 flex flex-col">
           <div className="lg:flex flex-col justify-center align-middle ">
               <div className="-mx-4 lg:mx-0 lg:order-last  relative">
                   <div className="lg:w-2/3"><Views/></div>
                  <BookBlock/>
               </div>
               <div className="lg:order-1 ">
                   <h1 className="text-dark-blue text-2xl font-extrabold lg:text-4xl mt-4 lg:mt-6">
                       <div className="hidden lg:block lg:flex items-center gap-1 my-3 text-sm">
                           <p className="bg-main-text w-fit p-1 rounded-md text-white font-bold">Most popular</p>
                           <p className="bg-yellow-300 w-fit p-1 rounded-md text-white font-bold">High Rated</p>
                       </div>
                       Cappadocia: Hot-Air Balloon
                   </h1>
                   <div className="flex justify-between my-4">
                       <div className="flex text-sm mt-1 mb-1 items-start">
                           <div className="flex text-yellow-400">
                               <AiFillStar size={20}/>
                               <AiFillStar size={20}/>
                               <AiFillStar size={20}/>
                               <AiFillStar size={20}/>
                               <AiFillStar size={20}/>
                           </div>
                           <p className="pl-1">4.9</p>
                       </div>
                       <div className="flex flex-col text-main-text justify-start items-end lg:hidden">
                           <p className="font-extrabold text-xl">$ 130</p>
                           <p className="">{t('tour:pp')}</p>
                       </div>
                   </div>
               </div>
           </div>
            <article className="my-3 font-bold lg:w-2/3">
                Get stunning views of the rock formations known as fairy chimneys on a hot air balloon flight over Cappadocia. Look down on the impressive valleys and plains at sunrise, and marvel at the clusters of cone-shaped rocks below you.
            </article>
            <p className="my-8 self-center text-2xl font-extrabold md:w-2/3 md:self-start">{t('tour:aboutActivity')}</p>
            <ul>
                <li className="flex gap-4 my-4">
                    <FaBus size={30}/>
                    <div>
                        <p className="font-extrabold">Pickup included</p>
                        <p className="my-2">You will be contacted the day before with your pickup time</p>
                    </div>
                </li>
                <li className="flex gap-4 my-4">
                    <FaPumpSoap size={30}/>
                    <div>
                        <p className="font-extrabold">Covid-19 safety</p>
                        <p className="my-2">Special health and safety measures apply</p>
                    </div>
                </li>
                <li className="flex gap-4 my-4">
                    <FaHistory size={30}/>
                    <div>
                        <p className="font-extrabold">Duration</p>
                        <p className="my-2">at least 1 hour</p>
                    </div>
                </li>
            </ul>
            <div className="flex flex-col items-center gap-4 my-4 md:w-2/3">
                <p className="font-extrabold text-2xl md:self-start">{t('tour:experience')}</p>
                <div className="self-start flex flex-col gap-2">
                    <div>
                        <p className="font-extrabold text-main-text">{t('tour:highlights')}</p>
                        <ul className="list-disc mx-8 my-2 font-bold">
                            <li>Early morning pickup from hotel</li>
                            <li>Watch the sunrise over the fairy chimney rock formations of Cappadocia from above</li>
                            <li>Amazing view of valley</li>
                            <li>Leave with lasting memories and a souvenir flight certificate</li>
                        </ul>
                    </div>
                    <hr/>
                    <div>
                        <p className="font-extrabold text-main-text mb-2 ">{t('tour:desc')}</p>
                        <p className="font-bold mx-4">Enjoy Cappadocia from above on a thrilling hot air balloon tour complete with a light breakfast and champagne celebration upon landing.
                            <br/>  <br/>
                            Start your tour with a luxury mini-bus transfer from your hotel to the local partners headquarters. Here you can relax and enjoy a light breakfast while the pilots choose a launch site.
                            <br/>  <br/>
                            Then get ready to watch the crew assemble and inflate the balloon. It is the only balloon variety in the region that is silver-coated, a hallmark of quality and safety. Following a brief introduction, you will be off to see Cappadocia from high in the air.
                            <br/>  <br/>
                            Climb approximately 300 meters and take in panoramic views as you drift above the valleys and between rock formations. Balloons move by the wind and you will float wherever the breeze takes you.
                            <br/>  <br/>
                            Once back on the ground, celebrate your flight with a champagne toast and receive a commemorative flight medallion.</p>
                    </div>
                    <hr/>
                    <div>
                        <p className="font-extrabold text-main-text">{t('tour:included')}</p>
                        <ul className="font-bold mx-4">
                           <IncludedLi text="Hotel pick-up and drop off"/>
                            <IncludedLi text="Insurance"/>
                            <IncludedLi text="All Fees and Taxes"/>
                            <IncludedLi text="Flight certificate"/>
                            <IncludedLi text="Glass of champagne on landing"/>
                            <IncludedLi text="1-hour balloon flight"/>
                        </ul>
                    </div>
                </div>
            </div>
            <AdVideo videoId="AyHGlH4Nw4g" title={t("tour:videoTitle")}/>
            <div className="lg:hidden px-4 lg:px-20 py-10 my-9 border-solid border-2 border-t-main-text" id="book">
                <div className="flex justify-around">
                    <div className="flex flex-col text-main-text justify-start items-start">
                        <p className="font-extrabold text-2xl">$ 130</p>
                        <p className="">{t('tour:pp')}</p>
                    </div>
                    <div className="flex flex-col w-3/5 gap-2">
                        <button className="px-1 py-2 bg-whatsapp h-fit rounded-3xl text-white  font-bold ">
                            {t('tour:bookInWA')}
                        </button>
                        <button className="px-1 py-2 bg-instagram h-fit rounded-3xl text-white font-bold ">
                            {t('tour:bookInIG')}
                        </button>
                    </div>
                </div>
                <div className="flex py-4 gap-4">
                    <FaCreditCard size={35}/>
                    <p>{t('tour:bookText')}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <p>{t('tour:payWith')} </p>
                    <Image src="/assets/pay/visa.png" height={30} width={30}/>
                    <Image src="/assets/pay/master-card.png" height={30} width={30}/>
                    <Image src="/assets/pay/american-express.png" height={30} width={30}/>
                    <Image src="/assets/pay/union.png" height={30} width={30}/>
                </div>
            </div>
            <TourBlocks title={t('tour:otherTours')}/>
            <Reviews/>
        </div>
        <BookNowButton/>
    </main>
}