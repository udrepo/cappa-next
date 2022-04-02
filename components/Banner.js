import Image from 'next/image'
import useWindowSize from "../hooks/useWindowSize";

//text-white tracking-wide font-extrabold px-4 md:pl-20 py-20 md:py-32

export default function Banner({title}) {
    const size = useWindowSize();

    const setHeight = () => {
        if (size.width < 770) return size.height * 0.35;
        if (size.width < 1111) return size.height * 0.5;
        if (size.width < 1340) return size.height * 0.85;
        return size.height * 0.5;
    }


    return <div className="banner h-fit relative">
        <Image src="/assets/banner.jpg" width={size.width} height={setHeight()} objectFit="cover"/>
        <h1 className="text-white tracking-wide font-extrabold px-4 md:pl-20 py-20 md:py-32 absolute top-0">
            {title}
        </h1>
        <style jsx>{`
          .banner {
            height: 35vh;
          }

          .banner h1 {
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            font-size: 1.6em;
          }

          @media screen and (min-width: 1000px) {
            .banner h1 {
              font-size: 3.3em;
              width: 80%
            }
          }

          @media screen and (min-width: 1111px) {
            .banner {
              height: 50vh
            }
          }

          @media screen and (min-width: 795px) {
            .banner {
              height: 50vh
            }
          }
          
          @media screen and (min-width: 1111px) {
            .banner {
              height: 82vh
            }
          }
          
            @media screen and (min-width: 1300px) {
            .banner {
              height: 50vh
            }
          }

        `}</style>
    </div>
}