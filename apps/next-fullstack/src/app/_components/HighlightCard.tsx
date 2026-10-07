import { Button } from "@/components/ui/button";
import { HighlightCardData } from "./section/ProcessStepsSection/ProcessStepsSection";

export function HighlightCard({ title, description, imageSrc }: HighlightCardData) {
  return (
    <div className="flex flex-col">
      <div
        className="z-10 h-72 rounded-4xl bg-cover bg-center bg-no-repeat p-2.5"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <Button className="w-full bg-transparent py-6 text-lg backdrop-blur-md hover:bg-transparent">
          {title}
        </Button>
      </div>
      <div className="felx -mt-4 items-center rounded-b-4xl bg-[#eeeeee] px-5 pt-10 pb-6 text-lg opacity-50">
        {description}
      </div>
    </div>
  );
}
