export default function Step5() {
  return (
    <div className="animate-fade-in">
      <div className="card-container">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="font-script text-3xl text-[#6b3f4e] mb-4">I'm Sorry</h2>
        </div>

        {/* Message content with floral decorations */}
        <div className="relative mb-6">
          {/* Decorative elements */}
          <div className="absolute left-0 bottom-0 text-2xl opacity-50">🌸</div>
          <div className="absolute right-0 bottom-0 text-2xl opacity-50">🌿</div>
          
          {/* Dashed border box */}
          <div className="dashed-border p-6 bg-gradient-to-br from-[#ffc0cb]/10 to-[#e6d5f8]/10">
            <p className="text-sm text-[#6b5b5b] leading-relaxed text-center font-medium">
              For hurting you and making you feel upset, I'm truly sorry. I never wanted to be the reason behind your tears or your silence. You matter to me more than I always manage to show, and I hate that I let you down. I promise to grow, to listen, and to be better for you every single day. Thank you for giving me the chance to make things right.
            </p>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="flex justify-between items-end px-4 mb-6">
          <div className="text-xl opacity-40">🌹</div>
          <div className="text-xl opacity-40">🌺</div>
          <div className="text-xl opacity-40">🌸</div>
        </div>

        {/* Closing message */}
        <div className="text-center">
          <p className="font-script text-2xl text-[#d4a5d4] mb-4">With all my heart...</p>
          <div className="flex justify-center gap-2">
            <span className="text-2xl animate-float" style={{animationDelay: '0s'}}>💗</span>
            <span className="text-2xl animate-float" style={{animationDelay: '0.3s'}}>💜</span>
            <span className="text-2xl animate-float" style={{animationDelay: '0.6s'}}>💗</span>
          </div>
        </div>
      </div>
    </div>
  );
}
