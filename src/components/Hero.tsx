
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-purple-500/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-neon-cyan rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-black mb-6 glow-text">
            ALEX CHEN
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
            Crafting digital experiences with cutting-edge technology and innovative design
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => scrollToSection("projects")}
              className="neon-button px-8 py-3 text-lg font-semibold rounded-lg border-0"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="px-8 py-3 text-lg font-semibold rounded-lg border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-gray-900 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-neon-cyan w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
