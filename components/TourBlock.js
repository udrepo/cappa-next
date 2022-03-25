import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function TourBlock() {
    const size = useWindowSize();

    console.log(size.height)

    const setHeight = () => {
        if (size.width < 770) return size.height * 0.1;
        if (size.width < 1000) return size.height * 0.3;
        return size.height * 0.7;
    }

    return <Link href="/"><a>
        <div className="w-fit grid grid-cols-1 items-center border border-gray-400 rounded-md text-dark-blue">
            <Image src="/assets/banner.jpg" width={size.width } height={setHeight()}
                   objectFit="cover" className="rounded-md"/>
            <div className="px-2 my-2">
                <p className="font-bold">Cappadocia: Hot-Air Balloon Tour</p>
                <ul>
                    <li>Pickup available</li>
                    <li>Duration</li>
                    <li>Other thing</li>
                </ul>
                <div className="flex justify-start items-end gap-1">
                    <p className="font-bold text-xl">From $130</p>
                    <p className="">per person</p>
                </div>
            </div>
        </div>
    </a></Link>
}


function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: 100,
        height: 100,
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}