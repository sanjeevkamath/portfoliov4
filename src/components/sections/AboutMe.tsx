"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "@/config/content";

export const AboutMe = () => {
    return (
        <section id="about" className="relative md:sticky top-0 z-0 min-h-screen flex items-center justify-center py-20 bg-[#37452D] text-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Col: Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.2 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex justify-center"
                >
                    <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={ABOUT_CONTENT.image}
                            alt="Profile"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Right Col: Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-50px" }} // Allows animation to replay
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 1.0,
                                ease: "easeOut",
                                delay: 0.2
                            }
                        }
                    }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-serif bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        {ABOUT_CONTENT.title}
                    </h2>

                    <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                        {Array.isArray(ABOUT_CONTENT.description) ? (
                            ABOUT_CONTENT.description.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))
                        ) : (
                            <p>{ABOUT_CONTENT.description}</p>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
