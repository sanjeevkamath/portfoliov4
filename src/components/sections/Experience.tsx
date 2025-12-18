"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EXPERIENCE_DATA } from "@/config/content";
import { cn } from "@/lib/utils";

export const Experience = () => {
    return (
        <motion.section
            id="experience"
            className="relative z-10 min-h-screen flex items-center justify-center py-24 bg-zinc-950 text-slate-200 shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.5)]"
        >
            <div className="max-w-5xl mx-auto px-6 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-20 font-serif text-center bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent"
                >
                    Experience
                </motion.h2>

                <div className="relative space-y-16 before:absolute before:inset-0 before:ml-5 md:before:ml-[50%] before:-translate-x-px md:before:mx-auto before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent opacity-80">
                    {EXPERIENCE_DATA.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={cn(
                                "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group",
                                index % 2 === 0 ? "md:text-right" : "md:text-left"
                            )}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 w-10 h-10 -ml-5 flex items-center justify-center rounded-full bg-zinc-950 border border-slate-600 group-hover:border-white transition-colors z-10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                                <div className="w-2 h-2 rounded-full bg-white sm:group-hover:scale-150 transition-transform" />
                            </div>

                            {/* Content Card */}
                            <div className={cn(
                                "w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors ml-16 md:ml-0 flex flex-col md:flex-row gap-4 items-start",
                                index % 2 === 0 ? "md:flex-row-reverse" : ""
                            )}>
                                {/* Logo */}
                                {job.logo && (
                                    <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-white rounded-lg p-1 overflow-hidden">
                                        <Image
                                            src={job.logo}
                                            alt={`${job.company} logo`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}

                                <div className="flex-grow">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{job.role}</h3>
                                    <div className={cn(
                                        "flex flex-col gap-1 text-sm text-slate-400 mb-4 font-mono",
                                        index % 2 === 0 ? "md:items-end" : "md:items-start"
                                    )}>
                                        <span className="font-semibold text-slate-300">{job.company}</span>
                                        <span>{job.period}</span>
                                    </div>
                                    <div className={cn(
                                        "flex flex-wrap gap-2",
                                        index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                                    )}>
                                        {(job.description as unknown as string[]).map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/5 text-slate-300 hover:bg-white/20 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};
