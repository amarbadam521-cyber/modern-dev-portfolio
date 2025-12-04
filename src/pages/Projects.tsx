import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/projects/ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, payment integration, and user authentication.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks with drag-and-drop functionality and team collaboration.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    tags: ["React", "TypeScript", "API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with location-based forecasts and interactive maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    tags: ["JavaScript", "API", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Blog Platform",
    description: "A content management system for creating and managing blog posts with rich text editing.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    tags: ["React", "Python", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media metrics and engagement across platforms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["React", "Chart.js", "API"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Amar Bala Adam</title>
        <meta
          name="description"
          content="Explore web development projects by Amar Bala Adam - from e-commerce platforms to productivity apps."
        />
      </Helmet>
      <Layout>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up opacity-0">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                My <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A collection of web applications I've built, showcasing my skills in frontend and backend development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="animate-fade-up opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Projects;
