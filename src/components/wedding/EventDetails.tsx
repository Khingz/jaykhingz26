import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, Clock, MapPin } from "lucide-react";

const details = [
  { icon: Calendar, label: "Date", value: "Friday, April 3rd, 2026" },
  { icon: Clock, label: "Time", value: "2:30 PM" },
  { icon: MapPin, label: "Venue", value: "Ojuwo, Ayingba\nBehind CMML Mission Headquarters\nAyingba, Dekina LGA\nKogi State, Nigeria" },
];

const EventDetails = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 px-6 bg-card">
      <div ref={ref} className="section-fade-in max-w-lg mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-10">
          Event Details
        </p>

        <div className="space-y-10">
          {details.map(({ icon: Icon, label, value }) => (
            <div key={label}>
              <Icon className="w-5 h-5 text-primary mx-auto mb-3" strokeWidth={1.5} />
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                {label}
              </p>
              <p className="font-serif text-lg text-foreground whitespace-pre-line leading-relaxed">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
