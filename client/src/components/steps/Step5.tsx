import { useState } from "react";

interface Step5Props {
  onNext: () => void;
}

export default function Step5({ onNext }: Step5Props) {
  const [clicked, setClicked] = useState(false);
  const [bursts, setBursts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleComplete = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (clicked) return;
    setClicked(true);

    // Trigger burst around the button
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const newBursts = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() * 120 - 60),
      y: y + (Math.random() * 80 - 40),
    }));

    setBursts(newBursts);

    setTimeout(() => {
      onNext();
    }, 1200);
  };

  return (
    <div className="animate-fade-in flex justify-center w-full">
      <div className="card-container w-full">
        {/* Top Illustration Section */}
        <div className="w-full h-44 mb-6 bg-gradient-to-b from-[#ffc0cb]/40 to-[#ffe4e9]/20 rounded-3xl flex items-end justify-center relative overflow-hidden shadow-inner border border-white/40">
          {/* Floating hearts and sparkles */}
          <div className="absolute top-6 left-8 text-2xl opacity-80 animate-float-slow" style={{ animationDelay: '0.2s' }}>💗</div>
          <div className="absolute top-4 right-10 text-xl opacity-80 animate-float" style={{ animationDelay: '0.8s' }}>✨</div>
          <div className="absolute bottom-12 left-12 text-xl opacity-60 animate-pulse-scale">✨</div>
          <div className="absolute top-10 right-6 text-2xl opacity-80 animate-float" style={{ animationDelay: '1.2s' }}>💖</div>

          {/* Cute Cat GIF */}
          <img
            src="/cat.gif"
            alt="cute happy cat"
            className="w-36 h-36 object-contain absolute bottom-[-10px] animate-bounce-gentle"
          />
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="font-script text-4xl text-[#6b3f4e] mb-2">
            One last tiny thing... ✨
          </h2>
        </div>

        {/* Message */}
        <div className="text-center mb-8 px-2 sm:px-4">
          <p className="text-sm sm:text-base text-[#6b5b5b] leading-relaxed font-medium">
            I hope today I spoiled you a little...<br />
            and if not...<br />
            I hope this tiny corner of the internet did. 🤍
          </p>
          <p className="text-sm sm:text-base text-[#6b5b5b] leading-relaxed font-medium mt-5">
            Okay okay... that's enough emotions for one day.<br />
            Go have the best birthday now. 🎂🤍
          </p>
        </div>

        {/* Button */}
        <div className="flex flex-col items-center relative">
          <button
            onClick={handleComplete}
            className={`
              w-full py-3 rounded-full 
              bg-gradient-to-r from-[#e6b8c7] to-[#d9a3b5]
              text-[#6b3f4e] font-semibold text-base sm:text-lg
              shadow-md transition-all duration-300 z-10
              ${clicked ? 'scale-95 opacity-80 cursor-default' : 'hover:shadow-lg hover:scale-[1.02] cursor-pointer'}
            `}
          >
            Tap for one more message 🤍
          </button>
        </div>

        {/* Burst Hearts Overlay */}
        {bursts.map(b => (
          <div
            key={b.id}
            className="fixed z-50 animate-float-up-fade pointer-events-none text-2xl sm:text-3xl"
            style={{ left: b.x, top: b.y }}
          >
            {Math.random() > 0.5 ? '💖' : '✨'}
          </div>
        ))}
      </div>
    </div>
  );
}
