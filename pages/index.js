import Banner from "../components/Banner";
import TourBlocks from "../components/TourBlocks";
import Questions from "../components/Questions";
import AdVideo from "../components/AdVideo";
import Advantages from "../components/Advantages";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
    let {t} = useTranslation();
    return (
        <>
            <Banner title={t('common:bannerText')}/>
            <section className="m-4 md:my-20 flex flex-col gap-8">
                <TourBlocks title={'Experiences in Cappadocia'}/>
                <Advantages/>
                {/*<Views/>*/}
                <Questions/>
                <AdVideo videoId="NLmYGHYtGko"
                desc="The short video shown all great Cappadocia must-see travel destinations.
            Discover our authentic,
            unforgettable experiences and explore for real."
                />
            </section>
        </>
    )
}