"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';
import { DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal 
          logoSrc="/images/logo.svg" 
          buttonText="Get Started" 
          onButtonClick={() => console.log('Get Started Clicked')} 
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero 
          title="Welcome to BlueCrypto Store" 
          subtitle="Explore the future of crypto with us!" 
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout 
          description="At BlueCrypto Store, we are committed to simplifying your crypto experience with cutting-edge products and services." 
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D 
          title="How to Buy" 
          steps={[
            { title: "Step 1", description: "Create an account", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Fund your account", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Make your first purchase", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]} 
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics 
          title="Tokenomics Overview" 
          description="Transparent and fair token distribution ensures stability for our investors." 
          kpiItems={[
            { value: "100M", description: "Total Supply", icon: DollarSign },
            { value: "10M", description: "Initial Burn", icon: DollarSign }
          ]} 
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient 
          logoSrc="/images/logo.svg" 
          logoText="© 2023 BlueCrypto Store" 
          items={[
            { label: "Privacy Policy", onClick: () => console.log('Privacy Policy Clicked') },
            { label: "Terms of Service", onClick: () => console.log('Terms Clicked') },
            { label: "Contact Us", onClick: () => console.log('Contact Us Clicked') },
          ]} 
        />
      </div>
    </SiteThemeProvider>
  );
}
