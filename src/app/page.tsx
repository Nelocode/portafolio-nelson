import { Hero } from "@/components/sections/Hero";
import { Profile } from "@/components/sections/Profile";
import { Expertise } from "@/components/sections/Expertise";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#0A0A12] selection:bg-magenta-500/30 selection:text-white pb-10">
            <Hero />
            <Profile />
            <Expertise />
            <Portfolio />
            <Contact />
            <WhatsAppButton />
        </main>
    );
}
