"use client";

export default function EnquirePage() {
  return (
    <div className="min-h-screen bg-brand-ivory pt-32 pb-24 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto space-y-12">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-light text-brand-green tracking-tight">
            Plan Your Journey
          </h1>
          <p className="text-brand-green/80 text-lg leading-relaxed max-w-xl mx-auto">
            Please share a few details about your intended stay. Our team will review your requirements and respond personally.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-sm border border-brand-green/10">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">First Name</label>
                <input type="text" className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">Last Name</label>
                <input type="text" className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors" placeholder="Enter your last name" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">Email Address</label>
                <input type="email" className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">Phone Number</label>
                <input type="tel" className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">Intent of Stay</label>
              <select className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors text-brand-green">
                <option value="short">Short Stay (1-3 Nights)</option>
                <option value="wellness">Wellness Stay (7-14 Nights)</option>
                <option value="monthly">Monthly Stay (30+ Nights)</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-medium uppercase tracking-widest text-brand-green">Additional Notes or Requirements</label>
              <textarea 
                className="w-full border-b border-brand-green/30 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors resize-none h-24" 
                placeholder="Tell us about any specific wellness goals, dietary needs, or questions you have."
              ></textarea>
            </div>

            <div className="pt-4 text-center">
              <button 
                type="submit"
                className="bg-brand-green text-brand-ivory px-10 py-4 uppercase tracking-wider text-xs font-medium hover:bg-brand-gold hover:text-brand-ivory transition-colors duration-300 w-full md:w-auto"
              >
                Submit Enquiry
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
