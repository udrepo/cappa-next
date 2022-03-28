import {AiFillStar} from "react-icons/ai";
import ReviewBlock from "./ReviewBlock";

export default function Reviews() {
    return <section className="grid lg:grid-cols-4 gap-10 my-4 ">
        <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-2xl font-bold">Customer reviews</p>
            <div className="flex text-yellow-400">
                <AiFillStar size={48}/>
                <AiFillStar size={48}/>
                <AiFillStar size={48}/>
                <AiFillStar size={48}/>
                <AiFillStar size={48}/>
            </div>
            <p className="text-3xl font-bold">4.9/5</p>
            <p>Based on 212 reviews</p>
        </div>
        <div className="lg:col-span-3 divide-y-2 divide-dark-blue">
           <ReviewBlock name="Alexander"
                        date="6 Jan,2022"
                        text={"Excellent organization, " +
                            "picked up at the hotel exactly at the time they said."}/>
        </div>
    </section>
}