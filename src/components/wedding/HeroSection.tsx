const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/images/hero.jpeg)` }}
      />
      <div className="absolute inset-0 bg-background/65" />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold-light opacity-0 animate-fade-up mb-8">
          Traditional Marriage Ceremony
        </p>

        <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-primary opacity-0 animate-fade-up-delay-1 leading-tight">
          Ojima Gloria
        </h1>

        <p className="font-serif text-2xl sm:text-3xl text-champagne opacity-0 animate-fade-up-delay-2 my-4">
          &amp;
        </p>

        <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-primary opacity-0 animate-fade-up-delay-2 leading-tight">
          Kingsley Akpan
        </h1>

        <div className="gold-line h-px w-32 mx-auto my-8 opacity-0 animate-fade-up-delay-3" />

        <p className="font-sans text-sm tracking-[0.3em] uppercase text-foreground opacity-0 animate-fade-up-delay-3">
          Friday, April 3rd, 2026
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up-delay-3">
        <div className="w-5 h-8 border border-primary/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
