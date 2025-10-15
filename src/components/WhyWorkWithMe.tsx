import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Award } from "lucide-react";

const WhyWorkWithMe = () => {
  const goals = [
    {
      icon: Target,
      stage: "Immediate",
      title: "Entry-Level Data Scientist",
      description: "Secure a position to apply and grow my ML/AI expertise",
    },
    {
      icon: TrendingUp,
      stage: "Short-term",
      title: "Domain SME",
      description: "Become a subject matter expert in NLP or Computer Vision",
    },
    {
      icon: Award,
      stage: "Long-term",
      title: "Senior Data Scientist",
      description: "Lead ML projects and drive impactful business solutions",
    },
  ];

  return (
    <section id="why-me" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Why Work With Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <Card className="p-8 md:p-12 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">Strengths:</span> Deep ML/AI expertise, strong ethics, collaboration mindset, and practical problem-solving.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Eager to contribute my data science and ML skills to impactful, data-driven business solutions that drive real results.
              </p>
            </div>
          </Card>

          <div className="space-y-4 animate-fade-in-delayed">
            <h3 className="text-2xl font-bold text-center mb-8">Career Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {goals.map((goal, index) => (
                <Card
                  key={index}
                  className="p-6 bg-gradient-to-br from-card to-secondary border-border hover:border-primary/50 hover:shadow-[var(--glow-gold)] transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <goal.icon className="w-8 h-8 text-primary group-hover:animate-float" />
                    </div>
                    <Badge className="bg-primary/20 text-primary border-none">{goal.stage}</Badge>
                    <h4 className="text-lg font-bold text-foreground">{goal.title}</h4>
                    <p className="text-sm text-muted-foreground">{goal.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
