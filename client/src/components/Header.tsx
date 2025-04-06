import { useState } from "react";
import { Menu, X } from "lucide-react";
import FiLotLogo from "@assets/IMG-20240624-WA0020-removebg-preview.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={FiLotLogo} alt="FiLot Logo" className="h-12 w-12 mr-2" />
          <span className="text-xl font-bold text-[#0B3954]">FiLot</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-[#333] focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="font-medium hover:text-[#f0c040] transition-all duration-300">About</a>
          <a href="#features" className="font-medium hover:text-[#f0c040] transition-all duration-300">Features</a>
          <a href="#contact" className="font-medium hover:text-[#f0c040] transition-all duration-300">Contact</a>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} bg-white px-4 py-3 md:hidden`}>
        <div className="flex flex-col space-y-4">
          <a 
            href="#about" 
            className="font-medium py-2 hover:text-[#f0c040] transition-all duration-300"
            onClick={closeMenu}
          >
            About
          </a>
          <a 
            href="#features" 
            className="font-medium py-2 hover:text-[#f0c040] transition-all duration-300"
            onClick={closeMenu}
          >
            Features
          </a>
          <a 
            href="#contact" 
            className="font-medium py-2 hover:text-[#f0c040] transition-all duration-300"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
