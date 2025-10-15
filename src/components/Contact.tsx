import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7057582471",
      link: "tel:+917057582471",
    },
    {
      icon: Mail,
      label: "Email",
      value: "dhruvsonii1999@gmail.com",
      link: "mailto:dhruvsonii1999@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Dhruvsoniiii",
      link: "https://github.com/Dhruvsoniiii",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, Maharashtra, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Let's Connect</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm open to freelance and full-time Data Science or ML projects. Let's discuss how I can deliver impactful, data-driven solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 hover:shadow-[var(--glow-gold)] transition-all duration-300 hover:-translate-y-1 group"
              >
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in">
            <h3 className="text-xl font-bold text-center mb-6">Available For:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                "Freelance Data Science Projects",
                "Full-time Data Scientist Roles",
                "ML Consulting & Advisory",
                "Dashboard Development",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center pt-8 animate-fade-in-delayed">
            <Button
              size="lg"
              onClick={() => window.location.href = "mailto:dhruvsonii1999@gmail.com"}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--glow-gold)] hover:shadow-[var(--glow-gold)] hover:scale-105 transition-all duration-300"
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
