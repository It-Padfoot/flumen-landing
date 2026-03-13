import workflowImage from "@/assets/workflow-image.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WorkflowSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-[#EDF6FF]">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={ref}
            className={`relative group cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Image */}
            <img 
              src={workflowImage}
              alt="AI workflow integration"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Hover overlay with text */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                ИИ внутри вашего рабочего процесса
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
