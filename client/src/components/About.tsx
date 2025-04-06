import { Shield, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Crazy Rich LA!</h2>
          <p className="text-lg mb-8">
            FiLot is revolutionizing the DeFi landscape by combining advanced AI technology with community-driven development. 
            Our mission is to make high-yield opportunities accessible to everyone while maintaining 
            the highest standards of security and transparency.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Why Choose FiLot?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-4">
                <Shield className="h-10 w-10 text-[#f0c040] mb-2" />
                <h4 className="font-bold">Security First</h4>
                <p className="text-center">Enterprise-grade security protocols protect your assets</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <TrendingUp className="h-10 w-10 text-[#f0c040] mb-2" />
                <h4 className="font-bold">Optimized Returns</h4>
                <p className="text-center">AI-powered strategies to maximize your investment potential</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
