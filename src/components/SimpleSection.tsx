import sectionThreeImage from "@/assets/4.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const SimpleSection = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-8 lg:gap-12 items-center">
            {/* Left side - Interface mockup */}
            <div 
              ref={imageRef}
              className={`relative order-2 lg:order-1 transition-all duration-700 ease-out delay-150 ${
                imageVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <img 
                src={sectionThreeImage}
                alt="Flumen помнит детали и предпочтения для создания документов"
                className="w-[250%] h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right side - Text content */}
            <div 
              ref={textRef}
              className={`space-y-6 order-1 lg:order-2 transition-all duration-700 ease-out ${
                textVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Помнит детали
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-light">
                Запоминает особенности формирования ваших документов, предпочтения заказчиков — всю необходимую информацию, чтобы Flumen мог стать вашей цифровой копией в создании любых документов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSection;
