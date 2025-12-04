import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "amarbadam521@gmail.com",
    href: "mailto:amarbadam521@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Available Worldwide",
    href: null,
  },
];

const socialLinks = [
  { icon: Facebook, name: "Facebook", href: "https://fb.com/@amarbala" },
  { icon: Twitter, name: "X (Twitter)", href: "https://x.com/@amarbala" },
  { icon: Linkedin, name: "LinkedIn", href: "https://linkedin.com/@amarbala" },
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Amar Bala Adam</title>
        <meta
          name="description"
          content="Get in touch with Amar Bala Adam for web development projects and collaboration opportunities."
        />
      </Helmet>
      <Layout>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up opacity-0">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="animate-fade-up opacity-0 stagger-1">
                <div className="glass p-8 rounded-2xl">
                  <h2 className="text-2xl font-heading font-semibold mb-6">
                    Send a Message
                  </h2>
                  <ContactForm />
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8 animate-fade-up opacity-0 stagger-2">
                <div className="glass p-8 rounded-2xl">
                  <h2 className="text-2xl font-heading font-semibold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.title} className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                          <item.icon size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.title}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="glass p-8 rounded-2xl">
                  <h2 className="text-2xl font-heading font-semibold mb-6">
                    Follow Me
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-primary transition-all duration-300"
                      >
                        <social.icon size={20} />
                        <span className="font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
