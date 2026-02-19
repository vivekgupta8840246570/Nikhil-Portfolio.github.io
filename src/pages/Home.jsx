import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
    Mail, Sparkles, ArrowDown,
    Home as HomeIcon, Briefcase, Github, Linkedin, Instagram
} from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "@/components/ui/avatar";

import SocialLinks from '@/components/portfolio/SocialLinks';
import ContactForm from '@/components/portfolio/ContactForm';
import NavigationDots from '@/components/portfolio/NavigationDots';
import WorkHistory from '@/components/portfolio/WorkHistory';
import SkillsCarousel from '@/components/portfolio/SkillsCarousel';
import ProjectsCarousel from '@/components/portfolio/ProjectsCarousel';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            // Updated sections to track
            const sections = ['home', 'experience', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative selection:bg-cyan-500/30">

            <NavigationDots activeSection={activeSection} />

            {/* Hamburger Menu (Top Left) */}
            <div className="fixed top-6 left-6 z-50">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="w-12 h-12 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800 flex flex-col items-center justify-center gap-1.5 hover:border-slate-700 transition-colors group">
                            <span className="w-6 h-0.5 bg-slate-300 group-hover:bg-white transition-colors"></span>
                            <span className="w-6 h-0.5 bg-slate-300 group-hover:bg-white transition-colors"></span>
                            <span className="w-6 h-0.5 bg-slate-300 group-hover:bg-white transition-colors"></span>
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] border-r-slate-800 bg-slate-950 p-0 text-white">
                        {/* Profile Header */}
                        <div className="flex items-center gap-4 border-b border-slate-800 p-6">
                            <Avatar className="h-12 w-12 border-2 border-cyan-500/20">
                                <AvatarImage src="profile.jpg" alt="Profile" />
                                <AvatarFallback>NG</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-bold text-white">Nikhil Gupta</h3>
                                <p className="text-xs text-slate-400">Senior System Engineer</p>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-col gap-2 p-4">
                            {[
                                { id: 'home', label: 'Home', icon: HomeIcon },
                                { id: 'experience', label: 'Work', icon: Briefcase },
                                { id: 'contact', label: 'Contact', icon: Mail }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        scrollToSection(item.id);
                                        // Optional: Close sheet here if we had a ref or controlled state
                                    }}
                                    className={`flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition-all ${activeSection === item.id
                                        ? 'bg-slate-900 text-cyan-400'
                                        : 'text-slate-400 hover:bg-slate-900/50 hover:text-white'
                                        }`}
                                >
                                    <item.icon className="h-5 w-5" />
                                    {item.label}
                                    {activeSection === item.id && (
                                        <div className="ml-auto h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                                    )}
                                </button>
                            ))}

                            <div className="mt-4 px-4">
                                <Button
                                    asChild
                                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/20"
                                >
                                    <a href="resume.pdf" download="Nikhil_Gupta_CV.pdf">
                                        <ArrowDown className="mr-2 h-4 w-4" />
                                        Download CV
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Footer Socials */}
                        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-800 p-6">
                            <p className="mb-4 text-xs font-medium text-slate-500">Connect with me</p>
                            <div className="flex gap-3">
                                {[
                                    { icon: Linkedin, href: "https://www.linkedin.com/in/nikhil-gupta-329b47233?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                                    { icon: Github, href: "https://github.com/vivekgupta8840246570/Nikhil-Portfolio.github.io" }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
                                    >
                                        <social.icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Hero Section */}
            <section id="home" className="min-h-screen relative flex flex-col items-center justify-center px-6 overflow-hidden">

                {/* Background Effects */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 text-center"
                >
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative inline-block mb-10"
                    >
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl shadow-blue-500/10">
                            <img
                                src="profile.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <motion.div
                            className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-900"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="w-5 h-5 text-white" />
                        </motion.div>
                    </motion.div>

                    {/* Name & Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Nikhil Gupta</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
                    >
                        Linux Administrator . Data Center Expert . Cloud & Infrastructure Learner
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-8 max-w-2xl mx-auto leading-relaxed"
                    >
                        Experienced in managing the physical and virtual 'metal' of Data Centers. I am a Linux enthusiast dedicated to mastering the transition from on-premise hardware to Cloud-native architecture. Currently documenting my journey as I learn to automate and deploy at scale.
                    </motion.p>

                    <SocialLinks />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-cyan-600/20 w-full sm:w-auto transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <a href="resume.pdf" download="Nikhil_Gupta_CV.pdf">
                                <ArrowDown className="w-5 h-5 mr-2" />
                                Download CV
                            </a>
                        </Button>

                        <Button
                            onClick={() => scrollToSection('contact')}
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-600/20 w-full sm:w-auto transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Get In Touch
                        </Button>

                        <Button
                            variant="outline"
                            onClick={() => scrollToSection('experience')}
                            size="lg"
                            className="bg-transparent border-gray-700 text-white hover:bg-gray-800 hover:text-white rounded-full px-8 py-6 text-lg w-full sm:w-auto"
                        >
                            EXPLORE
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    onClick={() => scrollToSection('experience')}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors z-20"
                >
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                        <ArrowDown className="w-6 h-6" />
                    </motion.div>
                </motion.button>
            </section>

            {/* Sections */}
            <div id="experience">
                <WorkHistory />
            </div>

            <div id="skills">
                <SkillsCarousel />
            </div>

            <div id="projects">
                <ProjectsCarousel />
            </div>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen relative flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-50" />

                <div className="max-w-4xl w-full relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 rounded-full text-sm font-medium mb-6">
                            <Mail className="w-4 h-4" />
                            Contact
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Let's Connect
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                            Let's connect! Open to new roles in Cloud Support, Linux Admin, and Data Center Operations.
                        </p>

                        <a
                            href="mailto:nikhilgupta9483@gmail.com"
                            className="text-xl md:text-2xl font-medium text-blue-400 hover:text-blue-300 transition-colors border-b-2 border-blue-500/30 hover:border-blue-400 pb-1"
                        >
                            nikhilgupta9483@gmail.com
                        </a>
                    </motion.div>

                    <ContactForm />
                </div>
            </section>

            <Footer />
        </div>
    );
}