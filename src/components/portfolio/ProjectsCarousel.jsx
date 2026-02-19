import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Github, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
    {
        id: 1,
        title: "Enterprise Zabbix Monitoring",
        description: "Architected a massive-scale monitoring solution integrating 60+ iDRACs, 5 iLOs, and comprehensive coverage for ESXi, Linux/Windows servers, applications, and cloud services.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tech: ["Zabbix", "Linux", "SNMP", "AWS", "Hardware"],
        demo: "#",
        code: "#",
        color: "bg-blue-600"
    }
];

export default function ProjectsCarousel() {
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
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-950/50 border border-pink-500/30 text-pink-400 rounded-full text-sm font-medium mb-6">
                        <Rocket className="w-4 h-4" />
                        Projects
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured Work
                    </h2>
                    <p className="text-gray-400">
                        Some of my recent projects
                    </p>
                </motion.div>

                <Carousel setApi={setApi} className="w-full mx-auto">
                    <CarouselContent>
                        {projects.map((project) => (
                            <CarouselItem key={project.id}>
                                <div className="p-1">
                                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-colors duration-300">
                                        <div className="grid md:grid-cols-2 gap-0">
                                            <div className="h-64 md:h-full relative overflow-hidden group">
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </div>

                                            <div className="p-8 md:p-12 flex flex-col justify-center text-left">
                                                <h3 className="text-3xl font-bold text-white mb-4">
                                                    {project.title}
                                                </h3>
                                                <p className="text-gray-400 leading-relaxed mb-8">
                                                    {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2 mb-8">
                                                    {project.tech.map((t) => (
                                                        <span key={t} className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${project.color}`}>
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

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
