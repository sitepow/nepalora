import { SectionBadge } from "../../SectionBadge";
import { BentoFeatureCard } from "./_components/bento/BentoFeatureCard";
import { BentoImageCard } from "./_components/bento/BentoImageCard";
import { BentoStatsCard } from "./_components/bento/BentoStatsCard";
import { StatsSection } from "./_components/StatsSection";

export function ExperienceStatsSection() {
  return (
    <div className="flex flex-col gap-10 px-10 py-20">
      <div className="flex justify-between">
        <SectionBadge>ABOUT NEPAL</SectionBadge>
        <p className="max-w-2xl text-2xl font-medium">
          Nepal is more than a destination — it's a journey. From Himalayan peaks to ancient cities,
          every experience brings you closer to its nature, culture and people.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <BentoFeatureCard />
        <BentoImageCard />
        <BentoStatsCard />
      </div>
      <StatsSection />
    </div>
  );
}
