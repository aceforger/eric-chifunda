import { reviews, book } from "../data";

export default function Reviews() {
  const getBookTitle = (bookId) => {
    const found = book.find((b) => b.id === bookId);
    return found ? found.title : "";
  };

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#CFEFF5]/10 rounded-full blur-[100px] animate-ripple"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 mb-4 text-sm font-montserrat font-semibold rounded-full">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-soft-glow"></span>
            Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair text-[#1E4D8F] mb-4">
            WHAT READERS SAY
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#63B8E6] mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="bg-[#F8F4EA]/50 backdrop-blur-sm border border-[#CFEFF5]/30 hover:border-[#D4AF37]/30 transition-all hover-lift h-full flex flex-col p-6 rounded-2xl">
                <p className="text-[#0fa2f1] text-[10px] font-montserrat font-semibold uppercase tracking-wider mb-2">
                  {getBookTitle(review.bookId)}
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "text-[#D4AF37]" : "text-[#CFEFF5]"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-[#1E4D8F] font-montserrat font-semibold text-sm mb-2">
                  {review.title}
                </h3>
                <p className="text-[#1E4D8F]/95 text-sm font-inter leading-relaxed mb-4 flex-1 line-clamp-4">
                  "{review.review}"
                </p>
                <div className="border-t border-[#CFEFF5]/30 pt-3 mt-auto">
                  <p className="text-[#1E4D8F] text-sm font-montserrat font-semibold">
                    {review.reviewer}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-[#1E4D8F]/60 text-xs font-inter">
                      {review.date}
                    </p>
                    {review.verified && (
                      <span className="text-[#63B8E6] text-xs font-montserrat font-semibold">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  {review.helpful > 0 && (
                    <p className="text-[#1E4D8F]/80 text-xs mt-1">
                      {review.helpful} found this helpful
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
