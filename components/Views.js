import Slider from '@madzadev/image-slider'
import "@madzadev/image-slider/dist/index.css";
import useWindowSize from "../hooks/useWindowSize";

export default function Views({showDotControls, images}){
    const size = useWindowSize();

    const setHeight = () => {
        if (size.width < 1000) return 250;
        return 350;
    }
  return <Slider showDotControls={!!showDotControls} autoPlayInterval={7000} imageList={images} width="100%" height={setHeight()}/>
}