import Link from "next/link";
import {FaFacebookMessenger, FaInstagram, FaWhatsapp} from "react-icons/fa";

export default function Questions({qText}) {
    return <div className="questions rounded-md py-4 px-4 md:mx-20 ">
        <div className="flex justify-center my-2 ">
            <div className="hover:text-light-blue text-whatsapp hover:text-whatsapp border-dark-blue">
                <Link href="/"><a><FaWhatsapp size="50"/></a></Link>
            </div>
            <div className="ml-4 hover:text-light-blue text-instagram border-dark-blue">
                <Link href="/"><a><FaInstagram size="50"/></a></Link>
            </div>
            <div className="ml-4 hover:text-light-blue text-messenger border-dark-blue hidden md:block">
                <Link href="/"><a><FaFacebookMessenger size="50"/></a></Link>
            </div>
        </div>
        <h3>{qText}</h3>
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
            .questions h3 {
              font-size: 1.8em;
            }
          }

          @media screen and (min-width: 1111px) {
            .questions {
              height: 33vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
          }

          @media screen and (min-width: 1280px) {
            .questions {
              height: 33vh;
            }
          }
        `}</style>
    </div>
}