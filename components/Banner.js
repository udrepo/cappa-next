import Image from 'next/image'

export default function Banner() {
    return <div className="banner">
        <h1 className="text-white tracking-wide font-extrabold px-4 md:pl-20 py-20 md:py-32">
            Open Cappadocia for yourself. Get an unforgettable experience with us!
        </h1>
        <style jsx>{`

          .banner {
            height: 35vh;
            background: url("https://sheriftravel.ru/uploads/slider/616ee86ae8c13-1634658410.jpg") center no-repeat;
            background-size: cover;
          }

          .banner h1 {
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            font-size: 1.6em;
          }

          @media screen and (min-width: 1000px) {
            .banner h1 {
              font-size: 3.3em;
              width: 80%;
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