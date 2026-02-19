import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Format the message for WhatsApp
        const messageText = `Hi, I want to connect with you.\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
        const encodedMessage = encodeURIComponent(messageText);

        // REPLACE THIS WITH YOUR WHATSAPP NUMBER (International format without + or -)
        const phoneNumber = "919451658255";

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="w-full max-w-md space-y-4"
        >
            <div className="space-y-4">
                <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 rounded-xl bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all"
                />
                <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 rounded-xl bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all"
                />
                <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[120px] rounded-xl bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all resize-none"
                />
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                    type="submit"
                    className={`w-full h-12 rounded-xl font-medium transition-all duration-300 ${submitted
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                        }`}
                >
                    {submitted ? (
                        <>
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Message Sent!
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                        </>
                    )}
                </Button>
            </motion.div>
        </motion.form>
    );
}