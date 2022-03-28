import {FcPlanner, FcSearch, FcSms} from "react-icons/fc";

export default function Advantages(){
   return <section className="lg:flex justify-around md:my-9 md:mx-20">
       <div className="grid grid-cols-4 place-items-center gap-4 my-4 lg:w-1/3">
           <FcPlanner size="64"/>
           <div className="col-span-3 place-self-start self-center">
               <h6 className="text-dark-blue font-bold text-xl">Book with flexibility</h6>
               <p>Plan and agree on the details of the tour</p>
           </div>
       </div>
       <div className="grid grid-cols-4 place-items-center gap-4 my-4 lg:w-1/3">
           <FcSearch size="64"/>
           <div className="col-span-3 place-self-start self-center">
               <h6 className="text-dark-blue font-bold text-xl">Unique experiences</h6>
               <p>Find a tour suitable for you</p>
           </div>
       </div>
       <div className="grid grid-cols-4 place-items-center gap-4 my-4 lg:w-1/3">
           <FcSms size="64"/>
           <div className="col-span-3 place-self-start self-center">
               <h6 className="text-dark-blue font-bold text-xl">Booking on messenger</h6>
               <p>Contact us on Whatsapp, Instagram, Messenger</p>
           </div>
       </div>
   </section>
}