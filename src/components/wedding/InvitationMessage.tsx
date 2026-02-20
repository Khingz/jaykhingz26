import { useScrollReveal } from "@/hooks/useScrollReveal";

const InvitationMessage = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 px-6">
      <div ref={ref} className="section-fade-in max-w-lg mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">
          You Are Cordially Invited
        </p>

        <div className="gold-line h-px w-16 mx-auto mb-10" />

        <p className="font-serif text-lg sm:text-xl leading-relaxed text-foreground/90 mb-8">
          The Family of Late Mr. John Adaji &amp; Mrs. Elizabeth Adaji
        </p>

        <p className="font-serif text-xl text-primary italic mb-8">and</p>

        <p className="font-serif text-lg sm:text-xl leading-relaxed text-foreground/90 mb-10">
          Mr. &amp; Mrs. Lucky Akpan Moses
        </p>

        <p className="font-serif text-base leading-relaxed text-muted-foreground">
          cordially invite you to witness and celebrate the Traditional Marriage Ceremony
          of their beloved children
        </p>

        <div className="mt-10">
          <h3 className="font-script text-4xl sm:text-5xl text-primary">
            Ojima Gloria Adaji
          </h3>
          <p className="font-serif text-xl text-champagne my-3">&amp;</p>
          <h3 className="font-script text-4xl sm:text-5xl text-primary">
            Kingsley Lucky Akpan
          </h3>
        </div>

        <div className="gold-line h-px w-16 mx-auto mt-10" />
      </div>
    </section>
  );
};

export default InvitationMessage;
