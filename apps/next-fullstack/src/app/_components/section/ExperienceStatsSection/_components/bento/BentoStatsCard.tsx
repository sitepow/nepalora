interface CategoryStat {
  label: string;
  value: number;
}

const statsData: CategoryStat[] = [
  { label: "Adventure", value: 45 },
  { label: "Culture", value: 35 },
  { label: "Wellness", value: 20 },
];

export function BentoStatsCard() {
  const getDotCount = (value: number) => Math.round(value / 5);

  return (
    <div className="flex min-h-64 flex-col gap-6 rounded-3xl bg-[#eeeeee] p-5 text-lg font-medium">
      <div className="flex flex-col justify-start">
        <span className="text-2xl font-bold">50+</span>
        <span>Unique Experiences</span>
      </div>

      <span className="text-base opacity-30">
        Carefully selected journeys designed to reveal the real beauty, culture and spirit of Nepal.
      </span>

      <div className="mt-4 flex flex-col gap-3 text-xs font-medium">
        {statsData.map((stat) => {
          const dotCount = getDotCount(stat.value);

          return (
            <div key={stat.label} className="grid grid-cols-[80px_1fr_24px] items-center gap-2">
              <span className="text-gray-900">{stat.label}</span>

              <div className="flex items-center gap-1.5 overflow-hidden">
                {Array.from({ length: dotCount }).map((_, index) => (
                  <span key={index} className="h-2 w-2 shrink-0 rounded-full bg-[#007aff]" />
                ))}
              </div>

              <span className="text-right text-gray-800">{stat.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
