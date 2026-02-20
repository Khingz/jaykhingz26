import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WEDDING_DATE = new Date("2026-04-03T15:30:00+01:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const ref = useScrollReveal();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [status, setStatus] = useState<"upcoming" | "today" | "past">(
    "upcoming"
  );

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const diff = WEDDING_DATE - now;

      const eventDate = new Date(WEDDING_DATE);
      const today = new Date();

      // Check status
      if (diff > 0 && today.toDateString() !== eventDate.toDateString()) {
        setStatus("upcoming");
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else if (today.toDateString() === eventDate.toDateString()) {
        setStatus("today");
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setStatus("past");
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    tick(); // run immediately
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  const renderContent = () => {
    switch (status) {
      case "upcoming":
        return (
          <div className="grid grid-cols-4 gap-4">
            {units.map(({ label, value }) => (
              <div key={label}>
                <span className="font-serif text-4xl sm:text-5xl text-primary font-light">
                  {String(value).padStart(2, "0")}
                </span>
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-2">
                  {label}
                </p>
              </div>
            ))}
          </div>
        );
      case "today":
        return (
          <p className="font-sans text-[2rem] tracking-[0.3em] uppercase text-muted-foreground mt-2 animate-pulse">
            🎉 Today’s the day! Let’s celebrate love! 💖
          </p>
        );
      case "past":
        return (
          <p className="font-sans text-[2rem] tracking-[0.3em] uppercase text-muted-foreground mt-2 animate-pulse">
            ⏰ The wedding has already happened… Hope it was magical! ✨
          </p>
        );
    }
  };

  return (
    <section className="py-24 px-6 bg-card">
      <div ref={ref} className="section-fade-in max-w-xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-8">
          Counting Down To
        </p>
        {renderContent()}
      </div>
    </section>
  );
};

export default CountdownTimer;