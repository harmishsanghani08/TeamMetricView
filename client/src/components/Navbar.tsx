import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-card/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <span className="text-xl sm:text-2xl font-display font-bold text-primary cursor-pointer">
              DigiSolutions
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-nav-${link.name.toLowerCase()}`}>
                <span
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/contact" data-testid="button-cta-nav">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover-elevate active-elevate-2 transition-all">
                Get Started
              </button>
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover-elevate active-elevate-2"
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} data-testid={`link-mobile-${link.name.toLowerCase()}`}>
                  <div
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                      isActive(link.path)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover-elevate"
                    }`}
                  >
                    {link.name}
                  </div>
                </Link>
              ))}
              <Link href="/contact" data-testid="button-cta-mobile">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover-elevate active-elevate-2"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
