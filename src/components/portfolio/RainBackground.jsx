import React, { useMemo } from 'react';

export default function RainBackground() {
    const raindrops = useMemo(() => {
        return Array.from({ length: 100 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 0.5 + Math.random() * 0.5,
            opacity: 0.1 + Math.random() * 0.4,
            size: 1 + Math.random() * 2,
            height: 15 + Math.random() * 25,
        }));
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {raindrops.map((drop) => (
                <div
                    key={drop.id}
                    className="absolute animate-rain"
                    style={{
                        left: `${drop.left}%`,
                        top: '-50px',
                        width: `${drop.size}px`,
                        height: `${drop.height}px`,
                        background: `linear-gradient(to bottom, transparent, rgba(0, 200, 255, ${drop.opacity}), rgba(100, 150, 255, ${drop.opacity * 0.5}))`,
                        borderRadius: '50%',
                        animationDelay: `${drop.delay}s`,
                        animationDuration: `${drop.duration}s`,
                        filter: 'blur(0.5px)',
                    }}
                />
            ))}
            <style>{`
                @keyframes rain {
                    0% {
                        transform: translateY(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh);
                        opacity: 0;
                    }
                }
                .animate-rain {
                    animation: rain linear infinite;
                }
            `}</style>
        </div>
    );
}