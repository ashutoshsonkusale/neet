import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function ClickSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const colors = ['#ffc0cb', '#d4a5d4', '#e6d5f8', '#f8cedc', '#ffd4e5'];
      
      // Spawn 3 little hearts around the click
      const newSparkles = Array.from({ length: 3 }).map((_, i) => ({
        id: Date.now() + i,
        x: e.clientX + (Math.random() * 40 - 20),
        y: e.clientY + (Math.random() * 40 - 20),
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
      
      setSparkles(prev => [...prev, ...newSparkles]);
      
      // Remove them after 1 second (duration of animation)
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => !newSparkles.find(n => n.id === s.id)));
      }, 1000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {sparkles.map(s => (
        <div
          key={s.id}
          className="absolute animate-float-up-fade"
          style={{ left: s.x - 12, top: s.y - 12 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill={s.color} stroke={s.color} strokeWidth="1">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
      ))}
    </div>
  );
}
