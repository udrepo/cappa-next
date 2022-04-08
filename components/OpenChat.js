import {FaWhatsapp} from "react-icons/fa";

export default function OpenChat({openChat}){
    return <section className="fixed bottom-10 p-3 w-fit text-white flex justify-center">
        <a href={"https://wa.me/77052743248/?text=" + openChat} className="bg-whatsapp rounded-full shadow-sm shadow-whatsapp p-3 animate-bounce"><FaWhatsapp size={40}/></a>
    </section>
}