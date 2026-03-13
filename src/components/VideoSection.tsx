import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Play } from "lucide-react";

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-[#EDF6FF]">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto" ref={ref}>
          <div
            className={`relative w-full aspect-video rounded-2xl bg-muted/50 border border-border flex items-center justify-center transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col items-center gap-3 text-muted-foreground">
              <div className="rounded-full bg-primary/10 p-4">
                <Play className="h-10 w-10 text-primary fill-primary" />
              </div>
              <span className="text-sm font-medium">Видео скоро</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
