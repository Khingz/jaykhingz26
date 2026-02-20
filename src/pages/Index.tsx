import HeroSection from "@/components/wedding/HeroSection";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import InvitationMessage from "@/components/wedding/InvitationMessage";
import EventDetails from "@/components/wedding/EventDetails";
import VenueSection from "@/components/wedding/VenueSection";
import GallerySection from "@/components/wedding/GallerySection";
import DressCodeSection from "@/components/wedding/DressCodeSection";
import RsvpSection from "@/components/wedding/RsvpSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CountdownTimer />
      <InvitationMessage />
      <EventDetails />
      <VenueSection />
      <GallerySection />
      <DressCodeSection />
      <RsvpSection />
      <Footer />
    </main>
  );
};

export default Index;
