import { MessageCircle, Twitter, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Connect With Us</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <a 
            href="https://t.me/Fi_lotbot"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex flex-col items-center p-6 bg-[#f9f9f9] rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <MessageCircle className="h-12 w-12 text-[#f0c040] mb-4" />
            <h3 className="text-xl font-bold mb-2">Telegram</h3>
            <p className="text-center">Join our Telegram community and try the FiLot Bot</p>
          </a>
          
          <a 
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex flex-col items-center p-6 bg-[#f9f9f9] rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Twitter className="h-12 w-12 text-[#f0c040] mb-4" />
            <h3 className="text-xl font-bold mb-2">Twitter</h3>
            <p className="text-center">Follow us for updates, news, and community highlights</p>
          </a>
          
          <a 
            href="mailto:contact@filot.io"
            className="flex flex-col items-center p-6 bg-[#f9f9f9] rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Mail className="h-12 w-12 text-[#f0c040] mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-center">Reach out to our team with questions or feedback</p>
          </a>
        </div>
      </div>
    </section>
  );
}
