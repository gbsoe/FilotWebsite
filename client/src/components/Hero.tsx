import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#f0c040] to-[#ffda85] py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0B3954] mb-4">Welcome to Crazy Rich LA!</h1>
          <p className="text-xl md:text-2xl text-[#0B3954] mb-8">Experience the Future of DeFi with FiLot</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-[#0B3954] text-white px-6 py-6 rounded-lg font-medium shadow-md transition-all hover:translate-y-[-2px] hover:shadow-lg"
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
              className="bg-white text-[#0B3954] px-6 py-6 rounded-lg font-medium shadow-md transition-all hover:translate-y-[-2px] hover:shadow-lg"
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
      </div>
    </section>
  );
}
