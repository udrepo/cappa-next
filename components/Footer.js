import {useRouter} from "next/router";
import Link from 'next/link'

export default function Footer() {
    const router = useRouter();
    return <footer className="w-full h-full bg-dark-blue text-white p-4 py-7">
        Footer

        <div className="flex justify-start gap-4">
            <p>Language</p>
            <ul className="flex gap-4">
                {router.locales.map((locale) =>
                    <li key={locale}>
                        <Link href={router.asPath} locale={locale}><a>{locale.toUpperCase()}</a></Link>
                    </li>
                )}
            </ul>
        </div>
    </footer>
}