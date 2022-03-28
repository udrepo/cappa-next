import {FaCheck} from "react-icons/fa";

export default function IncludedLi({text}){
    return  <li className="flex mx-2 my-2 gap-2 items-center"><FaCheck color="#0e731e"/><p>{text}</p></li>
}