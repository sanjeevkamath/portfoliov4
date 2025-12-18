"use client";

import React from "react";
import { WovenLightHero } from "@/components/ui/woven-light-hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section id="home">
        <WovenLightHero />
      </section>
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
