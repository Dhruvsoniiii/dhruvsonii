import dsLogo from "@/assets/ds-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <img src={dsLogo} alt="DS Logo" className="w-16 h-16 mx-auto opacity-80" />
          
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dedicated to <span className="text-primary font-semibold">continuous learning</span> and professional growth — 
            investing 1–2 hours daily in mastering data analytics and ML.
          </p>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dhruv Soni. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
