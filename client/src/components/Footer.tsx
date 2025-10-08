import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Linkedin, label: "LinkedIn", url: "#" },
    { icon: Instagram, label: "Instagram", url: "#" },
    { icon: Github, label: "GitHub", url: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4" data-testid="text-footer-brand">
              DigiSolutions
            </h3>
            <p className="text-gray-400 text-sm" data-testid="text-footer-tagline">
              Building your digital future with cutting-edge technology solutions.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-200">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm" data-testid="text-copyright">
            © {currentYear} DigiSolutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
