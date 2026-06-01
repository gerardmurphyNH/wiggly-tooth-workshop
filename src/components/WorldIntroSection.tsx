import { Shield, Heart, Lightbulb, Clock, Sparkles } from "lucide-react";

const virtues = [
  {
    icon: Shield,
    name: "Courage",
    description: "The bravery to try something scary",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Heart,
    name: "Kindness",
    description: "The warmth to care for others",
    color: "bg-rose-100 text-rose-700",
  },
  {
    icon: Lightbulb,
    name: "Creativity",
    description: "The spark to imagine something new",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Clock,
    name: "Patience",
    description: "The stillness to wait for what matters",
    color: "bg-violet-100 text-violet-700",
  },
];

const WorldIntroSection = () => {
  return (
    <section id="world" className="pt-20 md:pt-28 pb-12 md:pb-16 bg-background">
      <div className="container px-6">
        {/* Top: the big question */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-5">
            What's really happening
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            What does the Tooth Fairy
            <br />
            really do with your teeth?
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Every lost tooth holds something invisible. Something the Tooth Fairy
              is specifically looking for — a quality that grew inside the tooth
              while it was yours.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              A tooth from a child who faced something scary holds courage. One
              from a child who shared when it cost them something holds kindness.
              The Tooth Fairy takes these qualities and puts them back into the
              world, quietly, where they're needed most.
            </p>
          </div>
        </div>

        {/* Virtue grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {virtues.map((virtue) => (
            <div
              key={virtue.name}
              className="magical-card flex flex-col items-center text-center gap-3 hover:shadow-magical hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${virtue.color}`}>
                <virtue.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">{virtue.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{virtue.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing note */}
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Each tooth carries exactly one — just at different strengths</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldIntroSection;
