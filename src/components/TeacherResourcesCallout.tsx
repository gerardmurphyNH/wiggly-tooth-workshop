import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, BookOpen } from "lucide-react";
import { trackTeacherResourcesPageClick } from "@/lib/analytics";

const TeacherResourcesCallout = () => {
  return (
    <section className="py-10 md:py-14 bg-primary/5 border-y border-primary/10">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Icon */}
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
              For Teachers
            </span>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
              Free Tooth Fairy Printables for Your Classroom
            </h2>
            <p className="text-sm text-muted-foreground">
              Three ready-to-use activities for Grades 1–2. Worksheet, teacher guide, and coloring page. No prep, no sign-up.
            </p>
          </div>

          {/* CTAs */}
          <div className="shrink-0 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3">
            <Button
              variant="magical"
              size="default"
              asChild
            >
              <a
                href="/downloads/tooth-fairy-activity-bundle.zip"
                download="tooth-fairy-activity-bundle.zip"
                onClick={() => trackTeacherResourcesPageClick("homepage_callout_bundle")}
              >
                <Download className="w-4 h-4" />
                Download All 3
              </a>
            </Button>
            <Button
              variant="outline"
              size="default"
              asChild
            >
              <Link
                to="/tooth-fairy-printables"
                onClick={() => trackTeacherResourcesPageClick("homepage_callout_see_all")}
              >
                See resources
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherResourcesCallout;
