import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calculator, DollarSign, Percent } from "lucide-react";

const examples = [
  {
    initial: 10,
    daily: 2,
    days: 30,
    result: 16,
    highlight: true,
  },
  {
    initial: 100,
    daily: 2,
    days: 30,
    result: 160,
    highlight: false,
  },
  {
    initial: 1000,
    daily: 2,
    days: 30,
    result: 1600,
    highlight: false,
  },
];

export const ReturnsSection = () => {
  return (
    <section id="returns" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Earning Potential
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how your investment grows with our consistent 2% daily returns
          </p>
        </div>

        {/* Main Example */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-primary/10 backdrop-blur-sm border-primary/20 shadow-glow">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary font-semibold mb-6">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Featured Example
                </div>
                
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">$10</div>
                    <div className="text-sm text-muted-foreground">Initial Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2%</div>
                    <div className="text-sm text-muted-foreground">Daily Returns</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">30</div>
                    <div className="text-sm text-muted-foreground">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">$16</div>
                    <div className="text-sm text-muted-foreground">Final Amount</div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 mb-6">
                  <p className="text-lg text-foreground">
                    "<strong>Even earning just 2% per day on a fund of $10 will leave you with a tidy sum of $16 at the end of 30 days</strong> - much better than any bank or stock!"
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-4">
                    That's a <span className="text-primary font-semibold">60% return</span> in just one month!
                  </div>
                  <Button variant="hero" size="lg" asChild>
                    <a href="https://forms.gle/ExrFeAE5nNmme2Qs8" target="_blank" rel="noopener noreferrer">
                      Start with $10 Today
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Examples */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {examples.map((example, index) => (
            <Card key={index} className={`${example.highlight ? 'ring-2 ring-primary shadow-glow' : ''} bg-card/50 backdrop-blur-sm border-border/20`}>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">
                    ${example.initial}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    Initial Investment
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Daily Return:</span>
                      <span className="text-primary">{example.daily}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Period:</span>
                      <span>{example.days} days</span>
                    </div>
                    <div className="border-t border-border/20 pt-2 mt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Final Amount:</span>
                        <span className="text-primary">${example.result}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison with Traditional Investments */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Compare with Traditional Investments
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-lg font-semibold mb-2">Traditional Banks</div>
              <div className="text-3xl font-bold text-red-500 mb-2">0.5%</div>
              <div className="text-sm text-muted-foreground">Annual Interest</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="text-lg font-semibold mb-2">Stock Market</div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">7%</div>
              <div className="text-sm text-muted-foreground">Annual Average</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              <div className="text-lg font-semibold mb-2">Pendable</div>
              <div className="text-3xl font-bold text-primary mb-2">730%</div>
              <div className="text-sm text-muted-foreground">Annual Potential</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};