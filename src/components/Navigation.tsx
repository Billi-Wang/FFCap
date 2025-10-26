import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "difference", label: "Our Difference" },
    { id: "criteria", label: "Investment Criteria" },
    { id: "values", label: "Values" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 md:px-8 transition-all duration-300">
      <div
        className={`mx-auto max-w-6xl rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-matte-black/80 backdrop-blur-md shadow-2xl border border-gold/10"
            : "bg-matte-black/60 backdrop-blur-md border border-gold/5"
        }`}
      >
        <div className="px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img src={logo} alt="Frontfield Capital" className="h-10 w-auto" />
          <span className="text-xl font-serif font-light text-primary-foreground hidden md:block">
            FRONTFIELD CAPITAL
          </span>
        </button>

        <div className={`hidden lg:flex items-center gap-8 transition-opacity duration-300 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-primary-foreground hover:text-gold transition-colors duration-300 font-medium tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-primary-foreground hover:text-gold transition-colors"
          onClick={() => {
            const mobileMenu = document.getElementById("mobile-menu");
            if (mobileMenu) {
              mobileMenu.classList.toggle("hidden");
            }
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="hidden lg:hidden mx-auto max-w-6xl mt-2 rounded-3xl bg-matte-black/90 backdrop-blur-md border border-gold/10 overflow-hidden"
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-left text-sm text-primary-foreground hover:text-gold transition-colors duration-300 font-medium tracking-wide py-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
