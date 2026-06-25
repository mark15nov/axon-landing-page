import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import ScrollspyBlock from "@/components/ScrollspyBlock";
import SocialProof from "@/components/SocialProof";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import CTAFooter from "@/components/CTAFooter";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ClientLogos />
      <ScrollspyBlock />
      <SocialProof />
      <Security />
      <FAQ />
      <CTAFooter />
    </main>
  );
}
