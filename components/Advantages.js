import {FcCalendar, FcGlobe, FcSearch} from "react-icons/fc";

export default function Advantages(){
   return <section>
       <div className="grid grid-cols-4 place-items-center my-4">
           <FcCalendar size="64"/>
           <div className="col-span-3 place-self-start self-center">
               <h6 className="text-dark-blue font-bold text-xl">Book with flexibility</h6>
               <p>some text</p>
           </div>
       </div>
       <div className="grid grid-cols-4 place-items-center my-4">
           <FcSearch size="64"/>
           <div className="col-span-3 place-self-start self-center">
               <h6 className="text-dark-blue font-bold text-xl">Search with flexibility</h6>
               <p>some text</p>
           </div>
       </div>
       <div className="grid grid-cols-4 place-items-center my-4">
           <FcGlobe size="64"/>
           <div className="col-span-3 place-self-start self-center">
               <h6 className="text-dark-blue font-bold text-xl">All with flexibility</h6>
               <p>some text</p>
           </div>
       </div>
   </section>
}