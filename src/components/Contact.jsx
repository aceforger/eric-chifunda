import { contactInfo, authorInfo } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#F8F4EA] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#CFEFF5]/15 rounded-full blur-[80px] animate-ripple"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#D4AF37]/5 rounded-full blur-[70px] animate-gentle-float"></div>
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 mb-8 text-sm font-montserrat font-semibold rounded-full">
          <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-soft-glow"></span>
          Contact
        </div>
        <h2 className="text-4xl md:text-5xl font-playfair text-[#1E4D8F] mb-6 animate-fade-up">GET IN TOUCH</h2>
        <p className="text-[#1E4D8F]/50 text-lg mb-12 max-w-md mx-auto font-inter animate-fade-up-delayed">
          Reach out to {authorInfo.firstName} directly for inquiries, speaking engagements, or book orders
        </p>
        <div className="bg-white p-10 shadow-2xl border border-[#CFEFF5]/30 rounded-2xl animate-fade-up-delayed-2 hover-lift">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37] to-[#63B8E6] rounded-full flex items-center justify-center animate-soft-glow">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div className="space-y-4">
            <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-3 px-10 py-5 bg-[#D4AF37] text-white font-montserrat font-semibold hover:bg-[#C4A030] transition-all text-lg w-full justify-center rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone}`} className="inline-flex items-center gap-3 px-10 py-5 border-2 border-[#D4AF37]/30 text-[#1E4D8F] font-montserrat font-semibold hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-lg w-full justify-center rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {contactInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}