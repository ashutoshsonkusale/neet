interface Step2Props {
  onNext: () => void;
}

export default function Step2({ onNext }: Step2Props) {
  return (
    <div className="animate-fade-in">
      <div className="card-container">

        {/* Top Illustration Section */}
        <div className="w-full h-44 mb-6 bg-gradient-to-b from-[#e6d5f8] to-[#f0e5f8] rounded-3xl flex items-end justify-center relative overflow-hidden shadow-inner">

          {/* Floating hearts */}
          <div className="absolute top-4 left-6 text-xl opacity-70 animate-float">💜</div>
          <div className="absolute top-4 right-6 text-xl opacity-70 animate-float">💜</div>

          {/* ✅ Cat GIF (no animation, bottom aligned) */}
          <img 
            src="/cat2.gif" 
            alt="sad cat" 
            className="w-32 h-32 object-contain absolute bottom-[-5px]"
          />
        </div>

        {/* Content */}
        <div className="text-center mb-6">
          <p className="text-base text-[#6b5b5b] leading-relaxed font-medium px-6">
            I know I hurt you... and I've been feeling bad about it.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={onNext}
          className="btn-primary w-full flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
        >
          Next <span>→</span>
        </button>

      </div>
    </div>
  );
}