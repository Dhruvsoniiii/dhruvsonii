import { Database, TrendingUp, BarChart3, Brain, Cloud, GitBranch } from "lucide-react";
import { Card } from "@/components/ui/card";

const Competencies = () => {
  const competencies = [
    {
      icon: Database,
      title: "Data Cleaning",
      description: "Ensuring accurate, high-quality datasets for modeling",
    },
    {
      icon: TrendingUp,
      title: "Data Analysis",
      description: "Extracting actionable insights from data patterns and trends",
    },
    {
      icon: BarChart3,
      title: "Dashboard Creation",
      description: "Building user-focused Power BI/Tableau dashboards",
    },
    {
      icon: Brain,
      title: "ML/AI Model Development",
      description: "Designing and evaluating classification models",
    },
    {
      icon: Cloud,
      title: "Advanced Data Wrangling",
      description: "Using AWS S3 & Python for large-scale data prep",
    },
    {
      icon: GitBranch,
      title: "MLOps Foundation",
      description: "Flask web frameworks and Postman model testing",
    },
  ];

  return (
    <section id="competencies" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Key Competencies</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-delayed">
            {competencies.map((competency, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-to-br from-card to-secondary border-border hover:border-primary/50 hover:shadow-[var(--glow-gold)] transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <competency.icon className="w-8 h-8 text-primary group-hover:animate-float" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{competency.title}</h3>
                  <p className="text-muted-foreground">{competency.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
