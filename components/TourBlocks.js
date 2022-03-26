import TourBlock from "./TourBlock";

export default function TourBlocks() {
    return <>
        <h1 className="m-4 mt-3 text-dark-blue text-xl font-extrabold">Experiences in Cappadocia</h1>
        <section className="mx-4 my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6">
            <TourBlock/>
            <TourBlock/>
            <TourBlock/>
        </section>
    </>
}

