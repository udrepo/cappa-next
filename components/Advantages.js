import {FcPlanner, FcSearch, FcSms} from "react-icons/fc";

export default function Advantages({bookTitle, bookText, uniqueTitle, uniqueText, msgTitle, msgText}){
   return <section className="lg:flex justify-around items-start md:my-9">
       <div className="grid grid-cols-4 place-items-start gap-4 my-4 lg:w-1/3">
           <FcPlanner size="64"/>
           <div className="col-span-3 place-self-start self-center">
               <h6 className="text-dark-blue font-bold text-xl">{bookTitle}</h6>
               <p>{bookText}</p>
           </div>
       </div>
       <div className="grid grid-cols-4 place-items-start gap-4 my-4 lg:w-1/3">
           <FcSearch size="64"/>
           <div className="col-span-3 place-self-start self-center">
               <h6 className="text-dark-blue font-bold text-xl">{uniqueTitle}</h6>
               <p>{uniqueText}</p>
           </div>
       </div>
       <div className="grid grid-cols-4 place-items-start gap-4 my-4 lg:w-1/3">
           <FcSms size="64"/>
           <div className="col-span-3 place-self-start self-center">
               <h6 className="text-dark-blue font-bold text-xl">{msgTitle}</h6>
               <p>{msgText}</p>
           </div>
       </div>
   </section>
}