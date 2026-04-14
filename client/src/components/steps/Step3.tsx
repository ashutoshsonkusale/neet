import { useState } from "react";

interface Step3Props {
  onSelectMessage: (message: string) => void;
}

export default function Step3({ onSelectMessage }: Step3Props) {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const messages = [
    "You’ve come so far already… don’t let a moment of doubt make you forget that.",
    "You’re stronger than you think… and honestly, it’s kind of impressive.",
    "I believe in you not just today, but in everything you’re becoming."
  ];

  const colors = [
    "from-[#ffc0cb] to-[#ffe4e9]",
    "from-[#f8cedc] to-[#fde4f0]",
    "from-[#e6d5f8] to-[#f0e5f8]"
  ];

  const toggleCard = (index: number) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter(i => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  const HeartIcon = ({ color }: { color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-12 h-12 opacity-70"
      fill={color}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
    </svg>
  );

  return (
    <div className="animate-fade-in">
      <div className="card-container">

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="font-script text-3xl text-[#6b3f4e] mb-2">
            Little things I want to tell you...
          </h2>
          <p className="text-sm sm:text-base text-[#b08a8a]">Tap each one</p>
        </div>

        {/* Cards */}
        <div className="space-y-4 mb-6">
          {messages.map((message, index) => {
            const isActive = activeIndexes.includes(index);

            return (
              <div
                key={index}
                onClick={() => toggleCard(index)}
                className={`
                  relative w-full rounded-2xl cursor-pointer
                  bg-gradient-to-br ${colors[index]}
                  shadow-md overflow-hidden
                  transition-all duration-500 ease-in-out
                  ${isActive ? "h-24" : "h-20"}
                `}
              >
                {/* Heart */}
                <div
                  className={`
                    absolute inset-0 flex items-center justify-center
                    transition-all duration-500
                    ${isActive ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}
                  `}
                >
                  {index === 0 && <HeartIcon color="#e58a7b" />}
                  {index === 1 && <HeartIcon color="#d95996" />}
                  {index === 2 && <HeartIcon color="#9d67d1" />}
                </div>

                {/* Message */}
                <div
                  className={`
                    absolute inset-0 flex items-center justify-center px-5 text-center
                    text-base font-medium text-[#6b5b5b]
                    transition-all duration-500
                    ${isActive ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
                  `}
                >
                  {message}
                </div>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <button
  onClick={() =>
    onSelectMessage(
      activeIndexes.length > 0
        ? messages[activeIndexes[0]]
        : messages[0]
    )
  }
  className="
    w-full py-3 rounded-full 
    bg-gradient-to-r from-[#e6b8c7] to-[#d9a3b5]
    text-[#6b3f4e] font-semibold
    flex items-center justify-center gap-2
    shadow-md transition-all duration-300
    hover:shadow-lg hover:scale-[1.02]
  "
>
  My message <span>→</span>
</button>

      </div>
    </div>
  );
}