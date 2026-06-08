import { authorInfo } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#CFEFF5]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 mb-4 text-sm font-montserrat font-semibold rounded-full">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-soft-glow"></span>
            The Author
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair text-[#1E4D8F] mb-4">{authorInfo.name}</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#63B8E6] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Left Column - Profile Image & Roles */}
          <div className="md:col-span-2 space-y-6">
            {/* Profile Image */}
            <div className="bg-gradient-to-br from-[#F8F4EA] to-[#CFEFF5]/30 rounded-2xl overflow-hidden border border-[#CFEFF5]/30 shadow-lg animate-fade-up">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/profile2.png"
                  alt={authorInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                    e.target.parentElement.innerHTML = `
                      <div class="text-center p-8">
                        <div class="text-4xl font-playfair font-bold text-[#1E4D8F] mb-2">EC</div>
                        <p class="text-sm font-montserrat font-medium text-[#63B8E6]">${authorInfo.name}</p>
                      </div>
                    `
                  }}
                />
              </div>
            </div>

            {/* Roles */}
            <div className="bg-[#F8F4EA]/50 backdrop-blur-sm rounded-2xl border border-[#CFEFF5]/30 p-6 animate-fade-up-delayed">
              <h3 className="text-sm font-montserrat font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">Roles</h3>
              <div className="flex flex-wrap gap-2">
                {authorInfo.roles.map((role, i) => (
                  <span key={i} className="px-4 py-2 bg-white text-[#1E4D8F] text-sm font-montserrat font-medium border border-[#63B8E6]/20 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] hover-lift transition-all rounded-full shadow-sm">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3 animate-fade-up-delayed-2">
              {authorInfo.achievements.map((achievement, i) => (
                <div key={i} className="bg-gradient-to-r from-[#D4AF37]/5 to-[#CFEFF5]/10 p-4 rounded-xl border border-[#D4AF37]/10 hover-lift flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="text-[#1E4D8F] text-sm font-montserrat font-semibold leading-snug">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className="md:col-span-3 space-y-6">
            {/* Bio Card 1 */}
            <div className="bg-[#F8F4EA]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#CFEFF5]/30 animate-fade-up hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-sm font-montserrat font-semibold text-[#D4AF37] uppercase tracking-wider">About</h3>
              </div>
              <p className="text-[#1E4D8F]/70 leading-relaxed font-inter">{authorInfo.bio}</p>
            </div>

            {/* Bio Card 2 */}
            <div className="bg-[#F8F4EA]/50 backdrop-blur-sm p-8 rounded-2xl border-l-3 border-[#D4AF37] animate-fade-up-delayed hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#63B8E6]/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#63B8E6]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                  </svg>
                </div>
                <h3 className="text-sm font-montserrat font-semibold text-[#63B8E6] uppercase tracking-wider">Background</h3>
              </div>
              <p className="text-[#1E4D8F]/60 leading-relaxed font-inter">{authorInfo.bio2}</p>
            </div>

            {/* Bio Card 3 - Quote Style */}
            <div className="bg-gradient-to-br from-[#D4AF37]/5 to-[#CFEFF5]/10 p-8 rounded-2xl border border-[#D4AF37]/10 animate-fade-up-delayed-2 hover-lift relative">
              <div className="absolute top-4 left-4 text-4xl text-[#D4AF37]/20 font-playfair">"</div>
              <div className="absolute bottom-4 right-4 text-4xl text-[#D4AF37]/20 font-playfair">"</div>
              <p className="text-[#1E4D8F]/50 leading-relaxed font-inter italic relative z-10 pl-4">{authorInfo.bio3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}