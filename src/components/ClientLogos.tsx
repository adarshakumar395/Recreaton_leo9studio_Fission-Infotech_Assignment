import { useEffect, useState } from "react";

export const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Enhanced client list with more variety
  const clients = [
    { name: "KPIT", logo: "KPIT", size: "text-xl" },
    { name: "TATA", logo: "TATA", size: "text-2xl" },
    { name: "BMW", logo: "BMW", size: "text-xl" },
    { name: "SONY", logo: "SONY", size: "text-xl" },
    { name: "Huggies", logo: "Huggies", size: "text-lg" },
    { name: "ETON", logo: "ETON", size: "text-xl" },
    { name: "KIMIRICA", logo: "KIMIRICA", size: "text-lg" },
    { name: "INDIUM", logo: "INDIUM", size: "text-xl" },
    { name: "Choice", logo: "Choice", size: "text-lg" },
    { name: "Star", logo: "★ Star", size: "text-xl" },
    { name: "Apple", logo: "Apple", size: "text-xl" },
    { name: "Google", logo: "Google", size: "text-lg" },
  ];

  // Triple for smoother infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('client-logos');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="client-logos" className="py-24 overflow-hidden border-t border-border/50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-between mb-16">
            <p className="text-muted-foreground text-sm tracking-wide uppercase">
              Trusted by industry leaders
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-px bg-foreground/20" />
              <span className="text-xs text-muted-foreground">50+ clients</span>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="flex space-x-20 animate-scroll hover:animation-pause">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[140px] h-20 hover-grow cursor-pointer group"
              >
                <span className={`${client.size} font-light text-foreground/70 hover:text-foreground transition-all duration-300 whitespace-nowrap tracking-wide group-hover:scale-110`}>
                  {client.logo}
                </span>
              </div>
            ))}
          </div>
          
          {/* Enhanced gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Statistics */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {[
            { number: "50+", label: "Happy Clients" },
            { number: "200+", label: "Projects Done" },
            { number: "5Y+", label: "Experience" },
            { number: "99%", label: "Success Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};