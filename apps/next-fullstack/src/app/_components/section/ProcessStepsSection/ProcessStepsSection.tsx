import { HighlightCard } from "../../HighlightCard";
import { TypographyTitle } from "../../TypographyTitle";
import { ProcessStepItem } from "./_components/ProcessStepItem";

export const PROCESS_STEPS_DATA = [
  {
    step: "01",
    title: "Share Your Vision",
    description:
      "Tell us your dates, interests, travel style and what you'd love to experience in Nepal.",
  },
  {
    step: "02",
    title: "Shape Your Journey",
    description:
      "We turn your ideas into a personalized route built around your pace and preferences.",
  },
  {
    step: "03",
    title: "Refine Every Detail",
    description:
      "Together, we perfect the stays, experiences and little details that make the journey yours.",
  },
  {
    step: "04",
    title: "Experience Nepal",
    description:
      "Everything is ready. Arrive, explore and experience Nepal without worrying about the details.",
  },
] as const;

export const HIGHLIGHT_CARDS_DATA = [
  {
    title: "Wild Landscapes",
    description:
      "Explore dramatic Himalayan peaks, remote valleys and untouched trails shaped by nature.",
    imageSrc: "/images/photo-1529733905113-027ed85d7e33.avif",
  },
  {
    title: "Local Connections",
    description:
      "Meet local communities, share authentic moments and experience Nepal through the people who call it home.",
    imageSrc: "/images/cristian-grecu-6yBAQeeNROU.jpg",
  },
  {
    title: "Timeless Culture",
    description:
      "Discover ancient temples, sacred traditions and centuries-old stories that remain part of everyday life.",
    imageSrc: "/images/travelmax-guide-S_hFKpgzGD4-unsplash.jpg",
  },
] as const;

export type HighlightCardData = (typeof HIGHLIGHT_CARDS_DATA)[number];
export type ProcessStep = (typeof PROCESS_STEPS_DATA)[number];

export function ProcessStepsSection() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      <TypographyTitle badge="EXPERIENCES">Nepal, *Beyond the Ordinary*</TypographyTitle>
      <div className="flex h-72 items-center justify-center bg-[#333333] pb-10 text-center">
        <span className="max-w-3xl text-xl text-white">
          From the soaring peaks of the Himalayas to ancient temples,{" "}
          <span className="opacity-75">
            hidden villages and timeless traditions, discover a side of Nepal shaped by
            extraordinary landscapes,
          </span>{" "}
          authentic encounters and moments that stay with you long after the journey ends
        </span>
      </div>
      <div className="-mt-20 grid grid-cols-3 gap-6 px-10">
        {HIGHLIGHT_CARDS_DATA.map((card) => (
          <HighlightCard key={card.title} {...card} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-10 px-20 md:grid-cols-4">
        {PROCESS_STEPS_DATA.map((item, index) => (
          <ProcessStepItem
            key={item.step}
            item={item}
            isLast={index === PROCESS_STEPS_DATA.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
