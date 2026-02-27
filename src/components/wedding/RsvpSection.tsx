import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { DotLoader } from "../ui/dot-loader";

const RsvpSection = () => {
  const ref = useScrollReveal();
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    guests: "1",
    attending: "yes",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          guest: form.guests,
          attending: form.attending,
          message: form.message ? form.message != "" : "No message was left",
          Total: "XX",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "RSVP Received!",
        description: `Thank you, ${form.name}. We have received your RSVP and look forward to seeing you and celebrating with you!`,
      });

      setForm({ name: "", guests: "1", attending: "yes", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6">
      <div ref={ref} className="section-fade-in max-w-md mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
          Kindly Respond
        </p>
        <h2 className="font-script text-4xl sm:text-5xl text-primary mb-10">
          RSVP
        </h2>

        <form
          name="RSVP Form"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="space-y-5 text-left"
        >
          <input type="hidden" name="form-name" value="RSVP Form" />
          <input type="hidden" name="bot-field" />
          <div>
            <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">
              Full Name
            </label>
            <Input
              required
              value={form.name}
              name="Full name"
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
              name="Number of guest"
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
                  name="Will you attend"
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

          <div>
            <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">
              Leave us a message
            </label>
            <textarea
              placeholder="Enter your message..."
              value={form.message}
              name="message"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="border-[hsl(var(--border))] bg-muted font-serif text-foreground w-full h-[10rem] p-2 resize-none rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
          </div>

          <Button
            type="submit"
            className="w-full mt-4 bg-primary text-primary-foreground font-sans text-xs tracking-[0.3em] uppercase hover:bg-primary/90 py-6 flex justify-center items-center"
            disabled={loading}
          >
            {loading ? <DotLoader /> : "Send RSVP"}
          </Button>
        </form>

        <div className="mt-12">
          <div className="gold-line h-px w-16 mx-auto mb-6" />
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
            For Enquiries
          </p>
          <p className="font-serif text-lg text-foreground">
            <a
              href="tel:08163792207"
              className="hover:text-primary transition-colors"
            >
              0816 379 2207
            </a>
          </p>
          <p className="font-serif text-lg text-foreground">
            <a
              href="tel:09059113756"
              className="hover:text-primary transition-colors"
            >
              0905 911 3756
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
