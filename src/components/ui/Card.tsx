import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export function Card({
    className,
    children,
    hoverEffect = false,
    ...props
}: CardProps) {
    const baseStyles =
        "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white";

    if (hoverEffect) {
        return (
            <motion.div
                whileHover={{ y: -5 }}
                className={cn(baseStyles, "transition-shadow hover:shadow-[0_8px_30px_rgba(138,43,226,0.15)] hover:border-cyan-400/30", className)}
                {...(props as HTMLMotionProps<"div">)}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <div className={cn(baseStyles, className)} {...props}>
            {children}
        </div>
    );
}
