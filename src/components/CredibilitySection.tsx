const CredibilitySection = () => {
  return (
    <section className="py-14 md:py-16 bg-secondary/40 border-y border-border">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
            The world is real. The story keeps growing.
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            The short film is the beginning. A book and the ToothSafe are being
            made with the same care. Join the Workshop to follow along quietly.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { label: "The short film", detail: "Watch now" },
              { label: "The book", detail: "Being written" },
              { label: "The ToothSafe", detail: "Being made" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1 px-5 py-3 rounded-2xl bg-background border border-border shadow-sm min-w-[160px]"
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {item.detail}
                </span>
                <span className="text-sm text-foreground font-medium text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            An animated short film in collaboration with Peter H. Reynolds and FableVision Studios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
