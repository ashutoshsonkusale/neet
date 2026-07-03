import { useState } from "react";

interface Step3Props {
  onSelectMessage: (message: string) => void;
}

export default function Step3({ onSelectMessage }: Step3Props) {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const messages = [
    "I don't know if people tell you this enough... but your presence feels strangely comforting.",
    "I genuinely hope you never change the way you care for people... it's one of the nicest things about you.",
    "If this little surprise managed to bring even the tiniest smile to your face... I'll happily consider it my birthday gift to you. 🤍"
  ];

  const colors = [
    "from-[#ffc0cb] to-[#ffe4e9]",
    "from-[#f8cedc] to-[#fde4f0]",
    "from-[#e6d5f8] to-[#f0e5f8]"
  ];

  const cardTitles = [
    "Read me first 🌷",
    "There's something for you ✨",
    "Last but not least 🤍"
  ];

  const toggleCard = (index: number) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter(i => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <div className="animate-fade-in flex justify-center w-full">
      <div className="card-container w-full !max-w-[520px]">

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="font-script text-3xl text-[#6b3f4e] mb-2">
            Just a few things...
          </h2>
          <p className="text-sm sm:text-base text-[#b08a8a]">
            Tap each to read bottom cards 🤍
          </p>
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
                {/* Card Title */}
                <div
                  className={`
                    absolute inset-0 flex items-center justify-center
                    transition-all duration-500
                    text-[#6b3f4e] font-semibold text-sm sm:text-base
                    ${isActive ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}
                  `}
                >
                  {cardTitles[index]}
                </div>

                {/* Message */}
                <div
                  className={`
                    absolute inset-0 flex items-center justify-center px-4 sm:px-6 text-center
                    text-sm sm:text-base font-medium text-[#6b5b5b]
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