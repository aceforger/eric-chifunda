import { useNavigate } from 'react-router-dom'
import { authorInfo, navLinks } from '../data'

export default function Footer() {
  const navigate = useNavigate()

  const handleScroll = (e, href) => {
    e.preventDefault()
    navigate('/' + href)
  }

  return (
    <footer className="bg-[#1E4D8F] text-white">
      {/* Launch Portal Banner */}
      <div className="bg-[#153A6B] border-b border-[#63B8E6]/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-playfair font-bold text-[#D4AF37] mb-1">Ready to Publish?</h3>
              <p className="text-[#63B8E6]/60 text-sm font-inter">Access the go-live portal for your book</p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#D4AF37] text-[#1E4D8F] text-xl font-montserrat font-bold py-5 px-12 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[#D4AF37]/30 animate-soft-glow"
              >
                Launch & Go-Live Portal
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="font-playfair text-lg text-[#D4AF37]">{authorInfo.name}</span>
            </div>
            <p className="text-[#63B8E6]/70 text-sm font-inter leading-relaxed">
              Award-winning author of inspirational and spiritual books
            </p>
          </div>
          <div>
            <h4 className="text-sm font-montserrat font-semibold mb-4 text-[#D4AF37] uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-[#63B8E6]/50 hover:text-[#D4AF37] transition-colors text-sm font-inter">
                    {link.name}
                  </a>
                </li>
              ))}
              {/* <li>
                <a href="/store" onClick={(e) => { e.preventDefault(); navigate('/store') }} className="text-[#63B8E6]/50 hover:text-[#D4AF37] transition-colors text-sm font-inter">
                  Store
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-montserrat font-semibold mb-4 text-[#D4AF37] uppercase tracking-wider">Contact</h4>
            <a href={`mailto:${authorInfo.email}`} className="text-[#63B8E6]/50 hover:text-[#D4AF37] transition-colors text-sm font-inter block">
              {authorInfo.email}
            </a>
            <a href={`tel:${authorInfo.phone}`} className="text-[#63B8E6]/50 hover:text-[#D4AF37] transition-colors text-sm font-inter block mt-2">
              {authorInfo.phone}
            </a>
          </div>
        </div>
        <div className="border-t border-[#63B8E6]/20 mt-12 pt-8 text-center">
          <p className="text-[#63B8E6]/40 text-sm font-inter">
            &copy; {new Date().getFullYear()} {authorInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}