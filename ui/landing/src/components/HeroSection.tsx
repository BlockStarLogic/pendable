import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Pendable Web3 DeFi Investment Platform"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-secondary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/10 backdrop-blur-sm border border-border/20 text-sm text-foreground mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Web3 DeFi Investment Platform
          </div>

          {/* Main Headlines */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Earn{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Fixed Income
            </span>
            <br />
            from Crypto{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Simply
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join thousands of investors earning reliable, frequent returns without 
            worrying about market volatility. Start with just $10 and watch your 
            micro-fund grow automatically.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2%</div>
              <div className="text-sm text-muted-foreground">Daily Returns</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">60%</div>
              <div className="text-sm text-muted-foreground">Better than Banks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$10</div>
              <div className="text-sm text-muted-foreground">Minimum Investment</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://forms.gle/ExrFeAE5nNmme2Qs8" target="_blank" rel="noopener noreferrer">
                Get Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Secure & Audited
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Web3 Verified
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              24/7 Support
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
};