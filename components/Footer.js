import {useRouter} from "next/router";
import Link from 'next/link'

export default function Footer() {
    const router = useRouter();
    return <footer className="w-full h-full bg-dark-blue">
        Footer

        <ul>
            {router.locales.map((locale) =>
                <li key={locale}>
                    <Link href={router.asPath} locale={locale}><a>{locale}</a></Link>
                </li>
            )}
        </ul>
    </footer>
}