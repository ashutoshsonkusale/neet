interface Step1Props {
  onNext: () => void;
}

export default function Step1({ onNext }: Step1Props) {
  return (
    <div className="animate-fade-in">
      <div className="card-container">

        {/* Top Illustration Section */}
        <div className="w-full h-44 mb-6 bg-gradient-to-b from-[#ffc0cb] to-[#ffe4e9] rounded-3xl flex items-end justify-center relative overflow-hidden shadow-inner">

          {/* Floating hearts */}
          <div className="absolute top-4 left-6 text-xl opacity-70 animate-float">💗</div>
          <div className="absolute top-4 right-6 text-xl opacity-70 animate-float">💗</div>

          {/* Cat GIF */}
          <img 
            src="/cat.gif" 
            alt="cute cat" 
            className="w-32 h-32 object-contain absolute bottom-[-5px]"
          />
        </div>

        {/* Text Content */}
        <div className="text-center mb-6">
          <h1 className="font-script text-4xl text-[#6b3f4e] mb-3">
            Hey cutie future doctor 🩺
          </h1>

          <p className="text-base text-[#6b5b5b] leading-relaxed font-medium px-6">
            Can we talk for a moment? There's something important I want to tell you.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={onNext}
          className="btn-primary w-full flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
        >
          Continue <span>💗</span>
        </button>

      </div>
    </div>
  );
}