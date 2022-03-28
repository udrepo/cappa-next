import {AiFillStar} from "react-icons/ai";

export default function ReviewBlock({name, date, text}) {
    return <div className="py-4">
        <div className="flex justify-between gap-2">
            <p className="font-bold">{name}<span className="font-light">, {date}</span></p>
            <div className="flex text-yellow-400">
                <AiFillStar size={20}/>
                <AiFillStar size={20}/>
                <AiFillStar size={20}/>
                <AiFillStar size={20}/>
                <AiFillStar size={20}/>
            </div>
        </div>
        <p className="font-bold">{text}</p>
    </div>

}