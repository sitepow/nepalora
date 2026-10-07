import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { SplinePointer } from "lucide-react";

export function BentoFeatureCard() {
  return (
    <div className="flex min-h-80 flex-col justify-between gap-6 rounded-3xl bg-[#333333] p-5 text-lg font-medium text-white">
      <div className="flex items-center justify-between">
        <SplinePointer />
        <div className="flex items-center gap-2.5">
          <span>all-inclusive</span>
          <Switch defaultChecked />
        </div>
      </div>

      <span className="text-xl">
        Journeys made personal{" "}
        <span className="opacity-75">
          travel at your own pace, discover hidden places and experience Nepal beyond the usual
          routes —
        </span>{" "}
        authentic, personal and unforgettable.
      </span>

      <Button className="py-7">Tailor-Made</Button>
    </div>
  );
}
