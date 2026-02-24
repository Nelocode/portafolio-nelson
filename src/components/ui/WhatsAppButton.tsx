"use client";

import { motion } from "framer-motion";

export function WhatsAppButton() {
    const phoneNumber = "573207116676";
    const message = "Hola Nelson, revisé tu portafolio y me gustaría hablar contigo.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/60 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0A0A12]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
        >
            <span className="sr-only">Contactar por WhatsApp</span>
            <svg
                viewBox="0 0 24 24"
                width="30"
                height="30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="fill-current"
            >
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.062-.301-.15-1.265-.464-2.409-1.488-.888-.788-1.484-1.761-1.658-2.059-.173-.301-.018-.458.13-.606.134-.133.301-.347.451-.523.151-.172.203-.298.304-.497.103-.199.05-.371-.025-.521-.075-.148-.673-1.611-.922-2.206-.24-.579-.481-.501-.672-.51-.172-.008-.371-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.005a9.877 9.877 0 01-5.022-1.353l-.36-.214-3.74.98 1-3.645-.235-.373a9.851 9.851 0 01-1.503-5.251c0-5.443 4.433-9.875 9.886-9.875 2.636 0 5.116 1.026 6.983 2.894 1.864 1.865 2.893 4.346 2.893 6.988 0 5.438-4.434 9.87-9.882 9.87h-.005z" />
            </svg>
            {/* Ripple effect */}
            <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30"></span>
        </motion.a>
    );
}
