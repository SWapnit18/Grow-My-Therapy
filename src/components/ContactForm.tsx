"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    format: "",
    focus: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      format: "",
      focus: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-6">
      <div className="bg-[#FAF8F5] border border-[#E5DFD7] rounded-3xl p-8 sm:p-12 shadow-sm text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#3B5249] bg-[#E8EFEA] px-3.5 py-1.5 rounded-full">
          Get Started
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#272A2B] mt-4 mb-4">
          You don&apos;t have to work through it alone.
        </h2>
        <p className="text-base text-[#5D6467] leading-relaxed max-w-xl mx-auto mb-10 font-light">
          Taking the first step toward therapy is a meaningful decision. Whether you are interested in in-person sessions in Santa Monica or telehealth across California, reach out to schedule a consultation.
        </p>

        {/* Form element */}
        <form onSubmit={handleSubmit} className="bg-white border border-[#E5DFD7] p-6 sm:p-8 rounded-2xl shadow-sm text-left max-w-2xl mx-auto space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-[#272A2B] mb-1.5">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#E5DFD7] rounded-lg focus:outline-none focus:border-[#3B5249] focus:bg-white focus:ring-2 focus:ring-[#3B5249]/10 transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#272A2B] mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#E5DFD7] rounded-lg focus:outline-none focus:border-[#3B5249] focus:bg-white focus:ring-2 focus:ring-[#3B5249]/10 transition-all"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="format" className="block text-xs font-semibold text-[#272A2B] mb-1.5">
                Preferred Format
              </label>
              <select
                id="format"
                required
                value={formData.format}
                onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#E5DFD7] rounded-lg focus:outline-none focus:border-[#3B5249] focus:bg-white focus:ring-2 focus:ring-[#3B5249]/10 transition-all"
              >
                <option value="" disabled>Select format</option>
                <option value="in-person">In-Person (Santa Monica)</option>
                <option value="telehealth">Secure Telehealth (California)</option>
              </select>
            </div>
            <div>
              <label htmlFor="focus" className="block text-xs font-semibold text-[#272A2B] mb-1.5">
                Primary Concern
              </label>
              <select
                id="focus"
                required
                value={formData.focus}
                onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#E5DFD7] rounded-lg focus:outline-none focus:border-[#3B5249] focus:bg-white focus:ring-2 focus:ring-[#3B5249]/10 transition-all"
              >
                <option value="" disabled>Select area</option>
                <option value="anxiety">Anxiety / Overthinking</option>
                <option value="panic">Panic</option>
                <option value="trauma">Trauma / Difficult Experiences</option>
                <option value="burnout">Burnout / Professional Stress</option>
                <option value="perfectionism">Perfectionism</option>
                <option value="other">Adult Therapy Support</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#272A2B] mb-1.5">
              Message (Optional)
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="Briefly share what you would like support with..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#E5DFD7] rounded-lg focus:outline-none focus:border-[#3B5249] focus:bg-white focus:ring-2 focus:ring-[#3B5249]/10 transition-all"
            ></textarea>
          </div>

          <div className="pt-2 text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#3B5249] text-white font-semibold text-sm rounded-full shadow hover:bg-[#2D3F38] hover:shadow-md transition-all active:scale-95"
            >
              Schedule a Consultation
            </button>
            <p className="text-[11px] text-[#838C90] mt-3">
              Confidential communication. Dr. Maya Reynolds works exclusively with adults located in California.
            </p>
          </div>

          {formSubmitted && (
            <div className="p-4 bg-[#E8EFEA] border border-[#3B5249]/20 rounded-xl text-[#3B5249] text-sm space-y-1 animate-in fade-in duration-300">
              <p className="font-bold">Thank you for reaching out.</p>
              <p className="text-xs text-[#272A2B]">
                Your inquiry has been received. Dr. Maya Reynolds will be in touch to coordinate next steps for scheduling your consultation.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
