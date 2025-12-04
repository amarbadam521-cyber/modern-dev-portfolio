import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Facebook, Mail } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://fb.com/@amarbala", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/@amarbala", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/@amarbala", label: "LinkedIn" },
  { icon: Mail, href: "mailto:amarbadam521@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <Link to="/" className="text-2xl font-heading font-bold gradient-text">
              AB
            </Link>
            <p className="text-muted-foreground text-sm mt-2">
              Building digital experiences with passion.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Amar Bala Adam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
