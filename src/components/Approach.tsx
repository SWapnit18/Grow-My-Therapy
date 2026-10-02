import { approachesData } from "@/data/content";

export default function Approach() {
  return (
    <section id="approach" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#3B5249] bg-[#E8EFEA] px-3.5 py-1.5 rounded-full">
          Clinical Approach
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#272A2B]">
          Evidence-Based Therapeutic Modalities
        </h2>
        <p className="text-sm text-[#5D6467] leading-relaxed">
          An integrative blend of approaches tailored to help you feel grounded, understood, and actively involved.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {approachesData.map((item) => (
          <div
            key={item.code}
            className="bg-white border border-[#E5DFD7] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-[#3B5249] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E8EFEA] text-[#3B5249] flex items-center justify-center font-bold text-xs">
                {item.code}
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#272A2B] leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-[#5D6467] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
