import { MainLayout } from "./_components/layout/MainLayout";
import { ExperienceStatsSection } from "./_components/section/ExperienceStatsSection/ExperienceStatsSection";
import { ExploreSection } from "./_components/section/ExploreSection";
import { HeroSection } from "./_components/section/HeroSection";
import { PopularToursSection } from "./_components/section/PopularToursSection";
import { ProcessStepsSection } from "./_components/section/ProcessStepsSection";
import { TestimonialsSection } from "./_components/section/TestimonialsSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <PopularToursSection />
      <ExperienceStatsSection />
      <ProcessStepsSection />
      <TestimonialsSection />
      <ExploreSection />
    </MainLayout>
  );
}
