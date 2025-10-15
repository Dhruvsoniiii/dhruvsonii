import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Mortgage Fraud Detection",
      domain: "Finance",
      description:
        "Built an advanced data-driven system for credit risk management using AWS S3, Pandas, NumPy, Matplotlib, Seaborn, and Flask API for deployment.",
      keyFeatures: [
        "Credit Risk Assessment",
        "Real-time Fraud Detection",
        "Interactive Dashboard",
        "API Integration",
      ],
      technologies: ["AWS S3", "Python", "Flask", "Pandas", "Matplotlib", "Seaborn"],
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "NLP for Pharmacovigilance",
      domain: "Healthcare",
      description:
        "Used NLP and ML to uncover customer sentiments and causes of adverse drug events through Word2Vec, TF-IDF, and clustering models.",
      keyFeatures: [
        "Sentiment Analysis",
        "Text Preprocessing",
        "Adverse Event Detection",
        "Clustering Models",
      ],
      technologies: ["NLP", "Word2Vec", "TF-IDF", "Clustering", "Python", "Scikit-learn"],
      color: "from-green-500/20 to-teal-500/20",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in-delayed">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--glow-gold)]"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-8 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="mt-2 border-primary/50 text-primary">
                        {project.domain}
                      </Badge>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  {project.keyFeatures && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.keyFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-secondary hover:bg-primary/20 text-foreground border border-border transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
