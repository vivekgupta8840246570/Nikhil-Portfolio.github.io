import React from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Mail } from 'lucide-react';
import { cn } from "@/lib/utils";

const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'experience', icon: Briefcase, label: 'Work' },
    { id: 'contact', icon: Mail, label: 'Contact' },
];

export default function NavigationDots({ activeSection }) {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
            {/* Connecting Line */}
            <div className="absolute top-4 bottom-4 w-px bg-slate-800 -z-10" />

            {navItems.map((item) => {
                const isActive = activeSection === item.id ||
                    (item.id === 'experience' && (activeSection === 'projects' || activeSection === 'skills'));

                return (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                            "relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 border backdrop-blur-sm",
                            isActive
                                ? "bg-cyan-500 border-cyan-400 text-white shadow-lg shadow-cyan-500/20"
                                : "bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200"
                        )}
                    >
                        <item.icon className="w-5 h-5" />

                        {/* Label Tooltip */}
                        <span className="absolute left-14 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}