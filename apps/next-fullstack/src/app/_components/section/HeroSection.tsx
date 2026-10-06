import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-32 pb-16">
      <Image
        src="/images/cristian-grecu-6yBAQeeNROU.jpg"
        alt="Hero Section Background"
        fill
        priority
        className="-z-10 object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-black/35" />

      <div className="relative z-10 flex flex-col items-center text-center text-white">
        <h1 className="mb-64 text-7xl leading-[0.9] tracking-[-0.055em]">
          <span>Nepal </span>
          <span className="font-serif font-bold italic opacity-80">Without Limits.</span>
          <br />
          <span>Discover beyond the ordinary.</span>
        </h1>

        <p className="mb-10 max-w-155 text-[17px] leading-[1.35] font-normal tracking-[-0.03em] text-white/90">
          Journeys through Nepal shaped around you — your pace, your path, your sense
          <br />
          of wonder. Every experience feels personal, effortless, and truly yours.
        </p>

        <button className="rounded-full bg-white px-20 py-5 text-sm font-medium text-black transition-all hover:bg-white/90">
          Build my trip now
        </button>
      </div>
    </section>
  );
}
