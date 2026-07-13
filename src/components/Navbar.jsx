import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navLinks } from "../data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isHomePage) {
        const sections = navLinks.map((link) => link.href.replace("#", ""));
        const scrollPosition = window.scrollY + 100;
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element)
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/" + href);
    }
  };

  const handleStoreClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate("/store");
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-[#CFEFF5]/50"
          : "bg-white/60 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-[#D4AF37] to-[#1E4D8F] rounded-full flex items-center justify-center shadow-md">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-lg text-[#1E4D8F] group-hover:text-[#D4AF37] transition-colors leading-tight">
                Eric Chifunda
              </span>
              <span className="text-[10px] font-montserrat font-semibold text-[#63B8E6] uppercase tracking-[0.2em] leading-tight">
                Author & Artist
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-montserrat font-semibold transition-all duration-300 ${
                  activeSection === link.href.replace("#", "") && isHomePage
                    ? "text-[#053880]"
                    : "text-[#1E4D8F]/80 hover:text-[#1E4D8F]"
                }`}
              >
                {link.name}
                {activeSection === link.href.replace("#", "") && isHomePage && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_6px_rgba(212,175,55,0.5)]"></span>
                )}
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-[#D4AF37]/30">
              <a
                href="/store"
                onClick={handleStoreClick}
                className="relative px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#C4A030] text-white font-montserrat font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105 inline-block group/store shadow-md"
              >
                <span className="relative z-10">Get the Books</span>
              </a>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-[#1E4D8F] hover:text-[#D4AF37] transition-colors"
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "top-2 rotate-45" : "top-0"
                }`}
              ></span>
              <span
                className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "top-2 -rotate-45" : "top-4"
                }`}
              ></span>
            </div>
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/98 border border-[#CFEFF5]/50 rounded-2xl shadow-xl mt-3 p-5 backdrop-blur-xl">
            <div className="space-y-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-3 font-montserrat font-semibold transition-all duration-300 rounded-xl ${
                    activeSection === link.href.replace("#", "") && isHomePage
                      ? "text-[#1E4D8F] bg-[#CFEFF5]/30 border border-[#63B8E6]/30"
                      : "text-[#1E4D8F]/60 hover:text-[#1E4D8F] hover:bg-[#F8F4EA]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        activeSection === link.href.replace("#", "") &&
                        isHomePage
                          ? "bg-[#D4AF37] shadow-[0_0_6px_rgba(212,175,55,0.5)]"
                          : "bg-[#CFEFF5]"
                      }`}
                    ></span>
                    {link.name}
                  </div>
                </a>
              ))}
            </div>
            <a
              href="/store"
              onClick={handleStoreClick}
              className="block px-4 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C4A030] text-white text-center font-montserrat font-semibold rounded-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 shadow-md"
            >
              Get the Books
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
