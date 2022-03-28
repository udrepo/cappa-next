import useWindowSize from "../hooks/useWindowSize";

export default function AdVideo({title, videoId, desc}){
    const size = useWindowSize();

    const setHeight = () => {
        if (size.width < 770) return 207;
        if (size.width < 1000) return 277;
        return 400;
    }

return <section className="md:flex justify-between lg:my-10">
    <div className="md:w-2/6 md:pr-4">
    <h1 className="text-xl md:text-3xl font-bold content-center text-center lg:text-left">{title}</h1>
        <p className="pb-5 font-bold">{desc}</p>
    </div>
  <section className="md:w-4/6">
      <iframe width="100%" height={setHeight()} src={`https://www.youtube.com/embed/${videoId}?controls=0`}
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
  </section>
</section>
}