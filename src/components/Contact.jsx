import { contactInfo, authorInfo } from "../data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#F8F4EA] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#CFEFF5]/15 rounded-full blur-[80px] animate-ripple"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#D4AF37]/5 rounded-full blur-[70px] animate-gentle-float"></div>
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 mb-8 text-sm font-montserrat font-semibold rounded-full">
          <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-soft-glow"></span>
          Contact
        </div>
        <h2 className="text-4xl md:text-5xl font-playfair text-[#1E4D8F] mb-6 animate-fade-up">
          GET IN TOUCH
        </h2>
        <p className="text-[#1E4D8F]/50 text-lg mb-12 max-w-md mx-auto font-inter animate-fade-up-delayed">
          Reach out to {authorInfo.firstName} directly for inquiries, speaking
          engagements, or book orders
        </p>
        <div className="bg-white p-10 shadow-2xl border border-[#CFEFF5]/30 rounded-2xl animate-fade-up-delayed-2 hover-lift">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37] to-[#63B8E6] rounded-full flex items-center justify-center animate-soft-glow">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="space-y-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#D4AF37] text-white font-montserrat font-semibold hover:bg-[#C4A030] transition-all text-lg w-full justify-center rounded-full"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {contactInfo.email}
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center gap-3 px-10 py-5 border-2 border-[#D4AF37]/30 text-[#1E4D8F] font-montserrat font-semibold hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-lg w-full justify-center rounded-full"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {contactInfo.phone}
            </a>
          </div>
          {/* Social Links */}
          <div className="flex gap-4 justify-center mt-6">
            <a
              href={contactInfo.imdb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E4D8F] text-white font-montserrat font-semibold text-sm rounded-full hover:bg-[#153A6B] transition-all hover-lift"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
              </svg>
              IMDB
            </a>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C4A030] text-white font-montserrat font-semibold text-sm rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all hover-lift"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @EricChifunda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
