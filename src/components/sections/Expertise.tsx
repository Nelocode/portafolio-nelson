"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Network, BrainCircuit, CodeXml } from "lucide-react";

export function Expertise() {
    const experiences = [
        {
            title: "Arquitectura & Proyectos",
            description:
                "Diseño de arquitecturas de datos y CRMs (NocoDB), integrados con automatización avanzada (n8n). Desarrollo de cotizadores paramétricos con generación de documentos.",
            icon: Network,
            color: "text-cyan-400",
            tags: ["NocoDB", "n8n", "Arquitectura", "Gestión de Proyectos"],
            delay: 0.1,
        },
        {
            title: "Innovación con Inteligencia Artificial",
            description:
                "Desarrollo de Agentes y 'Segundos Cerebros' corporativos. Integración de LLMs en flujos de trabajo para análisis de datos y respuestas en tiempo real.",
            icon: BrainCircuit,
            color: "text-neon-purple",
            tags: ["LLMs", "Agentes de IA", "Prompt Engineering", "Segundos Cerebros"],
            delay: 0.2,
        },
        {
            title: "Desarrollo Full-Stack & UI/UX",
            description:
                "Construcción de soluciones digitales end-to-end. Fuerte enfoque en usabilidad, modernización de interfaces e implementación de ecosistemas open-source eficientes.",
            icon: CodeXml,
            color: "text-magenta-500",
            tags: ["React/Next.js", "Open-Source", "UI/UX", "Tailwind CSS"],
            delay: 0.3,
        },
    ];

    return (
        <section className="py-24 relative z-10 bg-black/40 border-y border-white/5" id="experiencia">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Ecosistema de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-neon-purple">Experiencia</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-neutral-400 max-w-2xl mx-auto"
                    >
                        Áreas clave de dominio técnico y estratégico para la transformación digital empresarial.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: exp.delay }}
                        >
                            <Card hoverEffect className="h-full flex flex-col">
                                <div className={`mb-6 inline-flex p-3 rounded-xl bg-white/5 ${exp.color}`}>
                                    <exp.icon className="h-8 w-8" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-white">{exp.title}</h3>

                                <p className="text-neutral-400 mb-6 flex-grow leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
                                    {exp.tags.map((tag) => (
                                        <Badge key={tag} variant={
                                            exp.color === "text-cyan-400" ? "cyan" :
                                                exp.color === "text-magenta-500" ? "magenta" : "purple"
                                        }>
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
