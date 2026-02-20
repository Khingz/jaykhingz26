import { useScrollReveal } from "@/hooks/useScrollReveal";

const VenueSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 px-6">
      <div ref={ref} className="section-fade-in max-w-lg mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-10">
          Venue &amp; Directions
        </p>

        <div className="rounded overflow-hidden border border-border mb-8">
          <iframe
            title="Wedding Venue"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31488.06!2d6.73!3d7.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104a0d5b5c4b2b1d%3A0x1c5a5c5b5c4b2b1d!2sAyingba%2C%20Kogi%20State!5e0!3m2!1sen!2sng!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="font-serif text-lg text-foreground mb-2">
          Ojuwo, Ayingba
        </p>
        <p className="font-serif text-base text-muted-foreground leading-relaxed">
          Behind CMML Mission Headquarters<br />
          Ayingba, Dekina LGA<br />
          Kogi State, Nigeria
        </p>
      </div>
    </section>
  );
};

export default VenueSection;
