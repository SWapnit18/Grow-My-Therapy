import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative py-12 sm:py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        
        {/* Text column */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#E8EFEA] text-[#3B5249] text-[11px] sm:text-xs font-semibold tracking-wide uppercase shadow-xs">
            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Santa Monica, California &amp; Secure Telehealth</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] text-[#272A2B] tracking-tight">
            Santa Monica Therapist for Anxiety, Trauma &amp; Burnout
          </h1>

          <p className="text-base sm:text-lg text-[#5D6467] leading-relaxed max-w-2xl font-light">
            You don’t have to navigate anxiety, trauma, or burnout alone. Dr. Maya Reynolds offers warm, collaborative therapy for adults in Santa Monica, using practical and evidence-based approaches to help you feel more grounded, understood, and supported.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <a
              href="#contact"
              className="text-center px-6 sm:px-7 py-3 sm:py-3.5 bg-[#3B5249] text-white font-semibold text-sm rounded-full shadow-md hover:bg-[#2D3F38] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Schedule a Consultation
            </a>
            <a
              href="#services"
              className="text-center px-6 sm:px-7 py-3 sm:py-3.5 bg-transparent border border-[#E5DFD7] text-[#272A2B] font-semibold text-sm rounded-full hover:border-[#3B5249] hover:text-[#3B5249] hover:-translate-y-0.5 transition-all duration-200"
            >
              Learn About Therapy
            </a>
          </div>

          <div className="pt-6 border-t border-[#E5DFD7] flex flex-wrap gap-4 sm:gap-6 text-xs text-[#5D6467] font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3B5249]"></span>
              <span>In-Person in Santa Monica</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3B5249]"></span>
              <span>California Telehealth</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3B5249]"></span>
              <span>Adults Only</span>
            </div>
          </div>
        </div>

        {/* Visual column */}
        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
          <div className="relative rounded-2xl overflow-hidden border border-[#E5DFD7] shadow-lg sm:shadow-xl bg-[#EAE5DE] group">
            <Image
              src="/images/dr-maya-reynolds.jpg"
              alt="Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist in Santa Monica"
              width={600}
              height={450}
              priority
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Reassurance card: relative on mobile, floating on tablet/desktop */}
          <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-xl shadow-md sm:shadow-lg border border-[#E5DFD7] flex items-center gap-3 sm:gap-3.5 sm:max-w-xs sm:animate-float">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E8EFEA] text-[#3B5249] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-[#272A2B]">Safe &amp; Grounded Space</p>
              <p className="text-[11px] text-[#5D6467]">Evidence-based therapy for high-achieving adults</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
