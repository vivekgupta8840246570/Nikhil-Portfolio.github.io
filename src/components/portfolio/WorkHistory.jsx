import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const experiences = [
    {
        id: 1,
        company: "Aakash Education Services Limited",
        role: "Senior System Engineer",
        period: "2025 - Present",
        description: "Managing Data Center Infrastructure, Active Directory and Cloud Infrastructure.",
        icon: Building2,
        color: "bg-blue-500",
    },
    {
        id: 2,
        company: "Smartx Technologies",
        role: "System Engineer",
        period: "2024 - 2025",
        description: "Responsible for Data Center Devices and Linux Servers.",
        icon: Briefcase,
        color: "bg-purple-500",
    },
    {
        id: 3,
        company: "IP Solutions Technologies",
        role: "Linux Administrator",
        period: "2021 - 2024",
        description: "Collaborated with VM Team and IT Team to troubleshoot the Linux Servers issues.",
        icon: Building2,
        color: "bg-cyan-500",
    },
];

export default function WorkHistory() {
    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 rounded-full text-sm font-medium mb-6">
                        <Briefcase className="w-4 h-4" />
                        Experience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Work History
                    </h2>
                    <p className="text-gray-400">
                        Companies I've had the pleasure to work with
                    </p>
                </motion.div>

                <Carousel setApi={setApi} className="w-full max-w-2xl mx-auto">
                    <CarouselContent>
                        {experiences.map((exp) => (
                            <CarouselItem key={exp.id}>
                                <div className="p-1">
                                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12 text-center hover:border-slate-700 transition-colors duration-300">
                                        <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl ${exp.color} bg-opacity-20 flex items-center justify-center mb-6`}>
                                            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${exp.color} flex items-center justify-center`}>
                                                <exp.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                            </div>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                            {exp.company}
                                        </h3>
                                        <p className="text-blue-400 font-medium text-lg mb-4">
                                            {exp.role}
                                        </p>

                                        <div className="inline-flex items-center gap-2 text-gray-500 mb-6 bg-slate-800/50 px-3 py-1 rounded-full text-sm">
                                            <Calendar className="w-4 h-4" />
                                            {exp.period}
                                        </div>

                                        <p className="text-gray-400 leading-relaxed max-w-lg mx-auto">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Custom Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <CarouselPrevious
                            className="static translate-y-0 translate-x-0 h-10 w-10 bg-slate-800 border-slate-700 hover:bg-slate-700 hover:text-white"
                            variant="ghost"
                        />
                        <div className="flex gap-2">
                            {Array.from({ length: count }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index + 1 === current
                                        ? "w-8 bg-cyan-500"
                                        : "bg-slate-700 hover:bg-slate-600"
                                        }`}
                                    onClick={() => api?.scrollTo(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        <CarouselNext
                            className="static translate-y-0 translate-x-0 h-10 w-10 bg-slate-800 border-slate-700 hover:bg-slate-700 hover:text-white"
                            variant="ghost"
                        />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
