import { servicesData } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 max-w-2xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#3B5249] bg-[#E8EFEA] px-3.5 py-1.5 rounded-full">
          Areas of Focus
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#272A2B]">
          Dedicated Therapy Services in Santa Monica
        </h2>
        <p className="text-sm sm:text-base text-[#5D6467] leading-relaxed">
          Specialized, evidence-based care tailored for adults navigating acute stress, traumatic memory, and professional exhaustion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white border border-[#E5DFD7] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-1.5 hover:border-[#3B5249]/40 transition-all duration-300 group"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#E8EFEA] text-[#3B5249] flex items-center justify-center group-hover:bg-[#3B5249] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
                    <path d="M8 12a4 4 0 0 1 8 0" strokeWidth="2"></path>
                  </svg>
                </div>
                <span className="font-serif text-xl sm:text-2xl text-[#838C90]/40 font-bold group-hover:text-[#3B5249]/60 transition-colors">
                  {service.number}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-[#272A2B] font-semibold pt-1 sm:pt-2">
                {service.title}
              </h3>

              <p className="text-sm text-[#5D6467] leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 bg-[#FAF8F5] border border-[#E5DFD7] rounded-full text-[#5D6467] group-hover:border-[#3B5249]/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 sm:pt-8 mt-auto">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3B5249] hover:text-[#2D3F38] group-hover:translate-x-1 transition-all duration-200"
              >
                Inquire about this service <span className="transition-transform duration-200">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
