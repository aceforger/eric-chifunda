import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Paintings() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPainting, setSelectedPainting] = useState(null);

  const paintings = [
    {
      src: "/images/painting1.jpg",
      alt: "Eric Chifunda with his painting",
      featured: true,
    },
    { src: "/images/painting2.jpg", alt: "Painting by Eric Chifunda" },
    { src: "/images/painting3.jpg", alt: "Painting by Eric Chifunda" },
    { src: "/images/painting4.jpg", alt: "Painting by Eric Chifunda" },
    { src: "/images/painting5.jpg", alt: "Painting by Eric Chifunda" },
    { src: "/images/painting6.jpg", alt: "Painting by Eric Chifunda" },
    { src: "/images/painting7.jpg", alt: "Painting by Eric Chifunda" },
    { src: "/images/painting8.jpg", alt: "Painting by Eric Chifunda" },
    { src: "/images/painting9.jpg", alt: "Painting by Eric Chifunda" },
    { src: "/images/painting10.jpg", alt: "Painting by Eric Chifunda" },
  ];

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % paintings.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paintings.length]);

  const getVisiblePaintings = () => {
    const total = paintings.length;
    const prev2 = (currentIndex - 2 + total) % total;
    const prev1 = (currentIndex - 1 + total) % total;
    const current = currentIndex;
    const next1 = (currentIndex + 1) % total;
    const next2 = (currentIndex + 2) % total;
    return [prev2, prev1, current, next1, next2];
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + paintings.length) % paintings.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % paintings.length);
  };

  const visibleIndices = getVisiblePaintings();

  return (
    <section
      id="paintings"
      className="py-20 bg-gradient-to-b from-[#F8F4EA] via-white to-[#F8F4EA] relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#CFEFF5]/8 rounded-full blur-[150px] animate-ripple"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[120px] animate-ripple"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Gold particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`gold-dust-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: "#D4AF37",
          }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -30 - Math.random() * 40],
            x: [0, (Math.random() - 0.5) * 20],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 mt-5 border-2 border-[#D4AF37]/30 text-[#C8870A] px-5 py-2.5 mb-4 text-sm font-montserrat font-semibold rounded-full bg-[#D4AF37]/5 backdrop-blur-sm">
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[#D4AF37] rounded-full"
            ></motion.span>
            Artwork
          </div>
          <h2 className="text-4xl md:text-6xl font-playfair text-[#1E4D8F] mb-3 tracking-tight">
            Featured Paintings
          </h2>
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#D4AF37]/40"></div>
            <span className="text-[#D4AF37] text-sm">✦</span>
            <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#63B8E6]/40"></div>
          </div>
          <p className="text-[#1E4D8F]/50 font-inter text-sm max-w-xl mx-auto leading-relaxed">
            A glimpse into Eric Chifunda's artistic vision — from
            representational to visionary to abstract forms.
          </p>
        </motion.div>

        {/* ===== ROUNDED CAROUSEL ===== */}
        <div
          className="relative flex items-center justify-center"
          style={{ height: "420px" }}
        >
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-20 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-[#CFEFF5]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all group"
          >
            <svg
              className="w-4 h-4 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-20 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-[#CFEFF5]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all group"
          >
            <svg
              className="w-4 h-4 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Track */}
          <div className="flex items-center justify-center gap-2 md:gap-4 w-full overflow-hidden px-10">
            <AnimatePresence mode="popLayout">
              {visibleIndices.map((index, position) => {
                const painting = paintings[index];
                const isCenter = position === 2;

                return (
                  <motion.div
                    key={`${index}-${position}`}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isCenter ? 1 : 0.5,
                      scale: isCenter ? 1 : 0.75,
                      y: isCenter ? 0 : 8,
                      filter: isCenter ? "blur(0px)" : "blur(1px)",
                      zIndex: isCenter ? 10 : 1,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`flex-shrink-0 cursor-pointer group ${
                      isCenter ? "w-48 md:w-56" : "w-28 md:w-36"
                    }`}
                    onClick={() => {
                      if (isCenter) {
                        setSelectedPainting(painting);
                      } else {
                        setCurrentIndex(index);
                      }
                    }}
                  >
                    <div
                      className={`relative rounded-2xl overflow-hidden border-2 shadow-lg transition-all duration-500 bg-gradient-to-br from-[#F8F4EA] to-[#CFEFF5]/20 ${
                        isCenter
                          ? "border-[#D4AF37]/40 shadow-[#D4AF37]/10"
                          : "border-[#CFEFF5]/20 shadow-md"
                      }`}
                    >
                      {/* Inner frame */}
                      <div
                        className={`absolute inset-2 border rounded-xl z-10 pointer-events-none ${
                          isCenter ? "border-white/40" : "border-white/20"
                        }`}
                      ></div>

                      <motion.img
                        src={painting.src}
                        alt={painting.alt}
                        className={`w-full object-cover ${
                          isCenter ? "aspect-[3/4]" : "aspect-square"
                        }`}
                        animate={
                          isCenter ? { scale: [1, 1.02, 1, 1.02, 1] } : {}
                        }
                        transition={
                          isCenter
                            ? {
                                duration: 4,
                                times: [0, 0.3, 0.5, 0.8, 1],
                                repeat: Infinity,
                                ease: "easeInOut",
                              }
                            : {}
                        }
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.classList.add(
                            "flex",
                            "items-center",
                            "justify-center",
                            "min-h-[100px]",
                            "bg-[#F8F4EA]",
                          );
                          e.target.parentElement.innerHTML = `<span class="text-2xl">🎨</span>`;
                        }}
                      />

                      {isCenter && (
                        <>
                          <div className="absolute top-2 left-2 z-20 px-2 py-0.5 bg-[#D4AF37] text-white text-[9px] font-montserrat font-semibold rounded-full">
                            {painting.featured
                              ? "Featured"
                              : `Painting ${index + 1}`}
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1E4D8F]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-3">
                            <p className="text-white font-montserrat text-[10px] font-semibold tracking-wider">
                              Click to expand
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
            {paintings.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#D4AF37] w-5"
                    : "bg-[#CFEFF5] hover:bg-[#63B8E6]"
                }`}
                aria-label={`Go to painting ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPainting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E4D8F]/80 backdrop-blur-md"
          onClick={() => setSelectedPainting(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPainting(null)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors font-montserrat text-sm flex items-center gap-2"
            >
              Close
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src={selectedPainting.src}
                alt={selectedPainting.alt}
                className="w-full h-auto max-h-[85vh] object-contain bg-[#F8F4EA]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
