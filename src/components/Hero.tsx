import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      {/* Interactive cursor effect */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-foreground/5 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Enhanced animated dots with multiple patterns */}
      <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="grid grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-foreground rounded-full dot-float"
            />
          ))}
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute right-1/4 top-1/3 hidden lg:block">
        <Sparkles className="w-6 h-6 text-foreground/30 dot-float" />
      </div>
      
      <div className="absolute left-1/3 bottom-1/3 hidden lg:block">
        <div className="w-1 h-16 bg-foreground/20 dot-float transform rotate-45" />
      </div>

      {/* Main content with enhanced animations */}
      <div className="text-center max-w-6xl mx-auto relative z-10">
        <div className="space-y-0 mb-12">
          <h1 className={`text-4xl md:text-6xl lg:text-8xl font-black leading-none tracking-tight gradient-text ${
            isLoaded ? 'text-slide-up opacity-100' : 'opacity-0'
          }`}>
            Design
          </h1>
          <h1 className={`text-4xl md:text-6xl lg:text-8xl font-black leading-none tracking-tight gradient-text ${
            isLoaded ? 'text-slide-up opacity-100' : 'opacity-0'
          }`}>
            Transform
          </h1>
          <h1 className={`text-4xl md:text-6xl lg:text-8xl font-black leading-none tracking-tight gradient-text ${
            isLoaded ? 'text-slide-up opacity-100' : 'opacity-0'
          }`}>
            Accelerate
          </h1>
        </div>
        
        <div className={`space-y-6 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto font-light leading-relaxed">
            Redefining user experiences through Behavioural Science & AI
          </p>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-px bg-foreground/30" />
            <p className="text-base md:text-lg font-medium text-foreground/80 px-4">
              Your trusted UI UX design agency
            </p>
            <div className="w-12 h-px bg-foreground/30" />
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center transition-all duration-1000 delay-1500 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <p className="text-sm text-muted-foreground mb-3 tracking-wide">SCROLL</p>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-foreground/50 to-transparent" />
          <ArrowDown className="w-4 h-4 text-muted-foreground bounce-arrow" />
        </div>
      </div>
    </section>
  );
};