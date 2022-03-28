import Views from "./Views";

const images = [
    {url: '/assets/main/11.jpg'},
    {url: '/assets/main/12.jpg'},
    {url: '/assets/main/13.jpg'},
    {url: '/assets/main/14.jpg'},
    {url: '/assets/main/15.jpg'},
    {url: '/assets/main/16.jpg'},
    {url: '/assets/main/17.jpg'},
    {url: '/assets/main/18.jpg'},
    {url: '/assets/main/19.jpg'},
    {url: '/assets/main/20.jpg'}
]


export default function CappaView({cappaViewText}){


    return <section className="md:flex justify-between lg:my-5 gap-10">
        <div className="md:w-2/6 md:pr-4 lg:order-last">
            <h1 className="text-xl md:text-3xl font-bold content-center text-center lg:text-left">{cappaViewText}</h1>
            <p className="pb-5 font-bold"></p>
        </div>
        <section className="md:w-4/6">
            <Views images={images} showDotControls={false}/>
        </section>
    </section>
}