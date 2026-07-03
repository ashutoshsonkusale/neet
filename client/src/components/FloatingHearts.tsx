import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  type: 'heart' | 'sparkle';
  animation: string;
}

export default function FloatingHearts() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const generateElements = () => {
      const colors = ['#ffc0cb', '#d4a5d4', '#e6d5f8', '#f8cedc', '#ffd4e5'];
      const newElements: FloatingElement[] = [];
      
      // Generate 25 elements total
      for (let i = 0; i < 25; i++) {
        const isHeart = Math.random() > 0.4;
        newElements.push({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 20 + 10, // 10px to 30px
          duration: Math.random() * 15 + 10, // 10s to 25s
          delay: Math.random() * 20, // Stagger start times up to 20s
          color: colors[Math.floor(Math.random() * colors.length)],
          type: isHeart ? 'heart' : 'sparkle',
          animation: Math.random() > 0.5 ? 'drift-up' : 'drift-up-slow'
        });
      }
      setElements(newElements);
    };

    generateElements();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute opacity-0"
          style={{
            left: `${el.left}%`,
            top: `-20px`, // Initial top position out of view, animation overrides this
            animation: `${el.animation} ${el.duration}s linear infinite`,
            animationDelay: `${el.delay}s`,
          }}
        >
          {el.type === 'heart' ? (
            <svg
              width={el.size}
              height={el.size}
              viewBox="0 0 24 24"
              fill={el.color}
              stroke={el.color}
              strokeWidth="1"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          ) : (
            <svg 
              width={el.size * 1.2} 
              height={el.size * 1.2} 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" fill={el.color} opacity="0.8"/>
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
