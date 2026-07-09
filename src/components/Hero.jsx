import { authorInfo } from "../data";

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-[#87CEEB] via-[#B0DDF5] to-[#CFEFF5] relative overflow-hidden"
    >
      {/* Sun in top left corner */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px]">
        {/* Sun outer glow */}
        <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full blur-[60px] animate-soft-glow"></div>
        <div
          className="absolute inset-8 bg-[#D4AF37]/15 rounded-full blur-[40px] animate-soft-glow"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Sun core */}
        <div className="absolute inset-16 bg-gradient-to-br from-[#FFD700] via-[#FDB813] to-[#D4AF37] rounded-full blur-[2px] shadow-[0_0_80px_rgba(255,215,0,0.4),0_0_160px_rgba(255,215,0,0.2),0_0_240px_rgba(255,193,7,0.1)]"></div>

        {/* Sun rays */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute top-1/2 left-1/2"
            style={{
              width: "2px",
              height: "180px",
              background:
                "linear-gradient(to bottom, rgba(255,215,0,0.4), transparent)",
              transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
              transformOrigin: "bottom center",
              animation: `sunRay ${3 + i * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Clouds */}
      <div className="absolute top-20 right-10 opacity-30">
        <div className="relative">
          <div className="w-32 h-12 bg-white rounded-full blur-sm"></div>
          <div className="w-24 h-10 bg-white rounded-full blur-sm absolute -top-4 left-4"></div>
          <div className="w-20 h-8 bg-white rounded-full blur-sm absolute -top-2 left-12"></div>
        </div>
      </div>
      <div className="absolute top-40 right-40 opacity-20 animate-gentle-float">
        <div className="relative">
          <div className="w-40 h-14 bg-white rounded-full blur-sm"></div>
          <div className="w-28 h-12 bg-white rounded-full blur-sm absolute -top-5 left-6"></div>
          <div className="w-24 h-10 bg-white rounded-full blur-sm absolute -top-3 left-16"></div>
        </div>
      </div>
      <div
        className="absolute top-60 right-20 opacity-15 animate-gentle-float"
        style={{ animationDelay: "3s" }}
      >
        <div className="relative">
          <div className="w-28 h-10 bg-white rounded-full blur-sm"></div>
          <div className="w-20 h-8 bg-white rounded-full blur-sm absolute -top-3 left-4"></div>
        </div>
      </div>

      {/* Birds */}
      <div
        className="absolute top-32 left-1/3 opacity-20 animate-gentle-float"
        style={{ animationDelay: "1s" }}
      >
        <svg
          className="w-8 h-4"
          viewBox="0 0 40 20"
          fill="none"
          stroke="#1E4D8F"
          strokeWidth="1.5"
        >
          <path d="M5 15 Q15 5 25 15" strokeLinecap="round" />
          <path d="M15 15 Q25 5 35 15" strokeLinecap="round" />
        </svg>
      </div>
      <div
        className="absolute top-44 left-1/2 opacity-15 animate-gentle-float"
        style={{ animationDelay: "2.5s" }}
      >
        <svg
          className="w-6 h-3"
          viewBox="0 0 30 15"
          fill="none"
          stroke="#1E4D8F"
          strokeWidth="1.5"
        >
          <path d="M3 11 Q12 3 21 11" strokeLinecap="round" />
          <path d="M11 11 Q20 3 29 11" strokeLinecap="round" />
        </svg>
      </div>

      {/* Light particles floating */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: Math.random() > 0.5 ? "#FFD700" : "#FFFFFF",
            opacity: 0,
            animation: `floatUp ${5 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 6}s`,
            boxShadow:
              Math.random() > 0.5
                ? "0 0 6px rgba(255,215,0,0.4)"
                : "0 0 4px rgba(255,255,255,0.4)",
          }}
        ></div>
      ))}

      {/* Subtle sparkles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${10 + Math.random() * 80}%`,
            animation: `sparkle ${1.5 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        >
          <div className="w-1 h-1 bg-[#FFD700] rounded-full shadow-[0_0_4px_#FFD700,0_0_8px_#FFD700]"></div>
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/40 text-[#1E4D8F] px-4 py-2 mb-8 text-sm font-montserrat font-semibold rounded-full bg-white/40 backdrop-blur-sm animate-fade-up">
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-soft-glow"></span>
              Award-Winning Author
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair text-[#1E4D8F] mb-6 leading-tight animate-fade-up drop-shadow-sm">
              {authorInfo.name}
            </h1>
            <div className="w-24 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#63B8E6] mb-8 mx-auto md:mx-0 rounded-full"></div>
            <p className="text-xl text-[#1E4D8F]/80 mb-6 font-montserrat font-medium animate-fade-up-delayed">
              Inspiring Souls through{" "}
              <span className="text-[#D4AF37] font-bold">spiritual wisdom</span>{" "}
              and{" "}
              <span className="text-[#1E4D8F] font-bold">uplifting words</span>
            </p>
            <p className="text-[#0F2D54] leading-relaxed max-w-lg mx-auto md:mx-0 font-playfair italic text-base border-l-2 border-[#D4AF37]/50 pl-6 py-2 bg-white/30 backdrop-blur-sm animate-fade-up-delayed">
              "What we read and internalize can shape our attitude. The more
              uplifting the words, the more one may experience improvement."
            </p>
            <div className="flex flex-wrap gap-3 my-8 justify-center md:justify-start animate-fade-up-delayed-2">
              {authorInfo.roles.map((role, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/50 backdrop-blur-sm text-[#1E4D8F] text-sm font-montserrat font-medium border border-white/50 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] hover-lift transition-all rounded-full shadow-sm"
                >
                  {role}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up-delayed-2">
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C4A030] text-white font-montserrat font-semibold hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all text-center hover-lift rounded-full shadow-lg"
              >
                About the Author
              </a>
              <a
                href="#books"
                onClick={(e) => handleScroll(e, "#books")}
                className="px-8 py-4 border-2 border-[#D4AF37]/50 text-[#1E4D8F] font-montserrat font-semibold hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all text-center hover-lift rounded-full bg-white/40 backdrop-blur-sm"
              >
                View Books
              </a>
            </div>
          </div>

          <div className="relative mx-auto max-w-sm animate-fade-up">
            <div className="relative">
              {/* Sun glow around profile */}
              <div className="absolute -inset-6 bg-[#FFD700]/5 rounded-full blur-2xl animate-soft-glow"></div>

              <div className="relative bg-white/70 backdrop-blur-sm shadow-2xl border border-white/50 overflow-hidden hover-lift rounded-2xl">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src="/images/profile.png"
                    alt={authorInfo.name}
                    className="w-full h-full object-cover relative z-10"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.classList.add(
                        "flex",
                        "items-center",
                        "justify-center",
                        "bg-gradient-to-br",
                        "from-[#F8F4EA]",
                        "to-[#CFEFF5]",
                      );
                      e.target.parentElement.innerHTML = `
                        <div class="text-center p-8 relative z-10">
                          <div class="text-4xl font-playfair font-bold text-[#1E4D8F] mb-2">EC</div>
                          <p class="text-sm font-montserrat font-medium text-[#63B8E6] uppercase tracking-wider">${authorInfo.name}</p>
                        </div>
                      `;
                    }}
                  />
                  {/* Warm light overlay */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#FFD700]/10 to-transparent z-20 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Floating sparkles around image */}
            <div
              className="absolute top-2 -right-2 w-1.5 h-1.5 bg-[#FFD700] rounded-full animate-gentle-float shadow-[0_0_6px_#FFD700]"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-8 -left-2 w-1 h-1 bg-[#FFD700] rounded-full animate-gentle-float shadow-[0_0_4px_#FFD700]"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
