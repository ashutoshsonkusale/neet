import { useState } from "react";

interface Step4Props {
  onMessageSelect: (index: number) => void;
}

export default function Step4({ onMessageSelect }: Step4Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="animate-fade-in flex justify-center">
      <div className="card-container w-full max-w-[420px] px-4"> {/* 🔥 width increased */}

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

          {/* 🔥 SLIDING PANEL (FIXED HEIGHT, ONLY TRANSLATE) */}
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
                I'm Sorry
              </h2>
            </div>

            {/* CONTENT */}
            <div
              className={`
                px-6 pb-6 text-sm text-[#6b5b5b] leading-relaxed
                transition-opacity duration-500
                ${open ? "opacity-100 delay-200" : "opacity-0"}
              `}
            >
              I know it might seem like a small thing, but I genuinely feel bad for not remembering your birthday, even though you had already told me.

I’m honestly really bad with dates, but that’s not an excuse. You matter to me, and I hate that I made it seem like you don’t.

I’m really sorry for this. Next time I’ll make sure I remember and not just remember, we’ll celebrate it properly.
 I really don’t want small mistakes like this to affect what we have.
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}