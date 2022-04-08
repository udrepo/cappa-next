import Banner from "../components/Banner";
import TourBlocks from "../components/TourBlocks";
import Questions from "../components/Questions";
import AdVideo from "../components/AdVideo";
import Advantages from "../components/Advantages";
import useTranslation from "next-translate/useTranslation";
import CappaView from "../components/CappaViews";
import {useRouter} from "next/router";
import {tours} from "../data/tours";
import {visitorData} from "../helper/vistorData";
import {useEffect} from "react";
import OpenChat from "../components/OpenChat";

export default function Home() {

    let {t} = useTranslation();
    const router = useRouter();
    const lg = router.locale.toString();

    //TODO
    useEffect(()=>{
        visitorData({page: router.asPath, lg: router.locale})
    }, []);

    return (
        <>
            <Banner title={t('common:bannerText')}/>
            <section className="m-4 md:my-10 flex flex-col gap-6 lg:mx-20">
                <TourBlocks title={t('common:tourBlocksTitle')}
                            tours={tours[lg].tours} pp={t('common:pp')}
                />
                <Advantages
                    bookTitle={t('common:bookTitle')} bookText={t('common:bookText')}
                    uniqueTitle={t('common:uniqueTitle')} uniqueText={t('common:uniqueText')}
                    msgTitle={t('common:msgTitle')} msgText={t('common:msgText')}/>
                <CappaView cappaViewText={t('common:cappaViewText')}/>
                <Questions qText={t('common:qText')}/>
                <AdVideo title= {t('common:vTitle')}
                    videoId="NLmYGHYtGko"
                    desc={t('common:desc')}/>
            </section>
            <OpenChat openChat={t('common:openChat')}/>
        </>
    )
}