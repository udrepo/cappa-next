
import Banner from "../components/Banner";
import TourBlocks from "../components/TourBlocks";
import Questions from "../components/Questions";
import AdVideo from "../components/AdVideo";
import Advantages from "../components/Advantages";

export default function Home() {

    return (
        <>
            <Banner/>
            <section className="m-4">
            <TourBlocks/>
            <Questions/>
            <Advantages/>
            <AdVideo/>
            </section>
        </>
    )
}