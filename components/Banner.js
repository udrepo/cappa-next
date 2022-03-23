import Image from 'next/image'

export default function Banner() {
    return <div className="banner">
        <h1 className="text-sky-800 font-extrabold  px-4 py-24">Open Cappadocia for yourself</h1>
        <style jsx>{`
          .banner {
            height: 35vh;
            background: url("/assets/banner.jpg") no-repeat;
            background-size: cover;
          }
          .banner h1{
          font-size: 1.8em;
         // background-color: rgba(26, 43, 73, 0.5);
          }
        `}</style>
    </div>
}