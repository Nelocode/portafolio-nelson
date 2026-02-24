"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GridBackground } from "@/components/ui/GridBackground";
import { Save, Plus, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: string;
}

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [projects, setProjects] = useState<Project[]>([]);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            fetch("/api/projects")
                .then((res) => res.json())
                .then((data) => setProjects(data));
        }
    }, [isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple frontend protection for the demo (Change this in production)
        if (password === "admin123") {
            setIsAuthenticated(true);
        } else {
            alert("Contraseña incorrecta");
        }
    };

    const addProject = () => {
        setProjects([
            ...projects,
            {
                id: Date.now().toString(),
                title: "Nuevo Proyecto",
                description: "Descripción del sistema",
                tags: [],
                link: "#",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
            },
        ]);
    };

    const removeProject = (id: string) => {
        setProjects(projects.filter((p) => p.id !== id));
    };

    const handleUpdate = (id: string, field: keyof Project, value: any) => {
        setProjects(
            projects.map((p) => {
                if (p.id === id) {
                    if (field === "tags") {
                        // split by comma if string, otherwise value is already array
                        const tagsArray = typeof value === 'string'
                            ? value.split(",").map((t) => t.trim()).filter((t) => t !== "")
                            : value;
                        return { ...p, tags: tagsArray };
                    }
                    return { ...p, [field]: value };
                }
                return p;
            })
        );
    };

    const saveProjects = async () => {
        setIsSaving(true);
        try {
            const res = await fetch("/api/projects", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(projects),
            });
            if (res.ok) {
                alert("¡Base de datos JSON actualizada con éxito!");
            } else {
                alert("Error al guardar.");
            }
        } catch (e) {
            alert("System Error.");
        }
        setIsSaving(false);
    };

    if (!isAuthenticated) {
        return (
            <main className="min-h-screen flex items-center justify-center p-4 relative bg-[#0A0A12]">
                <GridBackground />
                <Card className="w-full max-w-sm relative z-10">
                    <h2 className="text-2xl font-bold font-mono text-cyan-400 mb-6 text-center">Admin Access</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm text-neutral-400 mb-1">Clave de Acceso</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-md p-2 text-white outline-none focus:border-cyan-400"
                                placeholder="Hint: admin123"
                            />
                        </div>
                        <Button type="submit" className="w-full" variant="neon">
                            Desbloquear Sistema
                        </Button>
                    </form>
                </Card>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#0A0A12] text-white p-8 pb-32">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
                            <ArrowLeft className="w-6 h-6" />
                        </Link>
                        <h1 className="text-3xl font-bold font-mono text-magenta-500">Gestor de Proyectos (JSON CMS)</h1>
                    </div>
                    <Button onClick={saveProjects} disabled={isSaving} className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold">
                        {isSaving ? "Guardando..." : <><Save className="w-4 h-4 mr-2" /> Guardar Cambios en JSON</>}
                    </Button>
                </div>

                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <Card key={project.id} className="border-white/20">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold font-mono text-cyan-400">ID: {project.id}</h3>
                                <Button variant="outline" size="sm" onClick={() => removeProject(project.id)} className="text-red-400 border-red-400/30 hover:bg-red-400/10">
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="block text-sm text-neutral-400">Título</label>
                                    <input
                                        type="text"
                                        value={project.title}
                                        onChange={(e) => handleUpdate(project.id, "title", e.target.value)}
                                        className="w-full bg-black/50 border border-white/10 rounded-md p-2 text-white outline-none focus:border-cyan-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm text-neutral-400">Enlace (URL)</label>
                                    <input
                                        type="text"
                                        value={project.link}
                                        onChange={(e) => handleUpdate(project.id, "link", e.target.value)}
                                        className="w-full bg-black/50 border border-white/10 rounded-md p-2 text-white outline-none focus:border-cyan-400"
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="block text-sm text-neutral-400">Descripción</label>
                                    <textarea
                                        value={project.description}
                                        onChange={(e) => handleUpdate(project.id, "description", e.target.value)}
                                        className="w-full bg-black/50 border border-white/10 rounded-md p-2 text-white outline-none focus:border-cyan-400 h-24"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm text-neutral-400">Imagen (URL)</label>
                                    <input
                                        type="text"
                                        value={project.image}
                                        onChange={(e) => handleUpdate(project.id, "image", e.target.value)}
                                        className="w-full bg-black/50 border border-white/10 rounded-md p-2 text-white outline-none focus:border-cyan-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm text-neutral-400">Tags (Separados por coma)</label>
                                    <input
                                        type="text"
                                        value={project.tags.join(", ")}
                                        onChange={(e) => handleUpdate(project.id, "tags", e.target.value)}
                                        className="w-full bg-black/50 border border-white/10 rounded-md p-2 text-white outline-none focus:border-cyan-400"
                                        placeholder="Ej: n8n, React, Python"
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <Button onClick={addProject} variant="outline" className="w-full mt-8 border-dashed border-white/30 text-neutral-300 hover:text-white hover:border-white/60 h-16">
                    <Plus className="w-5 h-5 mr-2" /> Añadir Nuevo Bloque
                </Button>
            </div>
        </main>
    );
}
