import { Waves, Dumbbell, Flower2, Utensils, Users, Zap, Dog, Baby } from 'lucide-react';

export default function Amenities() {
  const list = [
    { name: "Swimming Pool", icon: <Waves size={32} /> },
    { name: "Ground Level Gym", icon: <Dumbbell size={32} /> },
    { name: "Yoga & Meditation Garden", icon: <Flower2 size={32} /> },
    { name: "Café & Barbeque Counter", icon: <Utensils size={32} /> },
    { name: "Amphitheatre", icon: <Users size={32} /> },
    { name: "EV Charging Points", icon: <Zap size={32} /> },
    { name: "Pet Park", icon: <Dog size={32} /> },
    { name: "Children's Play Area", icon: <Baby size={32} /> },
  ];

  return (
    <section id="amenities" className="w-full bg-white py-32 font-sans">
      <div className="w-full px-8 md:px-24">
        <h2 className="text-6xl md:text-7xl font-normal text-zinc-900 mb-20">Amenities</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((item, i) => (
            <div key={i} className="bg-zinc-50/50 p-10 rounded-3xl border border-zinc-100 flex flex-col items-start gap-8 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="text-zinc-400 group-hover:text-[#b4945c]">
                {item.icon}
              </div>
              <span className="text-xl font-light text-zinc-800 leading-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="border border-zinc-900 px-12 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-900 hover:text-white transition-all">
            View All Amenities
          </button>
        </div>
      </div>
    </section>
  );
}