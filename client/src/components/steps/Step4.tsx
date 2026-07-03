import { useState } from "react";

interface Step4Props {
  onMessageSelect: (index: number) => void;
}

export default function Step4({ onMessageSelect }: Step4Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="animate-fade-in flex justify-center w-full">
      <div className="card-container w-full !max-w-[520px]">

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="font-script text-3xl text-[#6b3f4e]">
            From my heart...
          </h2>
        </div>

        {/* GIFs */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-b from-[#e6d5f8] to-[#f0e5f8] rounded-2xl h-28 flex items-end justify-center relative overflow-hidden border border-white/60 shadow-inner">
            <img src="/cat3.gif" className="w-24 absolute bottom-0" />
          </div>

          <div className="bg-gradient-to-b from-[#ffc0cb] to-[#ffe4e9] rounded-2xl h-28 flex items-end justify-center relative overflow-hidden border border-white/60 shadow-inner">
            <img src="/cat4.gif" className="w-24 absolute bottom-0 scale-x-[-1]" />
          </div>
        </div>

        {/* MAIN CONTAINER */}
        <div className="relative mt-4 h-[320px] w-full rounded-[40px] bg-gradient-to-b from-white/80 to-rose-200 border border-white/60 shadow-[0_10px_25px_rgba(0,0,0,0.15)] overflow-hidden">

          {/* Tap text */}
          {!open && (
            <p className="absolute top-4 w-full text-center text-xs text-[#b08a8a]">
              ↓ Tap to see message ↓
            </p>
          )}

          {/* SLIDING PANEL */}
          <div
            onClick={() => setOpen(!open)}
            className={`
              absolute left-0 top-0 w-full h-full
              bg-rose-50 rounded-[36px]
              shadow-[0_8px_30px_rgba(0,0,0,0.12)]
              transition-transform duration-500 ease-in-out
              cursor-pointer
              flex flex-col
              ${open ? "translate-y-0" : "translate-y-[65%]"}
            `}
          >

            {/* HEADER */}
            <div className="pt-6 pb-2 text-center">
              <h2 className="text-4xl font-script text-[#6b3f4e]">
                Hey again.
              </h2>
            </div>

            {/* CONTENT (ONLY FIXED PART) */}
            <div
              className={`
                flex-1 overflow-y-auto no-scrollbar
                px-6 pb-6 text-sm text-[#6b5b5b] leading-relaxed
                transition-opacity duration-500
                ${open ? "opacity-100 delay-200" : "opacity-0"}
              `}
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="space-y-3">
                <p>
                  Happy Birthday, pretty girl. 🤍
                </p>

                <p>
                  I kept thinking about what I should write here...
                  and then I realized I didn't want this to sound like every other birthday message you'll receive today.
                </p>

                <p>
                  So instead of wishing you a perfect year...
                  I just want to wish you moments that make you pause and think,
                  "Life isn't so bad after all."
                </p>

                <p>
                  I hope you always find people who make you feel heard,
                  who stay because they genuinely want to,
                  and who never make you question your place in their life.
                </p>

                <p>
                  I also hope you never lose that soft side of yours.
                  The world has enough people who pretend not to care...
                  don't become one of them.
                </p>

                <p>
                  And whenever life feels a little too loud,
                  I hope you always find your way back to the little things that make you smile...
                  your favourite food,
                  late-night music,
                  random conversations,
                  sunsets...
                  whatever feels like home to you.
                </p>

                <p>
                  Most importantly...
                  I hope one day you look back at this birthday and remember it with a smile.
                  Even if it's just because of this tiny little website someone made only for you. 🌷
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Next Button */}
        <div className={`transition-opacity duration-700 mt-6 ${open ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => open && onMessageSelect(0)}
            className={`
              w-full py-3 rounded-full 
              bg-gradient-to-r from-[#e6b8c7] to-[#d9a3b5]
              text-[#6b3f4e] font-semibold text-lg
              shadow-md transition-all duration-300
              ${open ? 'hover:shadow-lg hover:scale-[1.02] cursor-pointer' : 'cursor-default'}
            `}
          >
            Almost done ✨
          </button>
        </div>

      </div>
    </div>
  );
}