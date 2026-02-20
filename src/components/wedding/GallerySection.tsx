import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MediaItem {
  id: number;
  type: "image" | "video";
  url: string;
  caption?: string;
}

const galleryMedia: MediaItem[] = [
  {
    id: 1,
    type: "image",
    url: "/images/1.jpeg",
    caption: "Together Forever",
  },
  {
    id: 2,
    type: "image",
    url: "/images/2.jpeg",
    caption: "Our Journey",
  },
  {
    id: 3,
    type: "image",
    url: "/images/3.jpeg",
    caption: "A Beautiful Bond",
  },
  {
    id: 4,
    type: "image",
    url: "/images/4.jpeg",
    caption: "Love & Laughter",
  },
  {
    id: 5,
    type: "image",
    url: "/images/5.jpeg",
    caption: "Moments We Cherish",
  },
  {
    id: 6,
    type: "image",
    url: "/images/6.jpeg",
    caption: "Two Hearts, One Love",
  },
    {
    id: 6,
    type: "image",
    url: "/images/7.jpeg",
    caption: "Two Hearts, One Love",
  },
];

const GallerySection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent((index + galleryMedia.length) % galleryMedia.length);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(next, 6000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, next]);

  // Autoplay videos
  useEffect(() => {
    if (galleryMedia[current].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [current]);

  const item = galleryMedia[current];

  return (
    <section className="py-20 px-6 bg-navy-deep">
      <div className="max-w-4xl mx-auto">
        <p className="font-script text-4xl sm:text-5xl text-primary text-center mb-3">
          Our Moments
        </p>
        <div className="gold-line h-px w-24 mx-auto mb-4" />
        <p className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-12">
          A Love Story in Pictures
        </p>

        {/* Slideshow */}
        <div className="relative w-full aspect-[16/10] rounded overflow-hidden border border-border/30 bg-muted/20 group">
          {/* Media */}
          {item.type === "image" ? (
            <img
              key={item.id}
              src={item.url}
              alt={item.caption || "Gallery image"}
              className="absolute inset-0 w-full h-full object-cover animate-fade-in"
            />
          ) : (
            <video
              key={item.id}
              ref={videoRef}
              src={item.url}
              muted
              playsInline
              loop
              className="absolute inset-0 w-full h-full object-cover animate-fade-in"
            />
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20 pointer-events-none" />

          {/* Caption */}
          {item.caption && (
            <p className="absolute bottom-12 left-0 right-0 text-center font-script text-2xl sm:text-3xl text-primary drop-shadow-lg">
              {item.caption}
            </p>
          )}

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/40 backdrop-blur-sm border border-border/30 flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/40 backdrop-blur-sm border border-border/30 flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryMedia.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-6"
                    : "bg-foreground/30 hover:bg-foreground/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
