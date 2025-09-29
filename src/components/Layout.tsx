import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Palette, Heart, Mail, Menu, X, Users, BookOpen } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.ico";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Customize", href: "/customize", icon: Palette },
  { name: "Women Travel", href: "/women", icon: Heart },
  { name: "Group Departure", href: "/group-departure", icon: Users },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Mail },
];

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className = "" }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isWomenPage = location.pathname.startsWith("/women");

  return (
    <div className={`min-h-screen ${isWomenPage ? "pink-theme" : ""} ${className}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] cloud-card border-b backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <img src={logo} alt="Smiles World Logo" className="w-8 h-8" />
                <span className="text-2xl font-bold text-primary">Smiles World</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      <Icon size={16} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors z-50 relative"
                type="button"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pb-4 pt-2"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card/80 backdrop-blur-sm border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <img src={logo} alt="Smiles World Logo" className="w-8 sm:w-10 h-8 sm:h-10" />
              <span className="text-2xl sm:text-3xl font-bold text-primary">Smiles World</span>
            </div>
            <p className="text-muted-foreground text-base sm:text-lg px-4">
              Explore more. Smile wider.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-muted-foreground px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="hover:text-primary transition-colors text-sm sm:text-base"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="border-t pt-8 text-sm text-muted-foreground">
              © 2024 Smiles World. Made with ❤️ for travelers worldwide.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}