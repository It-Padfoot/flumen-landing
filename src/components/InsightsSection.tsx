import sectionOneImage from "@/assets/1.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const InsightsSection = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,2fr] gap-8 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <div 
              ref={textRef}
              className={`space-y-4 transition-all duration-700 ease-out ${
                textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Продумывает Редактирует
                Оформляет
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-light space-y-3">
                Flumen создаёт и редактирует существующие документы DOCX и DOC прямо в Word. Оформляет текст, используя все возможности редактора: стили, таблицы, нумерацию и форматирование.
              </p>
            </div>

            {/* Right side - Interface mockup */}
            <div 
              ref={imageRef}
              className={`relative transition-all duration-700 ease-out delay-150 ${
                imageVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <img 
                src={sectionOneImage}
                alt="Flumen помогает продумывать, редактировать и оформлять документы"
                className="w-[250%] h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
