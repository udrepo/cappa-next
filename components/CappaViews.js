import Views from "./Views";

export default function CappaView({cappaViewText}){
    return <section className="md:flex justify-between lg:my-5 gap-10">
        <div className="md:w-2/6 md:pr-4 lg:order-last">
            <h1 className="text-xl md:text-3xl font-bold content-center text-center lg:text-left">{cappaViewText}</h1>
            <p className="pb-5 font-bold"></p>
        </div>
        <section className="md:w-4/6">
            <Views showDotControls={false}/>
        </section>
    </section>
}