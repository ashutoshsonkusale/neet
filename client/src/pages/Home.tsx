import { useState } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import Step1 from '@/components/steps/Step1';
import Step2 from '@/components/steps/Step2';
import Step3 from '@/components/steps/Step3';
import Step4 from '@/components/steps/Step4';
import Step5 from '@/components/steps/Step5';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedMessages, setSelectedMessages] = useState<string[]>([]);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSelectMessage = (message: string) => {
    setSelectedMessages([...selectedMessages, message]);
    handleNext();
  };

  const handleMessageSelect = (index: number) => {
    setCurrentStep(4);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f8eff0] via-[#faf5f7] to-[#f5f0f5] flex items-center justify-center overflow-hidden relative">
      <FloatingHearts />
      
      <div className="absolute inset-0 pointer-events-none">
        {/* Decorative gradient blobs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-radial from-[#ffc0cb] to-transparent opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-radial from-[#e6d5f8] to-transparent opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-24 h-24 bg-gradient-radial from-[#d4a5d4] to-transparent opacity-15 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 flex items-center justify-center px-4">
        {currentStep === 0 && <Step1 onNext={handleNext} />}
        {currentStep === 1 && <Step2 onNext={handleNext} />}
        {currentStep === 2 && <Step3 onSelectMessage={handleSelectMessage} />}
        {currentStep === 3 && <Step4 onMessageSelect={handleMessageSelect} />}
        {currentStep === 4 && <Step5 />}
      </div>
    </div>
  );
}
