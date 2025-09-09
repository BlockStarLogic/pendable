import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Smartphone, Zap, Users, Lock } from "lucide-react";
import featureSecurity from "@/assets/feature-security.jpg";
import featureReturns from "@/assets/feature-returns.jpg";
import featureSimple from "@/assets/feature-simple.jpg";

const features = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your investments are protected by advanced encryption and multi-signature wallets.",
    image: featureSecurity,
  },
  {
    icon: TrendingUp,
    title: "Consistent Returns",
    description: "Earn up to 2% daily returns with our automated DeFi strategies.",
    image: featureReturns,
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Manage your investments anywhere with our intuitive mobile app.",
    image: featureSimple,
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Start earning within minutes - no complex setup required.",
    image: null,
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join thousands of investors in our thriving Web3 community.",
    image: null,
  },
  {
    icon: Lock,
    title: "Non-Custodial",
    description: "You maintain full control of your funds at all times.",
    image: null,
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Pendable
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for the modern investor who wants reliable returns without the complexity
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/20">
              <CardContent className="p-6">
                {/* Feature Image or Icon */}
                <div className="mb-6">
                  {feature.image ? (
                    <div className="w-16 h-16 rounded-lg overflow-hidden mb-4">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-lg bg-gradient-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                  )}
                </div>

                {/* Feature Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-card/10 backdrop-blur-sm border border-border/20 text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Ready to start earning? Get started in under 2 minutes
          </div>
        </div>
      </div>
    </section>
  );
};