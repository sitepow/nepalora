import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden pt-32 pb-16">
      <Image
        src="/images/cristian-grecu-6yBAQeeNROU.jpg"
        alt="Hero Section Background"
        fill
        priority
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/35" />
      <div className="relative z-10 max-w-4xl px-4 text-center text-white">
        <h1 className="mb-32 text-4xl md:text-6xl">
          <span>Nepal </span>
          <span className="font-serif font-normal italic">Without Limits.</span>
          <br />
          <span>Discover beyond the ordinary.</span>
        </h1>
        <p className="mx-auto mt-16 max-w-2xl text-xs text-white/90 md:text-lg">
          Journeys through Nepal shaped around you — your pace, your path, your sense of wonder.
          Every experience feels personal, effortless, and truly yours.
        </p>
        <button className="mt-8 rounded-full bg-white px-7 py-2.5 text-xs font-medium text-black transition-all hover:bg-white/90 md:text-sm">
          Build my trip now
        </button>
      </div>
    </section>
  );
}
