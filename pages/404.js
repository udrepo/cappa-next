import Link from 'next/link';
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function Custom404(){
    let {t} = useTranslation();
    return <main className="flex flex-col items-center my-16">
        <h1 className="text-dark-blue text-3xl">{t('common:msg404')}</h1>
        <Link href="/"><a className="text-main-text text-xl ">{t('common:return404')}</a></Link>
        <div className="w-fit">
            <Image src="/assets/404.jpg" width={500} height={250}/>
        </div>
    </main>
}