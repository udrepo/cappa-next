import TourBlock from "./TourBlock";

export default function TourBlocks({title, tours, pp}) {
    return <div className="my-2">
        <h1 className="text-dark-blue text-xl md:text-3xl font-extrabold">{title}</h1>
        <section className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6">
            {tours.map(val=>{
                return <TourBlock key={val.price} tours={val} pp={pp}/>
            })}
        </section>
    </div>
}

