import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Linkedin, Github, Instagram, Briefcase, Heart, Coffee } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
    {
        id: 1,
        text: "Nikhil's expertise in Linux intricacies and AWS cloud infrastructure was pivotal for our migration. He optimized our server performance and ensured 99.9% uptime.",
        author: "Former Colleague",
        role: "Senior DevOps Engineer"
    }
];

const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nikhil-gupta-329b47233?utm_source=share_via&utm_content=profile&utm_medium=member_android", color: "hover:text-blue-500" },
    { icon: Github, label: "GitHub", href: "https://github.com/vivekgupta8840246570/Nikhil-Portfolio.github.io", color: "hover:text-gray-100" },
    { icon: Briefcase, label: "Naukri", href: "https://www.naukri.com/mnjuser/homepage?utm_source=google&utm_medium=cpc&utm_campaign=Brand", color: "hover:text-blue-400" },
];

export default function Footer() {
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
        <footer className="pt-20 pb-10 overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Testimonials Carousel */}
                <div className="mb-24">
                    <Carousel setApi={setApi} className="w-full max-w-2xl mx-auto">
                        <CarouselContent>
                            {testimonials.map((testimonial) => (
                                <CarouselItem key={testimonial.id}>
                                    <div className="p-1">
                                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12 text-center hover:border-slate-700 transition-colors duration-300">
                                            <div className="flex justify-center gap-1 mb-6">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                                ))}
                                            </div>

                                            <blockquote className="text-xl md:text-2xl text-gray-200 font-medium italic mb-8 leading-relaxed">
                                                "{testimonial.text}"
                                            </blockquote>

                                            <div className="text-gray-400">
                                                <span className="block font-semibold text-white">— {testimonial.author}</span>
                                                <span className="text-sm">{testimonial.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Simple Dots Navigation */}
                        <div className="flex justify-center gap-2 mt-8">
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
                    </Carousel>
                </div>

                {/* Footer Links & Copyright */}
                <div className="border-t border-slate-800 pt-12 flex flex-col items-center">
                    <div className="flex gap-8 mb-8">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                className={`text-gray-400 transition-colors duration-300 ${social.color} flex flex-col items-center gap-2 group`}
                            >
                                <div className="p-3 bg-slate-900 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-slate-800">
                                    <social.icon className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute mt-12 delay-100">
                                    {social.label}
                                </span>
                            </a>
                        ))}
                    </div>

                    <p className="text-gray-500 text-sm flex items-center gap-2">
                        © 2026 Nikhil Gupta. Crafted with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> and lots of <Coffee className="w-4 h-4 text-amber-700" />
                    </p>
                </div>
            </div>
        </footer>
    );
}
