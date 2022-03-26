import useWindowSize from "../hooks/useWindowSize";
import Image from 'next/image'

export default function Views(){
    const size = useWindowSize();

    const setHeight = () => {
        if (size.width < 770) return 207;
        if (size.width < 1000) return 277;
        return 397;
    }

    return <section className="md:flex justify-between">
        <h1 className="my-4 text-3xl font-bold md:hidden">Views of Cappadocia</h1>
        <section className="grid grid-cols-10 place-items-center w-full bg-amber-50">
       <div className="col-span-10">
           <img src="/assets/banner.jpg" width="300" height="150"/>
       </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
        </section>
        <h1 className="my-4 text-3xl font-bold hidden md:block">Views of Cappadocia</h1>
    </section>
}