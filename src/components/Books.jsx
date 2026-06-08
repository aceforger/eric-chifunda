import { useState } from 'react'
import { book } from '../data'

export default function Books() {
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <section id="books" className="py-24 bg-[#F8F4EA] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#CFEFF5]/15 rounded-full blur-[120px] animate-ripple"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 mb-4 text-sm font-montserrat font-semibold rounded-full">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-soft-glow"></span>
            Books
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair text-[#1E4D8F] mb-4">INSPIRATIONAL WORKS</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#63B8E6] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 max-w-7xl mx-auto">
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
                  <img src={bookItem.coverImage} alt={bookItem.title} className="w-44 h-56 object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('min-h-[220px]')
                      e.target.parentElement.innerHTML = `<div class="text-center p-6"><div class="text-4xl font-playfair font-bold text-[#1E4D8F] mb-2">${bookItem.title.split(' ').map(w => w[0]).join('')}</div></div>`
                    }}
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  {bookItem.subtitle && <p className="text-[#63B8E6] text-[10px] font-montserrat font-semibold uppercase tracking-wider mb-1.5">{bookItem.subtitle}</p>}
                  <h3 className="text-sm font-playfair font-bold text-[#1E4D8F] mb-1.5 group-hover:text-[#D4AF37] transition-colors line-clamp-2">{bookItem.title}</h3>
                  <p className="text-[#1E4D8F]/40 text-xs font-inter leading-relaxed mb-3 flex-1 line-clamp-3">{bookItem.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {bookItem.themes.slice(0, 2).map((theme, i) => (
                      <span key={i} className="px-2 py-0.5 bg-[#F8F4EA] text-[#63B8E6] text-[9px] font-montserrat font-medium rounded-full border border-[#63B8E6]/10">{theme}</span>
                    ))}
                  </div>
                  <button onClick={() => setSelectedBook(bookItem)} className="w-full py-2 border-2 border-[#D4AF37]/30 text-[#D4AF37] font-montserrat font-semibold text-xs rounded-full hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/50 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E4D8F]/20 backdrop-blur-sm" onClick={() => setSelectedBook(null)}>
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#CFEFF5]/30 rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-[#CFEFF5]/30 sticky top-0 bg-white z-10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#D4AF37] text-white text-xs font-montserrat font-semibold rounded-full">{selectedBook.statusText}</span>
                {selectedBook.award && <span className="text-[#D4AF37] text-xs font-montserrat font-semibold">{selectedBook.award}</span>}
              </div>
              <button onClick={() => setSelectedBook(null)} className="text-[#1E4D8F]/40 hover:text-[#D4AF37] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2">
                  <div className="bg-[#F8F4EA] rounded-xl p-4 flex items-center justify-center">
                    <img src={selectedBook.coverImage} alt={selectedBook.title} className="w-full h-auto max-h-[400px] object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.classList.add('min-h-[300px]')
                        e.target.parentElement.innerHTML = `<div class="text-center p-8"><div class="text-5xl font-playfair font-bold text-[#1E4D8F]">${selectedBook.title.split(' ').map(w => w[0]).join('')}</div></div>`
                      }}
                    />
                  </div>
                </div>
                <div className="md:col-span-3 flex flex-col justify-center space-y-6">
                  <div>
                    {selectedBook.subtitle && <p className="text-[#63B8E6] text-xs font-montserrat font-semibold uppercase tracking-wider mb-2">{selectedBook.subtitle}</p>}
                    <h2 className="text-3xl md:text-4xl font-playfair text-[#1E4D8F] mb-2">{selectedBook.title}</h2>
                    <div className="w-16 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#63B8E6] mt-4 rounded-full"></div>
                  </div>
                  <p className="text-[#1E4D8F]/70 leading-relaxed font-inter">{selectedBook.description}</p>
                  {selectedBook.description2 && <p className="text-[#1E4D8F]/50 leading-relaxed font-inter text-sm">{selectedBook.description2}</p>}
                  <div className="flex flex-wrap gap-2">
                    {selectedBook.themes.map((theme, i) => (
                      <span key={i} className="px-3 py-1 bg-[#F8F4EA] text-[#63B8E6] text-xs font-montserrat font-medium rounded-full border border-[#63B8E6]/10">{theme}</span>
                    ))}
                  </div>
                  {selectedBook.status === 'published' && selectedBook.purchaseLinks && (
                    <div className="pt-4 space-y-3">
                      <p className="text-[#D4AF37] text-sm font-montserrat font-semibold">Available at:</p>
                      <div className="flex flex-wrap gap-3">
                        {selectedBook.purchaseLinks.map((link, i) => (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-white font-montserrat font-semibold text-sm rounded-full hover:bg-[#C4A030] transition-all hover-lift">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/>
                            </svg>
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}