import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Python & Libraries",
      skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    },
    {
      category: "Machine Learning",
      skills: ["Feature Engineering", "Classification", "Model Evaluation", "Regression"],
    },
    {
      category: "NLP",
      skills: ["Sentiment Analysis", "Keyphrase Extraction", "Text Preprocessing", "Word2Vec", "TF-IDF"],
    },
    {
      category: "Visualization",
      skills: ["Power BI", "Tableau", "Data Storytelling"],
    },
    {
      category: "Cloud & Tools",
      skills: ["AWS S3", "Flask", "Postman", "Git", "Hadoop", "Spark", "SQL"],
    },
    {
      category: "Deep Learning",
      skills: ["TensorFlow", "Neural Networks"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-delayed">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary/20 text-foreground border border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
