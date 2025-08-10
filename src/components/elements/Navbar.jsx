import { useState, useEffect } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMenuOpen(false); // Close mobile menu after clicking
  };

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.to);
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10 rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <span 
          className="text-white font-bold text-lg cursor-pointer hover:text-gray-300 transition-colors"
          onClick={() => scrollToSection('home')}
        >
          Ashraf Abdelkaleq
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.to)}
                className={`cursor-pointer transition-all duration-300 relative ${
                  activeSection === item.to 
                    ? 'text-gray-300' 
                    : 'text-white hover:text-gray-300'
                }`}
              >
                {item.name}
                {/* Active indicator */}
                {activeSection === item.to && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-400 rounded"></span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none hover:text-gray-300 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-black/40 backdrop-blur-lg border-t border-white/10 px-6 py-4 space-y-4 text-white">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.to)}
                className={`block w-full text-left cursor-pointer transition-all duration-300 ${
                  activeSection === item.to 
                    ? 'text-gray-300' 
                    : 'text-white hover:text-gray-300'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}