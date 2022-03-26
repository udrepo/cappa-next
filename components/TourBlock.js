import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";
import {FaBolt} from "react-icons/fa";
import {AiFillStar, AiOutlineFieldTime} from "react-icons/ai";
import useWindowSize from "../hooks/useWindowSize";

export default function TourBlock() {
    const size = useWindowSize();

    console.log(size.height)

    const setHeight = () => {
        if (size.width < 770) return size.height * 0.1;
        if (size.width < 1000) return size.height * 0.3;
        return size.height * 0.7;
    }

    return <Link href="/"><a className="hover:shadow-2xl shadow-dark-blue">
        <div className="w-fit grid grid-cols-1 items-center border border-gray-400 rounded-md text-dark-blue">
            <Image src="/assets/banner.jpg" width={size.width } height={setHeight()}
                   objectFit="cover" className="rounded-t-md"/>
            <div className="px-2 my-2">
                <p className="font-bold">Cappadocia: Hot-Air Balloon Tour</p>

                <ul className="text-sm">
                    <li className="my-1 flex items-center gap-1"><FaBolt/>Available for booking</li>
                    <li className="my-1 flex items-center gap-1"><AiOutlineFieldTime/>Duration</li>
                    <li className="my-1 flex items-center gap-1">
                        <p className="bg-main-text w-fit p-1 rounded-md text-white font-bold">Most popular</p>
                        <p className="bg-yellow-300 w-fit p-1 rounded-md text-white font-bold">High Rated</p>
                    </li>
                </ul>
                <div className="flex text-sm mt-4 mb-1">
                    <div className="flex text-yellow-400">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                    </div>
                    <p className="pl-1">4.9(257)</p>
                </div>
                <div className="flex justify-start items-end gap-1">
                    <p className="font-bold text-xl">From $130</p>
                    <p className="">per person</p>
                </div>
            </div>
        </div>
    </a></Link>
}