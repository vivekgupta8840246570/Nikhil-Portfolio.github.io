import React from 'react';

export default function WaveBackground({ variant = "blue" }) {
    const gradients = {
        blue: ["#0077ff", "#00d4ff", "#0099ff"],
        purple: ["#7c3aed", "#a855f7", "#6366f1"],
        dark: ["#374151", "#4b5563", "#1f2937"]
    };

    const colors = gradients[variant] || gradients.blue;

    return (
        <div className="absolute bottom-0 left-0 w-full h-48 overflow-hidden">
            {/* Layer 1 - Back wave */}
            <svg
                className="absolute bottom-0 w-full animate-wave-slow opacity-60"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                style={{ height: '100%', width: '300%' }}
            >
                <defs>
                    <linearGradient id={`grad1-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={colors[0]} />
                        <stop offset="50%" stopColor={colors[1]} />
                        <stop offset="100%" stopColor={colors[0]} />
                    </linearGradient>
                </defs>
                <path
                    fill={`url(#grad1-${variant})`}
                    d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,234.7C840,245,960,235,1080,213.3C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                />
            </svg>

            {/* Layer 2 - Middle wave */}
            <svg
                className="absolute bottom-0 w-full animate-wave-medium opacity-80"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                style={{ height: '85%', width: '250%' }}
            >
                <defs>
                    <linearGradient id={`grad2-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={colors[1]} />
                        <stop offset="50%" stopColor={colors[2]} />
                        <stop offset="100%" stopColor={colors[1]} />
                    </linearGradient>
                </defs>
                <path
                    fill={`url(#grad2-${variant})`}
                    d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </svg>

            {/* Layer 3 - Front wave */}
            <svg
                className="absolute bottom-0 w-full animate-wave-fast"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                style={{ height: '70%', width: '200%' }}
            >
                <defs>
                    <linearGradient id={`grad3-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={colors[2]} />
                        <stop offset="50%" stopColor={colors[0]} />
                        <stop offset="100%" stopColor={colors[2]} />
                    </linearGradient>
                </defs>
                <path
                    fill={`url(#grad3-${variant})`}
                    d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </svg>

            <style>{`
                @keyframes wave-slow {
                    0% { transform: translateX(0); }
                    50% { transform: translateX(-33%); }
                    100% { transform: translateX(0); }
                }
                @keyframes wave-medium {
                    0% { transform: translateX(0); }
                    50% { transform: translateX(-25%); }
                    100% { transform: translateX(0); }
                }
                @keyframes wave-fast {
                    0% { transform: translateX(0); }
                    50% { transform: translateX(-20%); }
                    100% { transform: translateX(0); }
                }
                .animate-wave-slow {
                    animation: wave-slow 12s ease-in-out infinite;
                }
                .animate-wave-medium {
                    animation: wave-medium 8s ease-in-out infinite;
                }
                .animate-wave-fast {
                    animation: wave-fast 5s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}