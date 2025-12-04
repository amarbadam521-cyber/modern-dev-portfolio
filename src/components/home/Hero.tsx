import { Link } from "react-router-dom";
import { ArrowRight, Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-primary font-medium mb-4 animate-fade-up opacity-0 stagger-1">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 animate-fade-up opacity-0 stagger-2">
              Amar Bala Adam
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading text-muted-foreground mb-6 animate-fade-up opacity-0 stagger-3">
              <span className="gradient-text">Web Developer</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up opacity-0 stagger-4">
              Crafting modern, responsive, and user-friendly web experiences with 3 years of professional experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0 stagger-5">
              <Button variant="hero" size="xl" asChild>
                <Link to="/projects">
                  View My Projects
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="/cv.pdf" download>
                  <Download size={20} />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Image Container */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up opacity-0 stagger-3">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 animate-pulse-glow">
                <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-card border border-border flex items-center justify-center overflow-hidden">
                  {/* Placeholder for profile image */}
                  <User size={80} className="text-muted-foreground/50" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/60 rounded-full animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
