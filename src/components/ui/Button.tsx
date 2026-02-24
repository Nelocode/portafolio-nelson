"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost" | "neon";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export function Button({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
        primary: "bg-white text-black hover:bg-neutral-200",
        outline: "border border-white/20 bg-transparent hover:bg-white/10 text-white",
        ghost: "bg-transparent text-white hover:bg-white/10",
        neon: "bg-magenta-500 text-white hover:bg-magenta-400 shadow-[0_0_15px_rgba(255,0,255,0.5)] hover:shadow-[0_0_25px_rgba(255,0,255,0.8)] border border-magenta-400/50",
    };

    const sizes = {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
    };

    return (
        <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ y: 0, scale: 0.98 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...(props as HTMLMotionProps<"button">)}
        >
            {children}
        </motion.button>
    );
}
