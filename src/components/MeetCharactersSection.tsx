import filmScene1 from "@/assets/film-scene-1.png";
import filmScene2 from "@/assets/film-scene-2.png";
import filmScene3 from "@/assets/film-scene-3.png";
import workshopScene from "@/assets/workshop-scene.png";
import { YOUTUBE_CHANNEL_URL } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

const MeetCharactersSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-5">
            The short film
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
            CeCe had a question nobody could answer.
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            When her tooth falls out one quiet evening, she and her little
            brother Arlo decide to find out the truth. What they discover is
            stranger, more beautiful, and more useful than either of them
            expected — and it changes how they see every tiny tooth that came
            before it.
          </p>
        </div>

        {/* Film image gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[filmScene1, filmScene2, filmScene3, workshopScene].map((img, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card group"
            >
              <img
                src={img}
                alt={`Scene from The Tooth Fairy's Magical Mission — film ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-sky/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Attribution + CTA */}
        <div className="text-center space-y-4">
          <p className="text-xs text-muted-foreground">
            An animated short film in collaboration with Peter H. Reynolds and FableVision Studios.
          </p>
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("social_click", { platform: "youtube", location: "characters_section" })}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
          >
            Watch The Tooth Fairy's Magical Mission on YouTube →
          </a>
        </div>
      </div>
    </section>
  );
};

export default MeetCharactersSection;
