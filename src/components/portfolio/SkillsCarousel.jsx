import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Palette, Zap, Cloud, Server, Activity, Network } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const skillsData = [
    {
        id: 1,
        category: "Linux Administration",
        proficiency: 90,
        icon: Server,
        color: "bg-blue-500",
        tools: ["Redhat", "SUSE", "Ubuntu", "CentOS", "NFS", "Apache", "SUSE Hawk"]
    },
    {
        id: 2,
        category: "Monitoring & VMware",
        proficiency: 85,
        icon: Activity,
        color: "bg-purple-500",
        tools: ["Zabbix", "Esxi", "Vcenter", "Vrops"]
    },
    {
        id: 3,
        category: "AWS Cloud",
        proficiency: 80,
        icon: Cloud,
        color: "bg-pink-500",
        tools: ["EC2", "VPC", "Cloudfront", "S3", "VPN", "EBS", "EFS"]
    },
    {
        id: 4,
        category: "DevOps",
        proficiency: 85,
        icon: Database,
        color: "bg-cyan-500",
        tools: ["Git", "Docker", "Kubernetes", "Ansible", "Jenkins"]
    },
    {
        id: 5,
        category: "Windows Skills",
        proficiency: 80,
        icon: Terminal,
        color: "bg-green-500",
        tools: ["Active Directory", "PowerShell Scripting", "Windows Server 2019"]
    },
    {
        id: 6,
        category: "Networking",
        proficiency: 85,
        icon: Network,
        color: "bg-orange-500",
        tools: ["CCNA"]
    }
];

export default function SkillsCarousel() {
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
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-950/50 border border-purple-500/30 text-purple-400 rounded-full text-sm font-medium mb-6">
                        <Zap className="w-4 h-4" />
                        Skills
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My Expertise
                    </h2>
                    <p className="text-gray-400">
                        Technologies and tools I work with
                    </p>
                </motion.div>

                <Carousel setApi={setApi} className="w-full max-w-2xl mx-auto">
                    <CarouselContent>
                        {skillsData.map((skill) => (
                            <CarouselItem key={skill.id}>
                                <div className="p-1">
                                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12 text-center hover:border-slate-700 transition-colors duration-300">
                                        <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl ${skill.color} flex items-center justify-center mb-6 shadow-lg shadow-${skill.color}/20`}>
                                            <skill.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                                            {skill.category}
                                        </h3>

                                        <div className="mb-8 text-left">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-gray-400 text-sm">Proficiency</span>
                                                <span className="text-white font-bold">{skill.proficiency}%</span>
                                            </div>
                                            <Progress value={skill.proficiency} className="h-2 bg-slate-800" indicatorClassName={skill.color} />
                                        </div>

                                        <div className="flex flex-wrap justify-center gap-3">
                                            {skill.tools.map((tool) => (
                                                <span key={tool} className="px-4 py-2 bg-slate-800 text-gray-300 rounded-full text-sm font-medium border border-slate-700">
                                                    {tool}
                                                </span>
                                            ))}
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
