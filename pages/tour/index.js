import Views from "../../components/Views";
import {AiFillStar} from "react-icons/ai";
import {FaBus, FaCheck, FaHistory, FaPumpSoap} from "react-icons/fa";
import TourBlocks from "../../components/TourBlocks";
import AdVideo from "../../components/AdVideo";
import BookNowButton from "../../components/BookNowButton";
import IncludedLi from "../../components/IncludedLi";
import Reviews from "../../components/Reviews";

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
            <div className="flex flex-col items-center gap-4 my-4">
                <p className="font-extrabold text-2xl">Experience</p>
                <div className="self-start flex flex-col gap-2">
                    <div>
                        <p className="font-extrabold text-main-text">Highlights</p>
                        <ul className="list-disc mx-4 my-2 lg:mx-20 font-bold">
                            <li>Early morning pickup from hotel</li>
                            <li>Watch the sunrise over the fairy chimney rock formations of Cappadocia from above</li>
                            <li>Amazing view of valley</li>
                            <li>Leave with lasting memories and a souvenir flight certificate</li>
                        </ul>
                    </div>
                    <hr/>
                    <div>
                        <p className="font-extrabold text-main-text mb-2">Description</p>
                        <p className="font-bold">Enjoy Cappadocia from above on a thrilling hot air balloon tour complete with a light breakfast and champagne celebration upon landing.
                            <br/>  <br/>
                            Start your tour with a luxury mini-bus transfer from your hotel to the local partners headquarters. Here you can relax and enjoy a light breakfast while the pilots choose a launch site.
                            <br/>  <br/>
                            Then get ready to watch the crew assemble and inflate the balloon. It is the only balloon variety in the region that is silver-coated, a hallmark of quality and safety. Following a brief introduction, you will be off to see Cappadocia from high in the air.
                            <br/>  <br/>
                            Climb approximately 300 meters and take in panoramic views as you drift above the valleys and between rock formations. Balloons move by the wind and you will float wherever the breeze takes you.
                            <br/>  <br/>
                            Once back on the ground, celebrate your flight with a champagne toast and receive a commemorative flight medallion.</p>
                    </div>
                    <hr/>
                    <div>
                        <p className="font-extrabold text-main-text">Included</p>
                        <ul className="font-bold">
                           <IncludedLi text="Hotel pick-up and drop off"/>
                            <IncludedLi text="Insurance"/>
                            <IncludedLi text="All Fees and Taxes"/>
                            <IncludedLi text="Flight certificate"/>
                            <IncludedLi text="Glass of champagne on landing"/>
                            <IncludedLi text="1-hour balloon flight"/>
                        </ul>
                    </div>
                </div>
            </div>
            <AdVideo videoId="AyHGlH4Nw4g"/>
            <TourBlocks title={'Other tours in Cappadocia'}/>
            <Reviews/>
        </div>
        <BookNowButton/>
    </main>
}