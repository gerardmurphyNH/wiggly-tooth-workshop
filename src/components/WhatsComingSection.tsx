import { Film, BookOpen, Package } from "lucide-react";
import filmScene1 from "@/assets/film-scene-1.webp";
import filmScene2 from "@/assets/film-scene-2.webp";
import filmScene3 from "@/assets/film-scene-3.webp";
import workshopScene from "@/assets/workshop-scene.webp";

const cards = [
  {
    icon: Film,
    title: "Animated Short Film",
    label: "Coming Summer 2026",
    description: "Join a curious child on a midnight journey to discover what the Tooth Fairy really does with all those tiny teeth.",
  },
  {
    icon: BookOpen,
    title: "The Book",
    label: "Coming soon",
    description: "A beautifully illustrated children's book that answers the questions every child wonders about.",
  },
  {
    icon: Package,
    title: "ToothSafe",
    label: "Coming soon",
    description: "A special place to keep your tooth safe for the Tooth Fairy - designed by the workshop itself.",
  },
];

const filmImages = [
  { src: filmScene1, alt: "Arlo and CeCe discover the Tooth Fairy's world in The Tooth Fairy's Magical Mission animated short film" },
  { src: filmScene2, alt: "The Tooth Fairy flying on a midnight journey — scene from The Tooth Fairy's Magical Mission children's animated film" },
  { src: filmScene3, alt: "A magical moment inside the Tooth Fairy's workshop — from The Tooth Fairy's Magical Mission animated film for kids" },
  { src: workshopScene, alt: "Inside the Wiggly Tooth Workshop where lost teeth are sorted by their good qualities — scene from The Tooth Fairy's Magical Mission" },
];

const WhatsComingSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What's Coming
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A world of wonder is being crafted in the workshop
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="magical-card group hover:shadow-magical transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
                  <card.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {card.label}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Film teaser gallery */}
        <div className="mb-8">
          <h3 className="font-display text-xl font-semibold text-foreground text-center mb-6">
            Peek into the magic
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {filmImages.map((img, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-sky/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Animated short film in development in collaboration with Peter H. Reynolds and FableVision Studios.
        </p>
      </div>
    </section>
  );
};

export default WhatsComingSection;
