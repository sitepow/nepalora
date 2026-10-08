import { ArrowRight } from "lucide-react";
import { TypographyTitle } from "../TypographyTitle";

const EXPLORE_LINKS = [
  { label: "Destinations", href: "#" },
  { label: "Popular Tours", href: "#" },
  { label: "Experiences", href: "#" },
  { label: "Tailor-Made", href: "#" },
  { label: "About Nepal", href: "#" },
];

const JOURNEY_LINKS = [
  { label: "Plan Your Trip", href: "#" },
  { label: "Travel Guide", href: "#" },
  { label: "Best Time to Visit", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact Us", href: "#" },
];

const FOLLOW_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "YouTube", href: "#" },
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

          <div className="flex w-full items-center justify-between border-b border-white/30 pb-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent text-lg text-white placeholder-gray-400 outline-none"
            />
            <button
              type="submit"
              className="group flex items-center gap-3 text-sm whitespace-nowrap text-gray-300 transition-colors hover:text-white"
            >
              <span>join the journey</span>
              <div className="flex size-9 items-center justify-center rounded-full border border-white/30 transition-all group-hover:scale-105 group-hover:border-white">
                <ArrowRight className="size-4" />
              </div>
            </button>
          </div>
        </div>

        <div className="flex gap-24 pt-2">
          <div className="flex flex-col gap-5">
            <h4 className="text-xl font-medium text-white">Explore</h4>
            <ul className="flex flex-col gap-3 text-base text-gray-400">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-xl font-medium text-white">Your journey</h4>
            <ul className="flex flex-col gap-3 text-base text-gray-400">
              {JOURNEY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-xl font-medium text-white">Follow us</h4>
            <ul className="flex flex-col gap-3 text-base text-gray-400">
              {FOLLOW_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 text-[220px] font-bold tracking-tight whitespace-nowrap text-white/3 select-none">
        Nepalora
      </div>
    </footer>
  );
}
