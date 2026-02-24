"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Terminal } from "lucide-react";

interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: string;
}

export function Portfolio() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        // We fetch from the API route to ensure it represents the live JSON
        fetch("/api/projects")
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Error fetching projects:", err));
    }, []);

    return (
        <section className="py-24 relative z-10" id="portafolio">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3"
                        >
                            <Terminal className="text-magenta-500 w-10 h-10" />
                            Directorio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-500 to-cyan-400">Archivos</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-neutral-400 max-w-2xl"
                        >
                            Registro de implementaciones y sistemas desplegados en producción.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Button variant="outline" className="border-magenta-500/50 text-magenta-400 hover:bg-magenta-500/10" onClick={() => window.location.href = '/admin'}>
                            &gt;_ Acceso Admin
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.length === 0 ? (
                        <div className="col-span-full text-center py-20 text-neutral-500 font-mono animate-pulse">
                            Cargando registros...
                        </div>
                    ) : (
                        projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group"
                            >
                                <Card hoverEffect className="h-full flex flex-col p-0 overflow-hidden border-white/5">
                                    <div className="relative h-48 overflow-hidden bg-neutral-900">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] to-transparent"></div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>

                                        <p className="text-neutral-400 mb-6 flex-grow text-sm leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="default" className="text-[10px] bg-white/5">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                                            <Button variant="outline" size="sm" className="w-full border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 group-hover:border-cyan-400/80">
                                                Inspeccionar Sistema <ExternalLink className="ml-2 w-3 h-3" />
                                            </Button>
                                        </a>
                                    </div>
                                </Card>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
