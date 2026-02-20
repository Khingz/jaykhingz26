import { useScrollReveal } from "@/hooks/useScrollReveal";

const colors = [
  { name: "Navy Blue", hsl: "220 50% 18%" },
  { name: "Sky Blue", hsl: "200 60% 62%" },
  { name: "Champagne Gold", hsl: "40 55% 58%" },
];

const DressCodeSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 px-6 bg-card">
      <div ref={ref} className="section-fade-in max-w-lg mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
          Aso-Ebi / Dress Code
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-10">
          Colours of the Day
        </h2>

        <div className="flex justify-center">
          {colors.map(({ name, hsl }) => (
            <div key={name} className="flex flex-col items-center gap-3 w-full">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-primary/30"
                style={{ backgroundColor: `hsl(${hsl})` }}
              />
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground break-words">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;
