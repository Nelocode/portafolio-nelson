import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: "default" | "cyan" | "magenta" | "purple";
}

export function Badge({
    className,
    children,
    variant = "default",
    ...props
}: BadgeProps) {
    const baseStyles = "inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-mono font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2";

    const variants = {
        default: "border-transparent bg-white/10 text-white hover:bg-white/20",
        cyan: "border-transparent bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20",
        magenta: "border-transparent bg-magenta-500/10 text-magenta-500 hover:bg-magenta-500/20",
        purple: "border-transparent bg-neon-purple/10 text-neon-purple hover:bg-neon-purple/20",
    };

    return (
        <span className={cn(baseStyles, variants[variant], className)} {...props}>
            {children}
        </span>
    );
}
