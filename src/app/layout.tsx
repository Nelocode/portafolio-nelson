import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const spaceMono = Space_Mono({
    weight: ["400", "700"],
    variable: "--font-space-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Nelson Carvajal | Tech Leader & AI Automation Architect",
    description: "Portafolio y Hoja de Vida Interactiva de Nelson Carvajal",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="dark">
            <body
                className={`${inter.variable} ${spaceMono.variable} antialiased bg-[#0A0A12] text-white min-h-screen selection:bg-magenta-500/30 selection:text-white`}
            >
                {children}
            </body>
        </html>
    );
}
