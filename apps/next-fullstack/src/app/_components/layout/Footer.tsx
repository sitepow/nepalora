import { ArrowRight } from "lucide-react";
import { TypographyTitle } from "../TypographyTitle";

const FOOTER_SECTIONS = [
  {
    title: "Explore",
    links: [
      { label: "Destinations", href: "#" },
      { label: "Popular Tours", href: "#" },
      { label: "Experiences", href: "#" },
      { label: "Tailor-Made", href: "#" },
      { label: "About Nepal", href: "#" },
    ],
  },
  {
    title: "Your journey",
    links: [
      { label: "Plan Your Trip", href: "#" },
      { label: "Travel Guide", href: "#" },
      { label: "Best Time to Visit", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Follow us",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Pinterest", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative h-130 w-full overflow-hidden bg-[#020612] px-32 pt-20 text-white">
      <div className="relative z-10 mx-auto flex w-full justify-between">
        <div className="flex w-120 flex-col gap-14">
          <TypographyTitle className="text-start text-6xl">
            Let Nepal *Be*
            <br />
            *Your Next* Great Story.
          </TypographyTitle>

          <div className="flex w-full items-center justify-between border-b-2 border-white/30 pb-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent text-lg text-white outline-none placeholder:text-2xl placeholder:font-medium placeholder:text-white"
            />
            <button
              type="submit"
              className="group flex items-center gap-3 text-sm whitespace-nowrap text-gray-300 transition-colors hover:text-white"
            >
              <span className="text-lg opacity-80">join the journey</span>
              <div className="flex size-9 items-center justify-center rounded-full border border-white/30 transition-all group-hover:scale-105 group-hover:border-white">
                <ArrowRight className="size-4" />
              </div>
            </button>
          </div>
        </div>

        <div className="flex gap-48 pt-2">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="flex flex-col gap-5">
              <h4 className="text-2xl font-medium text-white">{section.title}</h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-lg opacity-80">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 text-[220px] font-bold tracking-tight whitespace-nowrap text-white/3 select-none">
        Nepalora
      </div>
    </footer>
  );
}
