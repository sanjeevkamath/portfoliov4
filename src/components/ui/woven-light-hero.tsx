"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useLenis } from '@studio-freight/react-lenis';
import * as THREE from 'three';
import { TextRoll } from './animated-menu';

// --- Main Hero Component ---
// --- Main Hero Component ---
export const WovenLightHero = () => {
    const menuControls = useAnimation();
    const { scrollY } = useScroll();
    const lenis = useLenis();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        lenis?.scrollTo(href, { duration: 1.5 });
    };

    // Parallax Velocity: Move text faster than scroll to create "lift"
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        // Add a more elegant font
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        menuControls.start({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 1,
                ease: "easeOut"
            }
        });

        return () => {
            document.head.removeChild(link);
        }
    }, [menuControls]);

    const menuItems = [
        { name: "Sanjeev", href: "#home" },
        { name: "About Me", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black dark:bg-white">
            <WovenCanvas />
            {/* <HeroNav />  -- Removed as requested to replace with menu steps */}
            <motion.div
                style={{ y, opacity }}
                initial={{ opacity: 0, y: 30 }}
                animate={menuControls}
                className="relative z-10 flex flex-col items-center gap-4"
            >
                <ul className="flex flex-col items-center gap-4">
                    {menuItems.map((item, index) => (
                        <li key={index} className="cursor-pointer">
                            <a
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href)}
                            >
                                <TextRoll
                                    center
                                    className="text-5xl md:text-7xl font-bold uppercase text-white dark:text-slate-900 tracking-tighter hover:text-white/80 dark:hover:text-slate-700 transition-colors"
                                >
                                    {item.name}
                                </TextRoll>
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

// --- Three.js Canvas Component ---
const WovenCanvas = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        const mouse = new THREE.Vector2(0, 0);
        const clock = new THREE.Clock();

        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        // --- Woven Silk ---
        const particleCount = 50000;
        const positions = new Float32Array(particleCount * 3);
        const originalPositions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);

        const geometry = new THREE.BufferGeometry();
        const torusKnot = new THREE.TorusKnotGeometry(1.5, 0.5, 200, 32);

        for (let i = 0; i < particleCount; i++) {
            const vertexIndex = i % torusKnot.attributes.position.count;
            const x = torusKnot.attributes.position.getX(vertexIndex);
            const y = torusKnot.attributes.position.getY(vertexIndex);
            const z = torusKnot.attributes.position.getZ(vertexIndex);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            originalPositions[i * 3] = x;
            originalPositions[i * 3 + 1] = y;
            originalPositions[i * 3 + 2] = z;

            const color = new THREE.Color();
            color.setHSL(Math.random(), 0.8, isDarkMode ? 0.5 : 0.7);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            velocities[i * 3] = 0;
            velocities[i * 3 + 1] = 0;
            velocities[i * 3 + 2] = 0;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.02,
            vertexColors: true,
            blending: isDarkMode ? THREE.NormalBlending : THREE.AdditiveBlending,
            transparent: true,
            opacity: isDarkMode ? 1.0 : 0.8,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            const mouseWorld = new THREE.Vector3(mouse.x * 3, mouse.y * 3, 0);

            for (let i = 0; i < particleCount; i++) {
                const ix = i * 3;
                const iy = i * 3 + 1;
                const iz = i * 3 + 2;

                const currentPos = new THREE.Vector3(positions[ix], positions[iy], positions[iz]);
                const originalPos = new THREE.Vector3(originalPositions[ix], originalPositions[iy], originalPositions[iz]);
                const velocity = new THREE.Vector3(velocities[ix], velocities[iy], velocities[iz]);

                const dist = currentPos.distanceTo(mouseWorld);
                if (dist < 1.5) {
                    const force = (1.5 - dist) * 0.01;
                    const direction = new THREE.Vector3().subVectors(currentPos, mouseWorld).normalize();
                    velocity.add(direction.multiplyScalar(force));
                }

                // Return to original position
                const returnForce = new THREE.Vector3().subVectors(originalPos, currentPos).multiplyScalar(0.001);
                velocity.add(returnForce);

                // Damping
                velocity.multiplyScalar(0.95);

                positions[ix] += velocity.x;
                positions[iy] += velocity.y;
                positions[iz] += velocity.z;

                velocities[ix] = velocity.x;
                velocities[iy] = velocity.y;
                velocities[iz] = velocity.z;
            }
            geometry.attributes.position.needsUpdate = true;

            points.rotation.y = elapsedTime * 0.05;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            mountRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 z-0 bg-black dark:bg-zinc-950" />;
};
