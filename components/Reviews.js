import {AiFillStar} from "react-icons/ai";
import ReviewBlock from "./ReviewBlock";
import useTranslation from "next-translate/useTranslation";

export default function Reviews({reviews, reviewsAmount}) {
    let {t} = useTranslation();
    return <section className="grid lg:grid-cols-4 gap-10 my-4 ">
        <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-2xl font-bold">{t('tour:reviewText')}</p>
            <div className="flex text-yellow-400">
                <AiFillStar size={48}/>
                <AiFillStar size={48}/>
                <AiFillStar size={48}/>
                <AiFillStar size={48}/>
                <AiFillStar size={48}/>
            </div>
            <p className="text-3xl font-bold">4.9/5</p>
            <p>{t('tour:basedOn', {reviewsAmount})}</p>
        </div>
        <div className="lg:col-span-3 divide-y-2 divide-dark-blue">
            {reviews.map(val => {
                return <ReviewBlock key={val.id} name={val.name} text={val.reviewText} date={val.date}/>
            })}
        </div>
    </section>
}