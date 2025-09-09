import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Target, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Wallet,
    title: "Buy Your Investment Product",
    description: "Choose from our curated selection of DeFi investment products. Start with as little as $10.",
    details: ["Select investment amount", "Choose your risk level", "Connect your wallet securely"],
  },
  {
    number: "02",
    icon: Target,
    title: "Create Your Micro-Fund",
    description: "Our AI automatically creates a personalized micro-fund based on your preferences.",
    details: ["Automated portfolio allocation", "Risk management built-in", "Diversified strategies"],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Watch Your Returns Grow",
    description: "Sit back and earn up to 2% daily returns. No market watching required.",
    details: ["Daily return notifications", "Real-time portfolio tracking", "Compound growth optimization"],
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Pendable
            </span>{" "}
            Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to start earning consistent returns from DeFi
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <Card className="mb-8 lg:mb-12 overflow-hidden bg-card/50 backdrop-blur-sm border-border/20 hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                    {/* Step Number & Icon */}
                    <div className="flex items-center gap-4 lg:gap-6">
                      <div className="text-4xl lg:text-5xl font-bold text-primary/30">
                        {step.number}
                      </div>
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                        <step.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 lg:left-16 top-full w-0.5 h-8 lg:h-12 bg-gradient-to-b from-primary to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="mb-6">
            <p className="text-lg text-muted-foreground mb-4">
              Ready to start your investment journey?
            </p>
            <Button variant="hero" size="lg">
              <a href="https://forms.gle/ExrFeAE5nNmme2Qs8" target="_blank" rel="noopener noreferrer">
              Get Started Now
              </a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};