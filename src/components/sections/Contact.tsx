"use client";

import { motion } from "framer-motion";
import { Dock, DockIcon } from "@/components/ui/dock";
import { AlignCenter, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { CONTACT_DATA } from "@/config/content";

export const Contact = () => {
    return (
        <section id="contact" className="relative z-10 min-h-screen flex flex-col items-center justify-center py-24 bg-gray-900 text-white border-t border-zinc-200">
            <div className="max-w-4xl w-full px-6 text-center space-y-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold font-serif"
                >
                    Get in Touch
                </motion.h2>

                <p className="text-xl text-zinc-500 max-w-lg mx-auto">
                    Feel free to reach out for collaborations or just a friendly hello!
                </p>

                <div className="relative flex items-center justify-center mt-12">
                    <Dock magnification={80} distance={100} className="bg-zinc-100/50 border-zinc-200 shadow-xl">
                        <DockIcon className="bg-white/50 border border-zinc-200 hover:border-zinc-400 transition-colors text-zinc-800">
                            <Link href="https://github.com/sanjeevkamath" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                                <Github size={24} strokeWidth={2} />
                            </Link>
                        </DockIcon>
                        <DockIcon className="bg-white/50 border border-zinc-200 hover:border-zinc-400 transition-colors text-zinc-800">
                            <Link href="https://linkedin.com/in/sanjeev-kamath" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                                <Linkedin size={24} strokeWidth={2} />
                            </Link>
                        </DockIcon>
                        <DockIcon className="bg-white/50 border border-zinc-200 hover:border-zinc-400 transition-colors text-zinc-800">
                            <Link href="mailto:sanjeev.k.kamath@gmail.com" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                                <Mail size={24} strokeWidth={2} />
                            </Link>
                        </DockIcon>
                    </Dock>
                </div>

                <div className="text-zinc-400 text-sm mt-12 font-mono">
                    © {new Date().getFullYear()} Sanjeev Kamath. Don't reinvent the wheel.
                </div>
            </div>
        </section>
    );
};
