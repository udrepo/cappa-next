import Views from "../../components/Views";
import {AiFillStar} from "react-icons/ai";
import {FaBus, FaHistory, FaPumpSoap} from "react-icons/fa";
import TourBlocks from "../../components/TourBlocks";

export default function TourPage(){
    return <main className="mb-10 lg:mx-20">
        <Views/>
        <div className="mx-4 flex flex-col">
            <h1 className="text-dark-blue text-2xl font-extrabold">Cappadocia: Hot-Air Balloon Tour</h1>
            <div className="flex justify-between my-4">
                <div className="flex text-sm mt-3 mb-1 items-start">
                    <div className="flex text-yellow-400">
                        <AiFillStar size={20}/>
                        <AiFillStar size={20}/>
                        <AiFillStar size={20}/>
                        <AiFillStar size={20}/>
                        <AiFillStar size={20}/>
                    </div>
                    <p className="pl-1">4.9</p>
                </div>
                <div className="flex flex-col text-main-text justify-start items-end">
                    <p className="font-extrabold text-xl">From $ 130</p>
                    <p className="">per person</p>
                </div>
            </div>
            <article className="my-3 font-bold">
                Get stunning views of the rock formations known as fairy chimneys on a hot air balloon flight over Cappadocia. Look down on the impressive valleys and plains at sunrise, and marvel at the clusters of cone-shaped rocks below you.
            </article>
            <p className="my-8 self-center text-2xl font-extrabold">About this activity</p>
            <ul>
                <li className="flex gap-4 my-4">
                    <FaBus size={30}/>
                    <div>
                        <p className="font-extrabold">Pickup included</p>
                        <p className="my-2">You will be contacted the day before with your pickup time</p>
                    </div>
                </li>
                <li className="flex gap-4 my-4">
                    <FaPumpSoap size={30}/>
                    <div>
                        <p className="font-extrabold">Covid-19 safety</p>
                        <p className="my-2">Special health and safety measures apply</p>
                    </div>
                </li>
                <li className="flex gap-4 my-4">
                    <FaHistory size={30}/>
                    <div>
                        <p className="font-extrabold">Duration</p>
                        <p className="my-2">at least 1 hour</p>
                    </div>
                </li>
            </ul>
            <TourBlocks/>
        </div>
    </main>
}