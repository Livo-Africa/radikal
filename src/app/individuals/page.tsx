// src/app/individuals/page.tsx
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import HeroSection from '@/components/individuals/HeroSection';
import PackageShowcase from '@/components/individuals/PackageShowcase';
import ProcessSection from '@/components/individuals/ProcessSection';
import TransformationsGallery from '@/components/individuals/TransformationsGallery';
import AddOnsMarketplace from '@/components/individuals/AddOnsMarketplace';
import FAQSection from '@/components/individuals/FAQSection';
import FinalCTA from '@/components/individuals/FinalCTA';

export default function IndividualsPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <PackageShowcase />
        <ProcessSection />
        <TransformationsGallery />
        <AddOnsMarketplace />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}