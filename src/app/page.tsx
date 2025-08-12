import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Companies from "@/components/sections/Companies";
import Technology from "@/components/sections/Technology";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsappButton";

export const metadata: Metadata = {
  metadataBase: new URL("http://rekayasamineralutama.com/"),
  title: "RMU Group - Advanced Mining Technology & Construction Services",
  description:
    "Leading provider of MPAL technology for sustainable mineral processing, marine sand mining, and comprehensive construction services in Indonesia.",
};

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <Hero />
      <About />
      <Companies />
      <Technology />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
