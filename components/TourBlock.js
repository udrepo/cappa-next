import Link from "next/link";
import Image from "next/image";
import {FaBolt} from "react-icons/fa";
import {AiFillStar} from "react-icons/ai";
import useWindowSize from "../hooks/useWindowSize";

export default function TourBlock({tours, pp}) {
    const size = useWindowSize();

    const setHeight = () => {
        if (size.width < 770) return size.height * 0.1;
        if (size.width < 1000) return size.height * 0.3;
        return size.height * 0.7;
    }

    return <Link href={`/tour/${tours.id}`}><a className="hover:shadow-2xl shadow-dark-blue">
        <div className="w-fit grid grid-cols-1 items-center border border-gray-400 rounded-md text-dark-blue">
            <Image src={tours.images[1].url} width={size.width } height={setHeight()}
                   objectFit="cover" className="rounded-t-md"/>
            <div className="px-2 my-2">
                <p className="font-bold">{tours.title}</p>
                <ul className="text-sm">
                    <li className="my-1 flex items-center gap-1"><FaBolt/>{tours.availability}</li>
                    <li className="my-1 flex items-center gap-1">
                        <p className="bg-main-text w-fit p-1 rounded-md text-white font-bold">{tours.popular}</p>
                        <p className="bg-yellow-300 w-fit p-1 rounded-md text-white font-bold">{tours.rated}</p>
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
                    <p className="pl-1">{tours.rating}({tours.reviewsAmount})</p>
                </div>
                <div className="flex justify-start items-end gap-1">
                    <p className="font-bold text-xl">€ {tours.price}</p>
                    <p>{pp}</p>
                </div>
            </div>
        </div>
    </a></Link>
}