import Slider from '@madzadev/image-slider'
import "@madzadev/image-slider/dist/index.css";
import useWindowSize from "../hooks/useWindowSize";

export default function Views({showDotControls}){
    const size = useWindowSize();

    const setHeight = () => {
        if (size.width < 1000) return 250;
        return 350;
    }
    const images = [
        {url: '/assets/banner.jpg'},
        {url: '/assets/404.jpg'},
        {url: '/assets/social.jpg'},
        {url: '/assets/banner.jpg'},
        {url: '/assets/404.jpg'},
        {url: '/assets/social.jpg'},
        {url: '/assets/banner.jpg'},
        {url: '/assets/404.jpg'},
        {url: '/assets/social.jpg'},
        {url: '/assets/banner.jpg'},
        {url: '/assets/404.jpg'},
        {url: '/assets/social.jpg'},
        {url: '/assets/banner.jpg'},
        {url: '/assets/404.jpg'},
        {url: '/assets/social.jpg'},
        {url: '/assets/banner.jpg'},
        {url: '/assets/404.jpg'},
        {url: '/assets/social.jpg'},
        {url: '/assets/banner.jpg'},
        {url: '/assets/404.jpg'},
        {url: '/assets/social.jpg'},
        {url: '/assets/banner.jpg'},
        {url: '/assets/404.jpg'},
        {url: '/assets/social.jpg'},
        {url: '/assets/banner.jpg'},
        {url: '/assets/404.jpg'},
        {url: '/assets/social.jpg'}
    ]
  return <Slider showDotControls={showDotControls?true:false} autoPlayInterval={7000} imageList={images} width="100%" height={setHeight()}/>
}