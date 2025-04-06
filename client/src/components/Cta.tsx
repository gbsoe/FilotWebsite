import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-16 bg-[#0B3954] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Experience FiLot?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join our community today and discover the next generation of decentralized finance with FiLot.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            className="bg-[#f0c040] text-[#0B3954] px-6 py-6 rounded-lg font-medium shadow-md transition-all hover:translate-y-[-2px] hover:shadow-lg"
            asChild
          >
            <a 
              href="https://t.me/Fi_lotbot" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Try FiLot Bot (Beta)
            </a>
          </Button>
          <Button 
            variant="outline"
            className="bg-white text-[#0B3954] px-6 py-6 rounded-lg font-medium shadow-md transition-all hover:translate-y-[-2px] hover:shadow-lg border-white"
            asChild
          >
            <a 
              href="https://pump.fun/coin/Bpz8btet2EVDzjjHZAaqwjTzE5p62H9Sb5RuKVNBpump" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Buy $LA Token
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
