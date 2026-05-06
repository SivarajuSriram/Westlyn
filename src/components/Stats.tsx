export default function StatsSection() {
  const stats = [
    { value: "11 Acres", label: "Lifestyle Project" },
    { value: "119", label: "Villas" },
    { value: "4", label: "BHK" },
    { value: "3262 - 4035", label: "Sq. Yds." },
  ];

  return (
    <section className="w-full bg-white py-20 border-b border-zinc-100 font-sans">
      <div className="w-full px-8 md:px-24 flex flex-wrap justify-between items-center gap-12">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col min-w-[150px]">
            <h3 className="text-5xl md:text-6xl font-normal text-zinc-900 tracking-tight leading-none mb-3">
              {stat.value}
            </h3>
            <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-bold">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}