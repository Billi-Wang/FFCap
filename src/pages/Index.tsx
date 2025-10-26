import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-calgary.jpg";
import { 
  Target, 
  Shield, 
  TrendingUp, 
  Users, 
  Heart,
  Scale,
  Handshake,
  Brain,
  ChevronRight
} from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".scroll-animate");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-primary-foreground"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 text-center fade-in">
          <h1 className="text-7xl md:text-8xl font-light mb-6 tracking-tight">
            FRONTFIELD CAPITAL
          </h1>
          <div className="w-32 h-px bg-gold mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto tracking-wide">
            Entrepreneurs building enduring companies.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-matte-black text-primary-foreground scroll-animate">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-center">About Us</h2>
            <div className="gold-divider mb-12"></div>
            <p className="text-lg md:text-xl leading-relaxed text-center text-primary-foreground font-light">
              Frontfield Capital is an investment firm dedicated to acquiring, operating, and growing exceptional
              small to medium-sized businesses for the long term. We believe that sustainable value is created
              through steady leadership, thoughtful strategy, and a commitment to people. Founded by operators
              with deep roots in finance and entrepreneurship, Frontfield Capital combines disciplined investment
              judgment with practical experience in building and scaling organizations. Our approach is hands-on
              and partnership-focused. We work closely with owners, management teams, and employees to preserve
              what has made the business successful while identifying opportunities for responsible growth and
              long-term development. At our core, we are driven by integrity, discipline, and a deep respect for
              the legacy each founder has built.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section id="difference" className="py-24 bg-background scroll-animate">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-light mb-4 text-center">We Are Owner-Operators, Not Asset Managers.</h2>
          <div className="gold-divider mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Long-term Stewardship",
                description: "Not short-term flipping. We're committed to building enduring value."
              },
              {
                icon: Target,
                title: "One-Company Focus",
                description: "We acquire a single business and dedicate ourselves fully to its success."
              },
              {
                icon: Users,
                title: "Continuity of Culture",
                description: "Preserving people, customer relationships, and organizational values."
              },
              {
                icon: Shield,
                title: "Sustainable Growth",
                description: "Responsible, disciplined, and strategic growth for decades ahead."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-gold transition-all duration-300">
                <CardContent className="p-8">
                  <item.icon className="w-10 h-10 text-gold mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section id="criteria" className="py-24 bg-matte-black text-primary-foreground scroll-animate">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-light mb-4 text-center">What We Look For</h2>
          <div className="gold-divider mb-16"></div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <ChevronRight className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium mb-2">EBITDA: $1.5M–$6M+</h3>
                  <p className="text-muted-foreground">Established businesses with proven profitability.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <ChevronRight className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium mb-2">Recurring Revenue</h3>
                  <p className="text-muted-foreground">Preference for contracted or subscription-based models.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <ChevronRight className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium mb-2">Customer Loyalty</h3>
                  <p className="text-muted-foreground">Strong relationships and team culture that drives success.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <ChevronRight className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium mb-2">Key Sectors</h3>
                  <p className="text-muted-foreground">Business services, tech-enabled services, software, niche industrial & distribution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach section removed per request */}

      {/* Core Values */}
      <section id="values" className="py-24 bg-background scroll-animate">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-light mb-4 text-center">Core Values</h2>
          <div className="gold-divider mb-16"></div>
          
          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Shield, title: "Integrity" },
              { icon: Scale, title: "Discipline" },
              { icon: Heart, title: "Humility" },
              { icon: Handshake, title: "Partnership" },
              { icon: Brain, title: "Long-term Thinking" }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-gold group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-medium">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-matte-black text-primary-foreground scroll-animate">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-light mb-6">Looking to Transition Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-2">
              We would be honored to start a confidential conversation.
            </p>
            {/* Email removed per request */}
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-matte-black text-primary-foreground border-t border-gold/20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-3xl font-light mb-2">FRONTFIELD CAPITAL</h3>
            <p className="text-sm text-muted-foreground">&copy; 2021 Frontfield Capital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
