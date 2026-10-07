import { ProcessStep } from "../ProcessStepsSection";

interface StepItemProps {
  item: ProcessStep;
  isLast?: boolean;
}

export function ProcessStepItem({ item, isLast }: StepItemProps) {
  return (
    <div className="relative flex flex-1 flex-col gap-3">
      <div className="flex items-center gap-4">
        <span className="text-6xl font-medium">{item.step}</span>

        {!isLast && (
          <div className="ml-20 flex flex-1 items-center">
            <div className="size-2 rounded-full bg-blue-600" />
            <div className="h-px w-1/2 bg-linear-to-r from-blue-600/40 to-transparent" />
          </div>
        )}
      </div>

      <h3 className="max-w-32 text-2xl">{item.title}</h3>
      <p className="opacity-50">{item.description}</p>
    </div>
  );
}
