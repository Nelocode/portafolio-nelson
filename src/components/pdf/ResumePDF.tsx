"use client";

import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

// Register fonts
Font.register({
    family: 'Inter',
    fonts: [
        { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhjp-Ek-_EeA.woff' }, // Regular
        { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZJhjp-Ek-_EeA.woff', fontWeight: 700 } // Bold
    ]
});

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#0A0A12",
        color: "#FFFFFF",
        padding: 40,
        fontFamily: "Inter",
    },
    header: {
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#333",
        paddingBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#00FFFF", // Cyan
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: "#888",
        marginBottom: 10,
    },
    contactRow: {
        flexDirection: "row",
        gap: 15,
        marginTop: 10,
    },
    contactText: {
        fontSize: 10,
        color: "#AAA",
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FF00FF", // Magenta
        marginBottom: 10,
        textTransform: "uppercase",
    },
    text: {
        fontSize: 11,
        lineHeight: 1.5,
        color: "#DDD",
        marginBottom: 5,
    },
    skillRow: {
        flexDirection: "row",
        marginBottom: 5,
    },
    skillName: {
        fontSize: 10,
        width: 200,
        color: "#FFF",
    },
    skillLevel: {
        fontSize: 10,
        color: "#8A2BE2", // Neon Purple
    },
    proposalBox: {
        marginTop: 30,
        padding: 15,
        backgroundColor: "#1A1A24",
        borderLeftWidth: 4,
        borderLeftColor: "#00FFFF",
        borderRadius: 4,
    },
    proposalText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#FFF",
    },
});

export const ResumePDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Nelson Carvajal</Text>
                <Text style={styles.subtitle}>Strategic Tech Leader & AI Automation Architect</Text>
                <View style={styles.contactRow}>
                    <Text style={styles.contactText}>Medellín, Colombia</Text>
                    <Text style={styles.contactText}>|</Text>
                    <Text style={styles.contactText}>nelsondcarvajal@gmail.com</Text>
                    <Text style={styles.contactText}>|</Text>
                    <Text style={styles.contactText}>+57 320 7116676</Text>
                </View>
            </View>

            {/* Profile */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Perfil Profesional</Text>
                <Text style={styles.text}>
                    Líder de proyectos y arquitecto de soluciones tecnológicas con amplia experiencia en el diseño y despliegue de productos digitales escalables. Combino una fuerte visión estratégica con ejecución técnica, integrando metodologías ágiles, diseño centrado en el usuario (UI/UX) y arquitecturas de software eficientes.
                </Text>
                <Text style={styles.text}>
                    Especialista en modernizar operaciones corporativas mediante la implementación de ecosistemas open-source, automatización avanzada (n8n) e integración de modelos de Inteligencia Artificial para la toma de decisiones y la optimización de flujos de trabajo. Orientado a transformar requerimientos de negocio en sistemas medibles y de alto impacto.
                </Text>
            </View>

            {/* Expertise */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Áreas de Dominio (Core Expertise)</Text>

                <View style={styles.skillRow}>
                    <Text style={styles.skillName}>Arquitectura de Software & NocoDB</Text>
                    <Text style={styles.skillLevel}>Avanzado</Text>
                </View>
                <View style={styles.skillRow}>
                    <Text style={styles.skillName}>Automatización Avanzada (n8n)</Text>
                    <Text style={styles.skillLevel}>Avanzado</Text>
                </View>
                <View style={styles.skillRow}>
                    <Text style={styles.skillName}>Desarrollo de Agentes IA & LLMs</Text>
                    <Text style={styles.skillLevel}>Especialista</Text>
                </View>
                <View style={styles.skillRow}>
                    <Text style={styles.skillName}>Prompt Engineering</Text>
                    <Text style={styles.skillLevel}>Especialista</Text>
                </View>
                <View style={styles.skillRow}>
                    <Text style={styles.skillName}>UI/UX Design & Frontend (React/Next)</Text>
                    <Text style={styles.skillLevel}>Avanzado</Text>
                </View>
                <View style={styles.skillRow}>
                    <Text style={styles.skillName}>Dirección de Proyectos</Text>
                    <Text style={styles.skillLevel}>Avanzado</Text>
                </View>
            </View>

            {/* Experience Highlights */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Hitos de Experiencia</Text>
                <Text style={styles.text}>
                    • Dirección del proyecto "Econova" y desarrollo de cotizadores paramétricos con generación de documentos automatizados.
                </Text>
                <Text style={styles.text}>
                    • Diseño de arquitecturas de datos complejas utilizando CRMs modernos (NocoDB) e integrados nativamente con n8n.
                </Text>
                <Text style={styles.text}>
                    • Desarrollo de "Segundos Cerebros" corporativos integrados directamente en los flujos de comunicación y trabajo de los equipos.
                </Text>
            </View>

            {/* MANDATORY PROPOSAL SECTION */}
            <View style={styles.proposalBox}>
                <Text style={styles.proposalText}>Propuesta Económica: COP $6'000.000 mensuales / Modalidad Híbrida (Medellín)</Text>
            </View>

        </Page>
    </Document>
);
