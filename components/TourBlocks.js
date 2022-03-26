import TourBlock from "./TourBlock";

export default function TourBlocks() {
    return <>
        <h1 className="mt-10 md:mx-10 text-dark-blue text-3xl font-extrabold">Experiences in Cappadocia</h1>
        <section className="my-4 md:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6">
            <TourBlock/>
            <TourBlock/>
            <TourBlock/>
        </section>
    </>
}

