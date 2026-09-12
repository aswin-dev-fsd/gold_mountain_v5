"use client";

import { useState } from "react";
import Link from "next/link";

export default function EnquirePage() {
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
    <div className="min-h-screen bg-brand-ivory pt-32 pb-24 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto space-y-16">
        
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-green tracking-tight">
            Your stay begins with a conversation.
          </h1>
          <p className="text-brand-green/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-serif">
            Tell the team when you would like to visit, what you are looking for and how the stay could be meaningful.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-sm border border-brand-green/10">
          {formStatus === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
              <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-light text-brand-green">Enquiry Received</h3>
              <p className="text-brand-green/80 font-serif max-w-sm">
                Thank you for your interest. We will review your requirements and respond personally to discuss availability and pricing.
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
                  <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">Preferred Arrival Date</label>
                  <input type="text" placeholder="DD/MM/YYYY" className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">Preferred Departure Date</label>
                  <input type="text" placeholder="DD/MM/YYYY" className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">Interested In</label>
                <select className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors text-brand-green">
                  <option value="stay">Stay</option>
                  <option value="wellness">Wellness</option>
                  <option value="ayurveda">Ayurveda</option>
                  <option value="monthly">Monthly Stay</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">Message</label>
                <textarea 
                  className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors resize-none h-24" 
                  placeholder="Tell us about what you are looking for..."
                ></textarea>
              </div>

              <div className="pt-4 text-center">
                <button 
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="bg-brand-green text-brand-ivory px-10 py-4 uppercase tracking-wider text-xs font-medium hover:bg-brand-gold hover:text-brand-ivory transition-colors duration-300 w-full md:w-auto disabled:opacity-50"
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Enquiry"}
                </button>
              </div>

            </form>
          )}
        </div>

        {/* Direct Contact Alternatives */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-brand-green/10">
          <Link 
            href="https://wa.me/message/TEMP" 
            target="_blank"
            className="text-sm font-medium uppercase tracking-widest text-brand-green hover:text-brand-gold transition-colors"
          >
            Chat with us
          </Link>
          <Link 
            href="mailto:hello@goldmountain.com" 
            className="text-sm font-medium uppercase tracking-widest text-brand-green hover:text-brand-gold transition-colors"
          >
            Send us an email
          </Link>
          <span className="text-sm font-medium uppercase tracking-widest text-brand-green/50 cursor-not-allowed" title="Pending verification">
            Call us
          </span>
        </div>

      </div>
    </div>
  );
}
