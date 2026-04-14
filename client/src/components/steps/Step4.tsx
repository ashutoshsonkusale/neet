import { useState } from "react";

interface Step4Props {
  onMessageSelect: (index: number) => void;
}

export default function Step4({ onMessageSelect }: Step4Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="animate-fade-in flex justify-center">
      <div className="card-container w-[420px]">

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
                You got this ❤️
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
  I know things might feel a little overwhelming right now… and maybe you’re tired too, even if you don’t say it out loud.
</p>

<p>
  But honestly, I’ve seen how much effort you’ve been putting in, how consistent you’ve been… and it’s actually really impressive.
</p>

<p>
  Even if it feels tough sometimes, you’re already doing way more than most people ever would. And that truly matters.
</p>

<p>
  This exam doesn’t define you… but I know you’re going to do really well. You already have that future doctor energy in you.
</p>

<p>
  I just really hope you get into the college you want… you deserve that more than anything.
</p>

<p>
  And no matter what happens, I just want you to know I’m always with you. Always.
</p>

<p>
  So just focus, give your best, and get this done… and once it’s all over, we’ll celebrate properly.
</p>

<p>
  I’ll come meet you, and we’ll make it a moment worth remembering.
</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}