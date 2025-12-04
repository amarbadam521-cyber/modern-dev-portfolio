import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { User, Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "3+ Years", description: "Professional Experience" },
  { icon: Lightbulb, title: "Problem Solver", description: "Creative Solutions" },
  { icon: Rocket, title: "Always Learning", description: "New Technologies" },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Amar Bala Adam</title>
        <meta
          name="description"
          content="Learn more about Amar Bala Adam - a passionate web developer with 3 years of experience."
        />
      </Helmet>
      <Layout>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image Container */}
              <div className="flex justify-center animate-fade-up opacity-0">
                <div className="relative">
                  <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 glow-soft">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-card border border-border flex items-center justify-center overflow-hidden">
                      {/* Placeholder for about image */}
                      <User size={100} className="text-muted-foreground/50" />
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-lg rotate-12 animate-float" />
                  <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-primary/30 rounded-lg -rotate-12 animate-float" style={{ animationDelay: "1.5s" }} />
                </div>
              </div>

              {/* Content */}
              <div className="animate-fade-up opacity-0 stagger-2">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  About <span className="gradient-text">Me</span>
                </h1>
                
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                  <p>
                    My name is <span className="text-foreground font-medium">Amar Bala Adam</span>, a passionate and dedicated Web Developer with 3 years of experience.
                  </p>
                  <p>
                    I specialize in building fast, responsive, and user-friendly websites using modern web technologies. I enjoy solving problems, improving user experience, and bringing creative ideas to life through clean and efficient code.
                  </p>
                  <p>
                    I'm constantly learning, upgrading my skills, and exploring new technologies to become a stronger developer.
                  </p>
                </div>

                {/* Highlights */}
                <div className="grid sm:grid-cols-3 gap-4">
                  {highlights.map((item, index) => (
                    <div
                      key={item.title}
                      className="glass p-4 rounded-xl text-center hover-lift"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary inline-flex mb-3">
                        <item.icon size={24} />
                      </div>
                      <h3 className="font-heading font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
