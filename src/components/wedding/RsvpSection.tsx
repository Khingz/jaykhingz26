import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const RsvpSection = () => {
  const ref = useScrollReveal();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", guests: "1", attending: "yes" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "RSVP Received!",
      description: `Thank you, ${form.name}. We look forward to celebrating with you!`,
    });
    setForm({ name: "", guests: "1", attending: "yes" });
  };

  return (
    <section className="py-24 px-6">
      <div ref={ref} className="section-fade-in max-w-md mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
          Kindly Respond
        </p>
        <h2 className="font-script text-4xl sm:text-5xl text-primary mb-10">RSVP</h2>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">
              Full Name
            </label>
            <Input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-muted border-border font-serif text-foreground"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">
              Number of Guests
            </label>
            <Input
              type="number"
              min="1"
              max="10"
              required
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
              className="bg-muted border-border font-serif text-foreground"
            />
          </div>

          <div>
            <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">
              Will You Attend?
            </label>
            <div className="flex gap-4">
              {["yes", "no"].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setForm({ ...form, attending: val })}
                  className={`flex-1 py-3 border font-sans text-xs tracking-[0.2em] uppercase transition-colors ${
                    form.attending === val
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {val === "yes" ? "Joyfully Accept" : "Regretfully Decline"}
                </button>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full mt-4 bg-primary text-primary-foreground font-sans text-xs tracking-[0.3em] uppercase hover:bg-primary/90 py-6"
          >
            Send RSVP
          </Button>
        </form>

        <div className="mt-12">
          <div className="gold-line h-px w-16 mx-auto mb-6" />
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
            For Enquiries
          </p>
          <p className="font-serif text-lg text-foreground">
            <a href="tel:08163792207" className="hover:text-primary transition-colors">0816 379 2207</a>
          </p>
          <p className="font-serif text-lg text-foreground">
            <a href="tel:09059113756" className="hover:text-primary transition-colors">0905 911 3756</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
