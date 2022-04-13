import Link from 'next/link'

export default function BookNowButton({bookNow}){

    return <section className="fixed lg:hidden inset-x-0 bottom-0 p-1.5 bg-dark-blue text-white flex justify-center">
        <Link href="#bookForm"><button className="h-12 mx-4 w-full bg-hover-blue rounded-3xl"
        >
            {bookNow}
        </button>
        </Link>
    </section>
}