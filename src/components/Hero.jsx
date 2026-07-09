import { useState, useRef, useEffect } from "react";
import { authorInfo } from "../data";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadeddata", () => setVideoLoaded(true));
      video.addEventListener("error", () => setVideoError(true));
      // Try to play
      video.play().catch(() => setVideoError(true));
    }
    return () => {
      if (video) {
        video.removeEventListener("loadeddata", () => setVideoLoaded(true));
        video.removeEventListener("error", () => setVideoError(true));
      }
    };
  }, []);

  const showVideo = videoLoaded && !videoError;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* ===== VIDEO BACKGROUND ===== */}
      {!videoError && (
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/video-bg.mp4" type="video/mp4" />
          </video>
          {/* Subtle overlay to keep text readable */}
          <div className="absolute inset-0 bg-white/20"></div>
        </div>
      )}

      {/* ===== FALLBACK: Original Sky Design ===== */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${showVideo ? "opacity-0" : "opacity-100"}`}
      >
        {/* Sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#87CEEB] via-[#B0DDF5] to-[#CFEFF5]"></div>

        {/* Clouds */}
        <div className="absolute top-12 right-8 animate-gentle-float">
          <div className="relative">
            <div className="w-52 h-20 bg-white rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.6)]"></div>
            <div className="w-40 h-16 bg-white rounded-full absolute -top-5 left-8 shadow-[0_4px_15px_rgba(255,255,255,0.5)]"></div>
            <div className="w-32 h-14 bg-white rounded-full absolute -top-3 left-22 shadow-[0_4px_15px_rgba(255,255,255,0.5)]"></div>
            <div className="w-24 h-12 bg-white rounded-full absolute top-1 left-36"></div>
          </div>
        </div>

        <div
          className="absolute top-28 left-6 animate-gentle-float"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="relative">
            <div className="w-44 h-16 bg-white rounded-full shadow-[0_4px_18px_rgba(255,255,255,0.6)]"></div>
            <div className="w-32 h-13 bg-white rounded-full absolute -top-5 left-6 shadow-[0_4px_15px_rgba(255,255,255,0.5)]"></div>
            <div className="w-26 h-11 bg-white rounded-full absolute -top-3 left-18"></div>
            <div className="w-20 h-9 bg-white rounded-full absolute top-1 left-30"></div>
          </div>
        </div>

        <div
          className="absolute top-48 right-20 animate-gentle-float"
          style={{ animationDelay: "3s" }}
        >
          <div className="relative">
            <div className="w-60 h-20 bg-white rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.6)]"></div>
            <div className="w-44 h-16 bg-white rounded-full absolute -top-6 left-10 shadow-[0_4px_15px_rgba(255,255,255,0.5)]"></div>
            <div className="w-34 h-13 bg-white rounded-full absolute -top-4 left-24 shadow-[0_4px_15px_rgba(255,255,255,0.5)]"></div>
            <div className="w-24 h-10 bg-white rounded-full absolute top-2 left-44"></div>
          </div>
        </div>

        <div
          className="absolute top-6 left-1/3 animate-gentle-float"
          style={{ animationDelay: "4.5s" }}
        >
          <div className="relative">
            <div className="w-36 h-13 bg-white rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.5)]"></div>
            <div className="w-26 h-10 bg-white rounded-full absolute -top-4 left-5 shadow-[0_4px_12px_rgba(255,255,255,0.4)]"></div>
          </div>
        </div>

        <div
          className="absolute bottom-28 left-12 animate-gentle-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="relative">
            <div className="w-48 h-17 bg-white rounded-full shadow-[0_4px_18px_rgba(255,255,255,0.5)]"></div>
            <div className="w-34 h-13 bg-white rounded-full absolute -top-5 left-8 shadow-[0_4px_15px_rgba(255,255,255,0.4)]"></div>
          </div>
        </div>

        {/* Birds */}
        <div
          className="absolute top-20 left-1/4 opacity-30 animate-gentle-float"
          style={{ animationDelay: "1s" }}
        >
          <svg
            className="w-10 h-5"
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
          className="absolute top-32 left-2/5 opacity-22 animate-gentle-float"
          style={{ animationDelay: "2.5s" }}
        >
          <svg
            className="w-7 h-4"
            viewBox="0 0 30 15"
            fill="none"
            stroke="#1E4D8F"
            strokeWidth="1.5"
          >
            <path d="M3 11 Q12 3 21 11" strokeLinecap="round" />
            <path d="M11 11 Q20 3 29 11" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT - Text */}
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

          {/* RIGHT - Profile */}
          <div className="relative mx-auto max-w-sm animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-6 bg-[#FFD700]/5 rounded-full blur-2xl animate-soft-glow"></div>
              <div className="relative bg-white/70 backdrop-blur-sm shadow-2xl border border-white/50 overflow-hidden hover-lift rounded-2xl">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src="/images/profile3.png"
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
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#FFD700]/10 to-transparent z-20 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
