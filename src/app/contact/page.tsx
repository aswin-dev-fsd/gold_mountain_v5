"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-brand-ivory pt-32 pb-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto space-y-6 mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-green tracking-tight">
            Let's plan your stay.
          </h1>
          <p className="text-brand-green/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-serif">
            Questions about your stay, wellness programmes, or availability can be handled directly by our team.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Direct Contact & Location */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-2xl font-light text-brand-green">Direct Contact</h2>
              <div className="space-y-6">
                
                {/* Primary: WhatsApp */}
                <div>
                  <span className="block text-xs uppercase tracking-widest text-brand-green/60 mb-2">Primary (WhatsApp)</span>
                  <Link href="https://wa.me/message/TEMP" target="_blank" className="text-lg text-brand-green hover:text-brand-gold transition-colors font-serif block">
                    +91 (Pending Verification)
                  </Link>
                </div>
                
                {/* Secondary: Email */}
                <div>
                  <span className="block text-xs uppercase tracking-widest text-brand-green/60 mb-2">Secondary (Email)</span>
                  <Link href="mailto:hello@goldmountain.com" className="text-lg text-brand-green hover:text-brand-gold transition-colors font-serif block">
                    hello@goldmountain.com
                  </Link>
                </div>

                {/* Phone (Only when verified) */}
                <div>
                  <span className="block text-xs uppercase tracking-widest text-brand-green/60 mb-2">Phone</span>
                  <span className="text-lg text-brand-green/60 font-serif block italic">
                    Number pending client verification
                  </span>
                </div>

              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-light text-brand-green">Location</h2>
              <div className="space-y-4">
                <p className="text-brand-green font-serif leading-relaxed">
                  Gold Mountain<br />
                  No.97, Kottangal Road, Adiannamalai,<br />
                  Tiruvannamalai, Tamil Nadu 606604, India
                </p>
                <div className="pt-2">
                  <Link href="#" className="inline-block border-b border-brand-green text-sm text-brand-green hover:text-brand-gold hover:border-brand-gold transition-colors pb-1">
                    Get Directions
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white p-8 md:p-12 shadow-sm border border-brand-green/10">
            {formStatus === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-light text-brand-green">Enquiry Received</h3>
                <p className="text-brand-green/80 font-serif max-w-sm">
                  Thank you for reaching out. Your enquiry has been submitted successfully and our team will contact you shortly to plan your stay.
                </p>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="mt-8 border-b border-brand-green text-sm text-brand-green hover:text-brand-gold hover:border-brand-gold transition-colors pb-1"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <h3 className="text-xl font-light text-brand-green mb-6">Send an Enquiry</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">Name *</label>
                    <input required type="text" className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">Email *</label>
                    <input required type="email" className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">WhatsApp / Phone</label>
                    <input type="tel" className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">Number of Guests</label>
                    <input type="number" min="1" className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">Preferred Dates</label>
                    <input type="text" placeholder="e.g. Mid October" className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">Enquiry Type</label>
                    <select className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors text-brand-green">
                      <option value="stay">Stay</option>
                      <option value="wellness">Wellness</option>
                      <option value="ayurveda">Ayurveda</option>
                      <option value="monthly">Monthly Stay</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">Message</label>
                  <textarea 
                    className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors resize-none h-24" 
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="bg-brand-green text-brand-ivory px-10 py-4 uppercase tracking-wider text-xs font-medium hover:bg-brand-gold hover:text-brand-ivory transition-colors duration-300 w-full disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Enquiry"}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
