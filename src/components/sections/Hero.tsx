"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GridBackground } from "@/components/ui/GridBackground";
import { Download } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
            <GridBackground />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center space-x-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 mb-8"
                >
                    <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-sm font-mono text-cyan-400">System Online / Ready for deployment</span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <span className="text-white">Nelson </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-500 to-neon-purple">Carvajal</span>
                </motion.h1>

                <motion.p
                    className="mt-4 text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-10 font-light"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    Strategic Tech Leader & <span className="text-cyan-400 font-mono font-medium">AI Automation Architect</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 200 }}
                >
                    <Button variant="neon" size="lg" className="group" onClick={() => {
                        window.location.href = '/pdf';
                    }}>
                        <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
                        Descargar Hoja de Vida y Propuesta
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
