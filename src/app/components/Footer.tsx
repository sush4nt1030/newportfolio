import { Link } from "react-router";
import { Github, Linkedin, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-semibold">Twilr Production</h3>
            <p className="text-sm text-muted-foreground">
              Creative digital solutions for growing businesses
            </p>
          </div>

          {/* Quick Links */}
          <nav className="space-y-4" aria-label="Footer quick links">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <nav className="space-y-4" aria-label="Footer services">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/graphic-design" className="text-muted-foreground hover:text-foreground transition-colors">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to="/services/web-design" className="text-muted-foreground hover:text-foreground transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/services/social-media" className="text-muted-foreground hover:text-foreground transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link to="/services/wordpress" className="text-muted-foreground hover:text-foreground transition-colors">
                  WordPress Development
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4" role="list" aria-label="Social media links">
              <a
                href="mailto:contact@twilrproduction.com"
                className="p-2 rounded-md bg-accent hover:bg-accent/80 transition-colors"
                aria-label="Email Twilr Production"
                role="listitem"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-accent hover:bg-accent/80 transition-colors"
                aria-label="LinkedIn profile"
                role="listitem"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-accent hover:bg-accent/80 transition-colors"
                aria-label="Instagram profile"
                role="listitem"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-accent hover:bg-accent/80 transition-colors"
                aria-label="Facebook page"
                role="listitem"
              >
                <Facebook size={18} aria-hidden="true" />
              </a>
            </div>
            <address className="text-sm text-muted-foreground not-italic">
              <a href="mailto:contact@twilrproduction.com" className="hover:text-foreground transition-colors">
                contact@twilrproduction.com
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Twilr Production. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed & Developed by Sushant Budha Chhetri
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}