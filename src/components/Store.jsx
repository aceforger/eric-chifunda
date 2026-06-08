import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { book } from '../data'

export default function Store() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="min-h-screen py-10 bg-[#F8F4EA] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#CFEFF5]/15 rounded-full blur-[100px] animate-ripple"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-[80px] animate-gentle-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <button onClick={() => navigate('/')} className="inline-flex items-center gap-2 text-[#1E4D8F]/50 hover:text-[#D4AF37] transition-colors mb-8 group">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm font-montserrat font-semibold">Back to Home</span>
        </button>

        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 mb-4 text-sm font-montserrat font-semibold rounded-full">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-soft-glow"></span>
            Book Store
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair text-[#1E4D8F] mb-4">GET YOUR COPIES</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#63B8E6] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {book.map((bookItem, i) => (
            <div key={bookItem.id} className="group animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="bg-white border border-[#CFEFF5]/30 hover:border-[#D4AF37]/30 transition-all shadow-md hover:shadow-lg hover-lift h-full flex flex-col rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-br from-[#F8F4EA] to-[#CFEFF5]/20 overflow-hidden relative flex items-center justify-center p-4">
                  <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#D4AF37] text-white text-xs font-montserrat font-semibold rounded-full">
                    {bookItem.statusText}
                  </div>
                  {bookItem.award && (
                    <div className="absolute top-3 right-3 z-10">
                      <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  )}
                  <img src={bookItem.coverImage} alt={bookItem.title} className="w-40 h-52 object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('min-h-[220px]')
                      e.target.parentElement.innerHTML = `<div class="text-center p-6"><div class="text-4xl font-playfair font-bold text-[#1E4D8F]">${bookItem.title.split(' ').map(w => w[0]).join('')}</div></div>`
                    }}
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  {bookItem.subtitle && <p className="text-[#63B8E6] text-[10px] font-montserrat font-semibold uppercase tracking-wider mb-1.5">{bookItem.subtitle}</p>}
                  <h3 className="text-sm font-playfair font-bold text-[#1E4D8F] mb-1.5 group-hover:text-[#D4AF37] transition-colors line-clamp-2">{bookItem.title}</h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {bookItem.themes.slice(0, 2).map((theme, i) => (
                      <span key={i} className="px-2 py-0.5 bg-[#F8F4EA] text-[#63B8E6] text-[9px] font-montserrat font-medium rounded-full border border-[#63B8E6]/10">{theme}</span>
                    ))}
                  </div>
                  <div className="mt-auto space-y-2">
                    {bookItem.status === 'published' && bookItem.purchaseLinks ? (
                      bookItem.purchaseLinks.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 bg-[#D4AF37] text-white font-montserrat font-semibold text-xs rounded-full hover:bg-[#C4A030] transition-all text-center hover-lift">
                          Buy on {link.name}
                        </a>
                      ))
                    ) : (
                      <div className="block w-full py-2.5 bg-[#F8F4EA] border border-[#D4AF37]/20 text-[#D4AF37]/60 font-montserrat font-semibold text-xs rounded-full text-center">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}