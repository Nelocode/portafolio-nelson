"use client";

import { useState, useEffect } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { ResumePDF } from "@/components/pdf/ResumePDF";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { GridBackground } from "@/components/ui/GridBackground";

export default function PDFPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <main className="min-h-screen bg-[#0A0A12] text-white p-4 md:p-8 relative">
            <GridBackground />
            <div className="max-w-6xl mx-auto relative z-10 flex flex-col h-[90vh]">
                <div className="flex items-center justify-between mb-8">
                    <Link href="/">
                        <Button variant="ghost" className="text-neutral-400 hover:text-white">
                            <ArrowLeft className="w-5 h-5 mr-2" /> Volver al Portafolio
                        </Button>
                    </Link>

                    {isClient && (
                        <PDFDownloadLink document={<ResumePDF />} fileName="Nelson_Carvajal_CV_Propuesta.pdf">
                            {({ loading }) => (
                                <Button variant="neon" disabled={loading}>
                                    <Download className="w-5 h-5 mr-2" />
                                    {loading ? "Generando Documento..." : "Descargar Versión Oficial (PDF)"}
                                </Button>
                            )}
                        </PDFDownloadLink>
                    )}
                </div>

                <div className="flex-grow bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
                    {isClient ? (
                        <PDFViewer width="100%" height="100%" className="border-none">
                            <ResumePDF />
                        </PDFViewer>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center font-mono text-cyan-400 animate-pulse">
                            Inicializando Motor de Renderizado PDF...
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
