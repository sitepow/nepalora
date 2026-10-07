import { Button } from "@/components/ui/button";

export function BentoImageCard() {
  return (
    <div
      className="flex min-h-64 flex-col gap-6 rounded-3xl bg-cover bg-center bg-no-repeat p-5"
      style={{ backgroundImage: `url("/images/sylvain-mauroux-m6wbWMF6p9s-unsplash.jpg")` }}
    >
      <Button className="bg-transparent py-7 backdrop-blur-md hover:bg-transparent">
        Made for You
      </Button>
    </div>
  );
}
