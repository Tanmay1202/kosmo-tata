export default function HomeYoutubeSection() {
  return (
    <section className="w-full bg-black">
      <div className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/4PO7yUMQ9v8?controls=1&autoplay=0&loop=1&playlist=4PO7yUMQ9v8&rel=0&enablejsapi=1"
          title="Tata Motors Official Video"
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
}
