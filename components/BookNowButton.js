export default function BookNowButton({bookNow}){
    return <section className="fixed lg:hidden inset-x-0 bottom-0 p-1.5 bg-dark-blue text-white flex justify-center">
        <button className="h-12 mx-4 w-full bg-hover-blue rounded-3xl">
            <a href="https://wa.me/77052743248/">{bookNow}</a>
        </button>
    </section>
}