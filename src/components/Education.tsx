import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Post Graduate Diploma",
      field: "Machine Learning & Artificial Intelligence",
      institution: "Specialized AI Institute",
      year: "2023",
      icon: GraduationCap,
    },
    {
      degree: "Bachelor of Commerce",
      field: "Business & Finance",
      institution: "University of Mumbai",
      year: "2022",
      icon: GraduationCap,
    },
  ];

  const continuousLearning = [
    "Hadoop", "R Programming", "API Development", "Postman", "Git", "Apache Spark", "Data Mining", "Advanced Statistics"
  ];

  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Educational Background</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-to-br from-card to-secondary border-border hover:border-primary/50 hover:shadow-[var(--glow-gold)] transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <edu.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      <Badge variant="outline" className="border-primary/50 text-primary">{edu.year}</Badge>
                    </div>
                    <p className="text-muted-foreground font-medium">{edu.field}</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">{edu.institution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-delayed">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-4">Continuous Learning</h3>
                <div className="flex flex-wrap gap-2">
                  {continuousLearning.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-secondary text-foreground text-sm border border-primary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
