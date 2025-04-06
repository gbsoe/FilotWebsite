import { DollarSign, LightbulbIcon, CheckCircle2 } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Experience Next-Generation DeFi</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LA Token Section */}
          <div className="bg-[#f9f9f9] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-[#f0c040] p-3 rounded-full mr-4">
                <DollarSign className="h-6 w-6 text-[#0B3954]" />
              </div>
              <h3 className="text-xl font-bold">LA! Token</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 text-[#4CAF50] mr-2 flex-shrink-0" />
                <span>Limited supply with strategic tokenomics model</span>
              </li>
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 text-[#4CAF50] mr-2 flex-shrink-0" />
                <span>Multi-utility across the FiLot ecosystem</span>
              </li>
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 text-[#4CAF50] mr-2 flex-shrink-0" />
                <span>Enhanced security with advanced protocols</span>
              </li>
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 text-[#4CAF50] mr-2 flex-shrink-0" />
                <span>Community governance and democratic decision-making</span>
              </li>
            </ul>
            
            <a 
              href="https://pump.fun/coin/Bpz8btet2EVDzjjHZAaqwjTzE5p62H9Sb5RuKVNBpump"
              target="_blank"
              rel="noopener noreferrer" 
              className="mt-6 inline-block text-[#0B3954] font-medium hover:text-[#f0c040] transition-all duration-300"
            >
              Learn more about $LA Token →
            </a>
          </div>
          
          {/* FiLot Overview Section */}
          <div className="bg-[#f9f9f9] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-[#f0c040] p-3 rounded-full mr-4">
                <LightbulbIcon className="h-6 w-6 text-[#0B3954]" />
              </div>
              <h3 className="text-xl font-bold">FiLot Overview</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 text-[#4CAF50] mr-2 flex-shrink-0" />
                <span>AI-powered market insights and trading opportunities</span>
              </li>
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 text-[#4CAF50] mr-2 flex-shrink-0" />
                <span>High-yield liquidity pools with optimized returns</span>
              </li>
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 text-[#4CAF50] mr-2 flex-shrink-0" />
                <span>Community-driven development and feature prioritization</span>
              </li>
              <li className="flex">
                <CheckCircle2 className="h-6 w-6 text-[#4CAF50] mr-2 flex-shrink-0" />
                <span>Intuitive interface for both beginners and experts</span>
              </li>
            </ul>
            
            <a 
              href="https://t.me/Fi_lotbot"
              target="_blank"
              rel="noopener noreferrer" 
              className="mt-6 inline-block text-[#0B3954] font-medium hover:text-[#f0c040] transition-all duration-300"
            >
              Try FiLot Bot on Telegram →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
