import Banner from "../components/Banner";
import TourBlocks from "../components/TourBlocks";
import Questions from "../components/Questions";
import AdVideo from "../components/AdVideo";
import Advantages from "../components/Advantages";
import useTranslation from "next-translate/useTranslation";
import CappaView from "../components/CappaViews";
import {useRouter} from "next/router";
import {tours} from "../data/tours";

export default function Home() {
    let {t} = useTranslation();
    const router = useRouter();
    const {id} = router.query;
    const lg = router.locale.toString();

    return (
        <>
            <Banner title={t('common:bannerText')}/>
            <section className="m-4 md:my-20 flex flex-col gap-8 lg:mx-20">
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
        </>
    )
}