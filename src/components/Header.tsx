import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-6'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo with animation */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <span className="text-background font-bold text-sm">L9</span>
              </div>
              <div className="absolute inset-0 bg-foreground rounded-full opacity-20 scale-0 group-hover:scale-150 transition-transform duration-500" />
            </div>
            <span className="font-bold text-xl transition-all duration-300 group-hover:tracking-wider">leo9</span>
          </div>

          {/* Desktop Navigation with enhanced animations */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "#work", label: "Work" },
              { href: "#services", label: "Services", hasDropdown: true },
              { href: "#clients", label: "Clients" },
              { href: "#about", label: "About", hasDropdown: true },
              { href: "#knowledge", label: "Knowledge" },
            ].map((item) => (
              <div key={item.label} className="relative group">
                <a 
                  href={item.href} 
                  className="text-foreground hover:text-muted-foreground transition-all duration-300 flex items-center relative overflow-hidden"
                >
                  <span className="relative z-10">{item.label}</span>
                  {item.hasDropdown && <span className="ml-1 text-xs opacity-60">•</span>}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
                </a>
              </div>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="hidden md:flex items-center space-x-2 text-xs"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span>Switch Mode</span>
            </Button>

            {/* Contact button */}
            <Button variant="default" size="sm" className="hidden md:block">
              Contact
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#work" className="text-foreground hover:text-muted-foreground transition-colors">
                Work
              </a>
              <a href="#services" className="text-foreground hover:text-muted-foreground transition-colors">
                Services
              </a>
              <a href="#clients" className="text-foreground hover:text-muted-foreground transition-colors">
                Clients
              </a>
              <a href="#about" className="text-foreground hover:text-muted-foreground transition-colors">
                About
              </a>
              <a href="#knowledge" className="text-foreground hover:text-muted-foreground transition-colors">
                Knowledge
              </a>
              <div className="flex items-center space-x-4 pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDarkMode}
                  className="flex items-center space-x-2 text-xs"
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  <span>Switch Mode</span>
                </Button>
                <Button variant="default" size="sm">
                  Contact
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};