import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import ContactForm from "@/components/ContactForm";
import { concernsData } from "@/data/content";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#272A2B]">
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trust / Introduction Section */}
        <section id="intro" className="py-16 sm:py-20 bg-white border-y border-[#E5DFD7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#3B5249] bg-[#E8EFEA] px-3.5 py-1.5 rounded-full">
              A Grounded Space
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#272A2B]">
              A grounded space for meaningful change
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 text-left text-[#5D6467] leading-relaxed">
              <p className="text-sm sm:text-base">
                Dr. Maya Reynolds works with adults who may appear capable, successful, and high-functioning from the outside, but are quietly experiencing internal anxiety, overthinking, stress, burnout, or the persistent effects of past experiences.
              </p>
              <p className="text-sm sm:text-base">
                In therapy, you do not have to hold everything together alone. Her collaborative approach creates a calm, supportive setting where practical coping strategies meet deeper self-insight, helping you build sustainable resilience and self-trust.
              </p>
            </div>

            <div className="bg-[#FAF8F5] border border-[#E5DFD7] p-6 sm:p-8 md:p-10 rounded-2xl relative shadow-sm">
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#272A2B] leading-snug">
                &ldquo;Therapy clients should feel respected, understood, and actively involved in the process. The goal is not only symptom relief but also insight, resilience, and a stronger relationship with themselves.&rdquo;
              </p>
              <div className="mt-4 text-xs font-semibold tracking-wider uppercase text-[#3B5249]">
                — Dr. Maya Reynolds, PsyD
              </div>
            </div>
          </div>
        </section>

        {/* 4. Services Section (3 Core Cards) */}
        <Services />

        {/* 5. About Section */}
        <section id="about" className="py-20 sm:py-24 bg-[#F3EFEA] border-y border-[#E5DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="w-full max-w-[440px] rounded-3xl overflow-hidden border border-[#E5DFD7] shadow-xl bg-white group">
                <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-[#EAE5DE]">
                  <Image
                    src="/images/dr-maya-reynolds.jpg"
                    alt="Dr. Maya Reynolds, PsyD, Santa Monica Clinical Psychologist"
                    fill
                    sizes="(max-width: 1024px) 100vw, 440px"
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-5 bg-white border-t border-[#E5DFD7]">
                  <p className="text-sm sm:text-base font-bold text-[#272A2B]">Licensed Clinical Psychologist</p>
                  <p className="text-xs text-[#5D6467] mt-0.5">Santa Monica, California • California Telehealth</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#3B5249] bg-[#E8EFEA] px-3.5 py-1.5 rounded-full">
                Meet Your Psychologist
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#272A2B] tracking-tight">
                About Dr. Maya Reynolds, PsyD
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#5D6467] leading-relaxed">
                <p>
                  Dr. Maya Reynolds is a Licensed Clinical Psychologist based in Santa Monica, California, providing dedicated psychotherapy for adults experiencing anxiety, panic, trauma, and burnout.
                </p>
                <p>
                  Her therapeutic style is warm, collaborative, and grounded. Combining practical coping tools with deeper exploratory work, Dr. Maya helps thoughtful individuals move beyond survival mode and into meaningful insight and emotional resilience.
                </p>
                <p>
                  Integrating Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented techniques, every session is thoughtfully aligned with your pace and personal goals.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
                <div className="p-4 sm:p-5 bg-white rounded-2xl border border-[#E5DFD7] shadow-xs">
                  <span className="text-[11px] text-[#838C90] uppercase font-bold tracking-wider block">Credentials</span>
                  <span className="text-sm font-semibold text-[#272A2B] mt-1 block">Licensed Clinical Psychologist, PsyD</span>
                </div>
                <div className="p-4 sm:p-5 bg-white rounded-2xl border border-[#E5DFD7] shadow-xs">
                  <span className="text-[11px] text-[#838C90] uppercase font-bold tracking-wider block">Location</span>
                  <span className="text-sm font-semibold text-[#272A2B] mt-1 block">Santa Monica Office &amp; Telehealth</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-block text-center w-full sm:w-auto px-8 py-3.5 bg-[#3B5249] text-white font-semibold text-sm rounded-full shadow hover:bg-[#2D3F38] hover:shadow-md transition-all active:scale-95"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Therapy Approach Section */}
        <Approach />

        {/* 7. Who I Work With */}
        <section id="who-i-work-with" className="py-16 sm:py-20 md:py-24 bg-[#F3EFEA] border-y border-[#E5DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#3B5249] bg-[#E8EFEA] px-3.5 py-1.5 rounded-full">
                Client Focus
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#272A2B]">
                Who I Work With
              </h2>
              <p className="text-sm sm:text-base text-[#5D6467] leading-relaxed">
                Dr. Maya commonly supports thoughtful, high-achieving, and self-aware adults—including entrepreneurs, creatives, and professionals—who may look functional from the outside but feel overwhelmed or exhausted internally.
              </p>
              <p className="text-xs sm:text-sm text-[#5D6467] italic">
                Therapy provides a grounded space if you are experiencing any of the following:
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {concernsData.map((item) => (
                <div key={item.id} className="bg-white border border-[#E5DFD7] p-3 sm:p-3.5 rounded-xl flex items-center gap-3 shadow-xs hover:border-[#3B5249]/30 transition-colors">
                  <span className="text-[#3B5249] font-bold shrink-0">✓</span>
                  <span className="text-xs sm:text-sm font-medium text-[#272A2B]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. In-Person + Telehealth Section (Showcasing Office Imagery) */}
        <section id="formats" className="py-16 sm:py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3B5249] bg-[#E8EFEA] px-3.5 py-1.5 rounded-full">
              Therapy Formats
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#272A2B]">
              Therapy in Santa Monica and California
            </h2>
            <p className="text-sm sm:text-base text-[#5D6467]">
              Dr. Maya offers in-person therapy from her Santa Monica office and secure telehealth sessions for clients located in California.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Santa Monica Office 1 */}
            <div className="bg-white border border-[#E5DFD7] rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] relative bg-[#EAE5DE] overflow-hidden">
                <Image
                  src="/images/office-1.jpg"
                  alt="Santa Monica quiet, private, comfortable therapy office with natural light and exposed brick"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold text-[#3B5249] shadow-xs">
                  In-Person • Consultation Room
                </span>
              </div>
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#272A2B] mb-2">
                    Quiet, Private &amp; Grounding Atmosphere
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D6467] leading-relaxed">
                    Designed with warm natural light, comfortable seating, and an uncluttered setting so clients feel at ease from the moment they arrive.
                  </p>
                </div>
                <ul className="text-xs text-[#5D6467] space-y-2 border-t border-[#E5DFD7] pt-4">
                  <li className="flex items-center gap-2">✓ Quiet and private consultation setting</li>
                  <li className="flex items-center gap-2">✓ Grounding atmosphere with natural sunlight</li>
                  <li className="flex items-center gap-2">✓ Located at 123th Street 45 W, Santa Monica</li>
                </ul>
              </div>
            </div>

            {/* Santa Monica Office 2 */}
            <div className="bg-white border border-[#E5DFD7] rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] relative bg-[#EAE5DE] overflow-hidden">
                <Image
                  src="/images/office-2.jpg"
                  alt="Modern calm therapy office space with natural light and comfortable armchairs"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold text-[#3B5249] shadow-xs">
                  In-Person &amp; Virtual Telehealth
                </span>
              </div>
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#272A2B] mb-2">
                    Comfortable &amp; Uncluttered Space
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D6467] leading-relaxed">
                    In addition to in-person sessions in Santa Monica, Dr. Maya provides secure, confidential telehealth for adults located throughout California.
                  </p>
                </div>
                <ul className="text-xs text-[#5D6467] space-y-2 border-t border-[#E5DFD7] pt-4">
                  <li className="flex items-center gap-2">✓ Uncluttered, thoughtful environment</li>
                  <li className="flex items-center gap-2">✓ Secure California-wide telehealth available</li>
                  <li className="flex items-center gap-2">✓ Collaborative, client-centered care</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Office / Location Section */}
        <section id="location" className="py-16 sm:py-20 md:py-24 bg-[#F3EFEA] border-y border-[#E5DFD7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-[#E5DFD7] p-6 sm:p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center shadow-sm">
              <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#3B5249] bg-[#E8EFEA] px-3.5 py-1.5 rounded-full">
                  Santa Monica Practice
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#272A2B]">
                  Santa Monica, California
                </h2>
                <p className="text-sm sm:text-base text-[#5D6467] leading-relaxed">
                  The office offers a quiet, private, comfortable, uncluttered, and grounding setting with natural light, conveniently situated in Santa Monica.
                </p>

                <div className="p-4 sm:p-5 bg-[#FAF8F5] rounded-xl border border-[#E5DFD7] flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#E8EFEA] text-[#3B5249] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#838C90] tracking-wider block">Practice Address</span>
                    <p className="text-sm sm:text-base font-semibold text-[#272A2B]">123th Street 45 W</p>
                    <p className="text-xs sm:text-sm text-[#5D6467]">Santa Monica, CA 90401</p>
                    <p className="text-xs text-[#838C90] italic mt-1">In-person therapy by scheduled appointment</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#3B5249] font-medium">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  <span>Also providing secure telehealth across California</span>
                </div>
              </div>

              {/* Stylized Location Map Graphic */}
              <div className="lg:col-span-6 h-64 sm:h-80 rounded-xl overflow-hidden border border-[#E5DFD7] relative bg-[#E6DFD5]">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3B5249_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-[#D5E1DF] border-r-2 border-dashed border-[#B2C7C4] flex items-center justify-center">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#6C8E89] uppercase -rotate-90">Pacific Ocean</span>
                </div>

                <div className="absolute bottom-4 sm:bottom-6 left-[34%] bg-white/90 px-2 sm:px-2.5 py-1 rounded text-[9px] sm:text-[10px] font-semibold text-[#5D6467] shadow-xs">
                  Santa Monica Pier
                </div>

                <div className="absolute top-1/2 left-[62%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#3B5249]/20 animate-map-pulse absolute"></div>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#3B5249] text-white flex items-center justify-center shadow-md z-10">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="mt-1.5 sm:mt-2 bg-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md shadow-md border border-[#E5DFD7] text-center whitespace-nowrap z-20">
                    <p className="text-[11px] sm:text-xs font-bold text-[#272A2B]">Dr. Maya Reynolds, PsyD</p>
                    <p className="text-[9px] sm:text-[10px] text-[#5D6467]">123th Street 45 W, Santa Monica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Final CTA & Intake Section */}
        <ContactForm />
      </main>

      {/* 11. Footer */}
      <footer className="bg-[#242928] text-[#D3DAD8] pt-12 sm:pt-16 pb-8 sm:pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
            <div className="space-y-2.5 sm:space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white">Dr. Maya Reynolds, PsyD</h3>
              <p className="text-xs font-medium text-[#9EAEA8]">Licensed Clinical Psychologist</p>
              <p className="text-xs text-[#A4B2AD] leading-relaxed">
                Warm, collaborative, and evidence-based therapy for adults navigating anxiety, trauma, and burnout.
              </p>
              <div className="pt-2 text-xs text-[#8C9C96]">
                <p>123th Street 45 W</p>
                <p>Santa Monica, California 90401</p>
              </div>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs text-[#A4B2AD]">
                <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Dr. Maya</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#approach" className="hover:text-white transition-colors">Therapeutic Approach</a></li>
                <li><a href="#who-i-work-with" className="hover:text-white transition-colors">Who I Work With</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Focus Areas</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs text-[#A4B2AD]">
                <li><a href="#services" className="hover:text-white transition-colors">Anxiety Therapy</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Trauma Therapy</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Burnout Therapy</a></li>
                <li><a href="#formats" className="hover:text-white transition-colors">In-Person (Santa Monica)</a></li>
                <li><a href="#formats" className="hover:text-white transition-colors">Telehealth (California)</a></li>
              </ul>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Practice Details</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs text-[#A4B2AD]">
                <li><strong className="text-white">Clientele:</strong> Adults</li>
                <li><strong className="text-white">Format:</strong> In-Person &amp; Telehealth</li>
                <li><strong className="text-white">Location:</strong> Santa Monica, CA</li>
                <li><strong className="text-white">Modality:</strong> CBT, EMDR, Mindfulness, Body-Oriented</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 text-center space-y-2">
            <p className="text-xs text-[#8C9C96]">
              © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. Licensed Clinical Psychologist. All rights reserved.
            </p>
            <p className="text-[10px] sm:text-[11px] text-[#6D7B75] max-w-2xl mx-auto">
              The information provided on this website is for educational and informational purposes only and does not constitute medical advice or establish a doctor-patient relationship.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
