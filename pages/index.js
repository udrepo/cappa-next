import Banner from "../components/Banner";
import TourBlocks from "../components/TourBlocks";
import Questions from "../components/Questions";
import AdVideo from "../components/AdVideo";
import Advantages from "../components/Advantages";
import useTranslation from "next-translate/useTranslation";
import CappaView from "../components/CappaViews";

export default function Home() {
    let {t} = useTranslation();
    return (
        <>
            <Banner title={t('common:bannerText')}/>
            <section className="m-4 md:my-20 flex flex-col gap-8">
                <TourBlocks title={t('common:tourBlocksTitle')}/>
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