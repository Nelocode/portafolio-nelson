"use client";

import { motion } from "framer-motion";

export function Profile() {
    const skills = [
        { name: "Arquitectura de Software", level: 95, color: "bg-cyan-400" },
        { name: "Automatización (n8n, Python)", level: 98, color: "bg-magenta-500" },
        { name: "Inteligencia Artificial (LLMs)", level: 90, color: "bg-neon-purple" },
        { name: "Bases de Datos (NocoDB, SQL)", level: 85, color: "bg-blue-500" },
        { name: "UI/UX Design", level: 88, color: "bg-pink-500" },
    ];

    return (
        <section className="py-24 relative z-10" id="perfil">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                >
                    {/* Left Column: Text */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-mono text-white flex items-center gap-3">
                            <span className="text-magenta-500">&gt;_</span> Perfil Profesional
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-magenta-500 to-cyan-400 rounded-full mb-8"></div>

                        <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
                            <p>
                                Líder de proyectos y arquitecto de soluciones tecnológicas con amplia experiencia en el diseño y despliegue de productos digitales escalables.
                            </p>
                            <p>
                                Combino una fuerte visión estratégica con ejecución técnica, integrando metodologías ágiles, diseño centrado en el usuario (UI/UX) y arquitecturas de software eficientes.
                            </p>
                            <p>
                                Especialista en modernizar operaciones corporativas mediante la implementación de <strong className="text-white">ecosistemas open-source</strong>, <strong className="text-cyan-400">automatización de procesos complejos</strong> e integración de <strong className="text-neon-purple">modelos de Inteligencia Artificial</strong> para la toma de decisiones y la optimización de flujos de trabajo.
                            </p>
                            <p className="font-mono text-sm text-magenta-400 pt-4">
                // Orientado a transformar requerimientos de negocio en sistemas medibles y de alto impacto.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Visualizer */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative">
                        <div className="absolute top-0 right-0 p-4 opacity-30">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                            </svg>
                        </div>

                        <h3 className="text-xl font-bold mb-8 text-white">Stack Dashboard</h3>

                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium text-neutral-200">{skill.name}</span>
                                        <span className="font-mono text-neutral-400">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                                            className={`h-full ${skill.color} rounded-full`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
