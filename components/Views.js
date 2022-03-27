import Slider from '@madzadev/image-slider'
import "@madzadev/image-slider/dist/index.css";

export default function Views(){
    const images = [
        {url: '/assets/banner.jpg'},
        {url: '/assets/404.jpg'},
        {url: '/assets/social.jpg'}
    ]
  return <Slider imageList={images} width="100%" height={250}/>
}