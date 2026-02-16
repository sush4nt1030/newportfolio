import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/experience", label: "Experience" },
    { to: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" role="banner">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" aria-label="Twilr Production - Home">
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight">Sushant Budha Chhetri</span>
              <span className="text-xs text-muted-foreground">Twilr Production</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1" role="menubar">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                role="menuitem"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
                  }`
                }
                aria-current={({ isActive }: { isActive: boolean }) => (isActive ? "page" : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
              role="menu"
              aria-label="Mobile navigation"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    role="menuitem"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md transition-colors ${
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
                      }`
                    }
                    aria-current={({ isActive }: { isActive: boolean }) => (isActive ? "page" : undefined)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}