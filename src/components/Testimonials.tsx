import { MessageSquare } from 'lucide-react';
import { Card } from './ui/card';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative" ref={ref}>
        <div
          className={`max-w-3xl mx-auto text-center space-y-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl tracking-tight">Client Testimonials</h2>
          
          <Card className="p-12 bg-card border-border max-w-2xl mx-auto relative overflow-hidden group">
            {/* Card glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl">Real client feedback coming soon</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In the meantime, feel free to contact me for work samples and references. I'm happy to share detailed project breakdowns and connect you with past clients who can speak to the quality and professionalism of my work.
                </p>
              </div>

              <div className="pt-4">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  Get in touch for references
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}