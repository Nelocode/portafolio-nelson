"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
    const [copiedItem, setCopiedItem] = useState<string | null>(null);

    const contactData = [
        {
            id: "email",
            label: "Email",
            value: "nelsondcarvajal@gmail.com",
            icon: Mail,
        },
        {
            id: "phone",
            label: "Teléfono",
            value: "+57 320 7116676",
            icon: Phone,
        },
        {
            id: "location",
            label: "Ubicación",
            value: "Medellín, Colombia",
            icon: MapPin,
        },
    ];

    const handleCopy = (id: string, value: string) => {
        navigator.clipboard.writeText(value);
        setCopiedItem(id);
        setTimeout(() => setCopiedItem(null), 2000);
    };

    return (
        <section className="py-24 relative z-10 border-t border-white/5 bg-black/60" id="contacto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-6 font-mono"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-500 to-cyan-400">&lt; Contacto /&gt;</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-neutral-400 mb-12 text-lg"
                >
                    Listo para arquitectar y automatizar el futuro de tus operaciones.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contactData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                        >
                            <button
                                onClick={() => handleCopy(item.id, item.value)}
                                className="w-full relative group overflow-hidden bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-cyan-400/50 hover:bg-white/10 transition-all"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/0 via-cyan-400/0 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center border border-white/10 group-hover:border-cyan-400/30">
                                    <item.icon className={`w-5 h-5 ${copiedItem === item.id ? "text-cyan-400" : "text-neutral-400 group-hover:text-cyan-400"} transition-colors`} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-mono text-neutral-500 mb-1">{item.label}</h3>
                                    <p className="text-base font-medium text-neutral-200">{item.value}</p>
                                </div>

                                <div className="h-8 flex items-center justify-center text-xs mt-2 relative w-full">
                                    <AnimatePresence mode="wait">
                                        {copiedItem === item.id ? (
                                            <motion.div
                                                key="copied"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="text-cyan-400 font-mono flex items-center gap-1 absolute"
                                            >
                                                <Check className="w-3 h-3" /> Copiado
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="copy"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="text-neutral-600 font-mono flex items-center gap-1 group-hover:text-magenta-400 absolute transition-colors"
                                            >
                                                <Copy className="w-3 h-3" /> Click para copiar
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
