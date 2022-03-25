import Link from "next/link";
import {FaFacebookMessenger, FaInstagram, FaQuestionCircle, FaWhatsapp} from "react-icons/fa";

export default function Questions() {
    return <div className="questions mx-4 my-4 rounded-md py-4 px-4 ">
        <div className="flex justify-center my-2">
            <div className="hover:text-light-blue text-whatsapp hover:text-whatsapp border-dark-blue">
                <Link href="/"><a><FaWhatsapp size="50"/></a></Link>
            </div>
            <div className="ml-4 hover:text-light-blue text-instagram border-dark-blue">
                <Link href="/"><a><FaInstagram size="50"/></a></Link>
            </div>
            <div className="ml-4 hover:text-light-blue text-instagram border-dark-blue hidden md:block">
                <Link href="/"><a><FaInstagram size="50"/></a></Link>
            </div>
        </div>
        <h3>
            Have a questions? Ask us on your favorite messenger. We will respond in 5 minutes.
        </h3>
        <style jsx>{`
          .questions {
            height: fit-content;
            background: url("/assets/social.jpg") center no-repeat;
            background-size: cover;
          }

          .questions h3 {
            color: white;
            text-align: left;
            padding: 0;
            background-color: rgba(26, 43, 73, 0.35);
            border-radius: 0.1em;
          }

          @media screen and (min-width: 1000px) {
            .banner h1 {
              font-size: 4em;
            }
          }

          @media screen and (min-width: 1111px) {
            .banner {
              height: 50vh;
            }
          }

          @media screen and (min-width: 1280px) {
            .banner {
              height: 88vh;
            }
          }
        `}</style>
    </div>
}