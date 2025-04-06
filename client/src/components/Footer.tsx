import { Github, Twitter } from "lucide-react";
import FiLotLogo from "@assets/IMG-20240624-WA0020-removebg-preview.png";

export default function Footer() {
  return (
    <footer className="bg-[#0B3954] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={FiLotLogo} alt="FiLot Logo" className="h-10 w-10 mr-2" />
            <span className="text-lg font-bold">FiLot</span>
          </div>
          
          <div className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} FiLot. All rights reserved.
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a 
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://t.me/Fi_lotbot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300"
              aria-label="Telegram"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
