import TourBlock from "./TourBlock";

export default function TourBlocks({title}) {
    return <div className="lg:mx-20">
        <h1 className="text-dark-blue text-xl md:text-3xl font-extrabold">{title}</h1>
        <section className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6">
            <TourBlock/>
            <TourBlock/>
            <TourBlock/>
        </section>
    </div>
}

