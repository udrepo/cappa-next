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
import {useRouter} from "next/router";
import {tours} from "../../data/tours";
import {useEffect} from "react";
import {visitorData} from "../../helper/vistorData";

export const getStaticPaths = async ({locales}) => {
    let paths = locales.map(locale => {
        return tours.kk.tours.map(val => {
            return {
                params: {id: val.id.toString(),
                },
                locale
            }
        })
    }).flat();
    return {
        paths,
        fallback: false
    }
}


export default function TourPage() {
    let {t} = useTranslation();
    const router = useRouter();
    const {id} = router.query;

    //TODO
    useEffect(()=>{
        visitorData({page: router.asPath, lg: router.locale})
    }, [router.asPath]);

    const lg = router.locale.toString();
    const obj = {...tours[lg].tours.find(e => e.id === id)}
    const toursBlock = tours[lg].tours.filter(e => e.id !== id);

    return <main className="mb-10 md:mx-20">

        <hr className="hidden lg:block -mx-20"/>
        <div className="mx-4 flex flex-col">
            <div className="lg:flex flex-col justify-center align-middle ">
                <div className="-mx-4 lg:mx-0 lg:order-last  relative">
                    <div className="lg:w-2/3"><Views images={obj.images}/></div>
                    <BookBlock price={obj.price} title={obj.title}/>
                </div>
                <div className="lg:order-1 ">
                    <h1 className="text-dark-blue text-2xl font-extrabold lg:text-4xl mt-4 lg:mt-6">
                        <div className="hidden lg:block lg:flex items-center gap-1 my-3 text-sm">
                            <p className="bg-main-text w-fit p-1 rounded-md text-white font-bold popular">{obj.popular}</p>
                            <p className="bg-yellow-300 w-fit p-1 rounded-md text-white font-bold rated">{obj.rated}</p>
                        </div>
                        {obj.title}
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
                            <p className="pl-1">{obj.rating}</p>
                        </div>
                        <div className="flex flex-col text-main-text justify-start items-end lg:hidden">
                            <p className="font-extrabold text-xl">€ {obj.price}</p>
                            <p className="">{t('tour:pp')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <article className="my-3 font-bold lg:w-2/3">{obj.mainText}</article>
            <p className="my-8 self-center text-2xl font-extrabold md:w-2/3 md:self-start">{t('tour:aboutActivity')}</p>
            <ul>
                <li className="flex gap-4 my-4">
                    <FaBus size={30}/>
                    <div>
                        <p className="font-extrabold">{obj.moments.busTitle}</p>
                        <p className="my-2">{obj.moments.busText}</p>
                    </div>
                </li>
                <li className="flex gap-4 my-4">
                    <FaPumpSoap size={30}/>
                    <div>
                        <p className="font-extrabold">{obj.moments.covidTitle}</p>
                        <p className="my-2">{obj.moments.covidText}</p>
                    </div>
                </li>
                <li className="flex gap-4 my-4">
                    <FaHistory size={30}/>
                    <div>
                        <p className="font-extrabold">{obj.moments.durationTitle}</p>
                        <p className="my-2">{obj.moments.durationText}</p>
                    </div>
                </li>
            </ul>
            <div className="flex flex-col items-center gap-4 my-4 md:w-2/3">
                <p className="font-extrabold text-2xl md:self-start">{t('tour:experience')}</p>
                <div className="self-start flex flex-col gap-2">
                    <div>
                        <p className="font-extrabold text-main-text">{t('tour:highlights')}</p>
                        <ul className="list-disc mx-8 my-2 font-bold">
                            {obj.highlights.map(value => {
                                    return <li key={value}>{value}</li>
                                }
                            )}
                        </ul>
                    </div>
                    <hr/>
                    <div>
                        <p className="font-extrabold text-main-text mb-2 ">{t('tour:desc')}</p>
                        <p className="font-bold mx-4" style={{whiteSpace: 'pre-line'}}>{obj.desc}</p>
                    </div>
                    <hr/>
                    <div>
                        <p className="font-extrabold text-main-text">{t('tour:included')}</p>
                        <ul className="font-bold mx-4">
                            {
                                obj.included.map(value => {
                                    return <IncludedLi key={value} text={value}/>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <AdVideo videoId={obj.videoLink} title={t("tour:videoTitle")}/>
            <div className="lg:hidden px-4 lg:px-20 py-10 my-9 border-solid border-2 border-t-main-text" id="book">
                <div className="flex justify-around">
                    <div className="flex flex-col text-main-text justify-start items-start">
                        <p className="font-extrabold text-2xl">€ {obj.price}</p>
                        <p className="">{t('tour:pp')}</p>
                    </div>
                    <div className="flex flex-col w-3/5 gap-2">
                        <button className="px-1 py-2 bg-whatsapp h-fit rounded-3xl text-white  font-bold ">
                            <a href={`https://wa.me/77052743248/?text=I'm%20interested%20in%20${obj.title}%20tour%20in%20Cappadocia`}>{t('tour:bookInWA')}</a>
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
                <div className="flex gap-2 items-center">
                    <p>{t('tour:payWith')} </p>
                    <Image src="/assets/pay/visa.png" height={30} width={30} alt="cappadocia balloon flight"/>
                    <Image src="/assets/pay/master-card.png" height={30} width={30} alt="cappadocia balloon flight"/>
                    <Image src="/assets/pay/american-express.png" height={30} width={30} alt="cappadocia balloon flight"/>
                    <Image src="/assets/pay/union.png" height={30} width={30} alt="cappadocia balloon flight"/>
                </div>
            </div>
            <hr/>
            <TourBlocks title={t('tour:otherTours')} tours={toursBlock} pp={t('tour:pp')}/>
            {/*<hr/>*/}
            {/*<Reviews reviews={obj.reviews} reviewsAmount={obj.reviewsAmount}/>*/}
        </div>
        <BookNowButton bookNow={t('tour:bookNow')}/>
    </main>
}
