"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS_DATA } from "@/config/content";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export const Projects = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const contentRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);

    // Dynamically calculate the total scroll distance based on content width
    useEffect(() => {
        const calculateScrollRange = () => {
            if (!contentRef.current) return;

            const element = contentRef.current;
            const scrollWidth = element.scrollWidth;
            const viewportWidth = window.innerWidth;

            // Get computed margin-left (spacing from left edge)
            const style = window.getComputedStyle(element);
            const marginLeft = parseFloat(style.marginLeft) || 0;
            const paddingRight = parseFloat(style.paddingRight) || 0;

            // Total width occupied by the content from the left edge of the screen
            const totalWidth = scrollWidth + marginLeft + paddingRight;

            // We want to scroll until the end of the content hits the right edge of the screen
            const maxScroll = totalWidth - viewportWidth;

            setScrollRange(maxScroll);
        };

        calculateScrollRange();
        window.addEventListener("resize", calculateScrollRange);
        return () => window.removeEventListener("resize", calculateScrollRange);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${scrollRange}px`]);

    // We use a slight delay before fading out to keep the title visible for the first bit of scrolling
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <section id="projects" ref={targetRef} className="relative z-10 h-[300vh] bg-white text-zinc-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div
                    style={{ opacity }}
                    className="max-w-[90%] mx-auto px-6 absolute top-12 md:top-24 left-6 md:left-24 z-10 pointer-events-none"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold font-serif mb-6"
                    >
                        Projects
                    </motion.h2>
                </motion.div>

                <motion.div ref={contentRef} style={{ x }} className="flex gap-8 px-6 md:px-24 ml-[5vw] md:ml-[30vw] min-w-max">
                    {PROJECTS_DATA.map((project, index) => (
                        <div
                            key={index}
                            className="w-[85vw] md:w-[800px] h-[60vh] md:h-[70vh] relative rounded-3xl overflow-hidden group bg-zinc-100 border border-zinc-200 shadow-xl"
                        >
                            {/* Background Image Placeholder */}
                            <div className="absolute inset-0 bg-zinc-200 group-hover:scale-105 transition-transform duration-700">
                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                )}
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 md:p-12 flex flex-col justify-end text-white">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-4xl md:text-5xl font-bold">{project.title}</h3>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-black p-4 rounded-full hover:scale-110 transition-transform"
                                        >
                                            <ArrowUpRight strokeWidth={2.5} size={28} />
                                        </a>
                                    </div>

                                    <p className="text-zinc-200 text-lg md:text-xl mb-8 max-w-2xl">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-sm font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md border border-white/30 px-5 py-2 rounded-full text-white"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
