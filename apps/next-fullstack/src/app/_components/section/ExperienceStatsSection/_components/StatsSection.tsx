interface StatItemProps {
  value: string;
  label: string;
}

const statsData: StatItemProps[] = [
  { value: "8,000+ m", label: "Highest Himalayan Peaks" },
  { value: "100+", label: "Unique Experiences" },
  { value: "50+", label: "Curated Journeys" },
  { value: "4 Seasons", label: "Worth Exploring" },
];

export function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">{value}</span>
      <span className="mt-2 text-sm font-medium text-gray-400 md:text-base">{label}</span>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="w-full py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {statsData.map((stat, index) => (
          <StatItem key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
