import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import SkillCard from "@/components/skills/SkillCard";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Database,
  GitBranch,
  Globe,
  Smartphone,
  Server,
} from "lucide-react";

const skills = [
  { name: "HTML", icon: Code2, level: 95 },
  { name: "CSS", icon: Palette, level: 90 },
  { name: "JavaScript", icon: Braces, level: 88 },
  { name: "React", icon: Atom, level: 85 },
  { name: "Python", icon: Server, level: 75 },
  { name: "MySQL", icon: Database, level: 80 },
  { name: "Git", icon: GitBranch, level: 85 },
  { name: "APIs", icon: Globe, level: 82 },
  { name: "Responsive Design", icon: Smartphone, level: 92 },
];

const Skills = () => {
  return (
    <>
      <Helmet>
        <title>Skills | Amar Bala Adam</title>
        <meta
          name="description"
          content="Technical skills of Amar Bala Adam - HTML, CSS, JavaScript, React, Python, MySQL, and more."
        />
      </Helmet>
      <Layout>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up opacity-0">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                My <span className="gradient-text">Skills</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life and create exceptional web experiences.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="animate-fade-up opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <SkillCard {...skill} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Skills;
