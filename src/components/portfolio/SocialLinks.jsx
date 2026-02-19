import React from 'react';
import { Linkedin, Github, Instagram, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const socialItems = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/nikhil-gupta-329b47233?utm_source=share_via&utm_content=profile&utm_medium=member_android', color: 'hover:text-[#0077b5]' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/vivekgupta8840246570/Nikhil-Portfolio.github.io', color: 'hover:text-white' },
    { name: 'Naukri', icon: Briefcase, url: 'https://www.naukri.com/mnjuser/homepage?utm_source=google&utm_medium=cpc&utm_campaign=Brand', color: 'hover:text-cyan-400' },
];

export default function SocialLinks() {
    return (
        <div className="flex items-center gap-6 mt-8">
            {socialItems.map((item, index) => (
                <motion.a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-1 text-gray-400 transition-colors duration-300 ${item.color}`}
                >
                    <item.icon className="w-6 h-6" />
                    <span className="text-xs font-medium">{item.name}</span>
                </motion.a>
            ))}
        </div>
    );
}