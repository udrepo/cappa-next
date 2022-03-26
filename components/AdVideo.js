import useWindowSize from "../hooks/useWindowSize";

export default function AdVideo(){
    const size = useWindowSize();

    const setHeight = () => {
        if (size.width < 770) return 207;
        if (size.width < 1000) return 277;
        return 397;
    }

return <section className="md:flex justify-between">
    <h1 className="my-4 text-3xl font-bold">Experience video</h1>
  <section className="md:w-3/5">
      <iframe width="100%" height={setHeight()} src="https://www.youtube.com/embed/NLmYGHYtGko?controls=0"
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
  </section>
</section>
}