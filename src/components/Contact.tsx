import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ExternalLink, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { AnimatedIcon } from './ui/animated-icon';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#6366F1]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative" ref={ref}>
        <div className={`max-w-3xl mx-auto text-center mb-16 space-y-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl tracking-tight">Let's build your next product</h2>
          <p className="text-lg text-muted-foreground">
            Whether you need a full product from scratch or want to upgrade an existing app, share a few lines about your idea and I'll reply with a clear technical plan, timeline, and budget.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-4">
              <h3 className="text-2xl">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ready to start your project? Reach out through the form or directly via email. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <Card className="p-4 bg-card border-border flex items-start gap-4 group relative overflow-hidden hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 relative z-10 icon-hover">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1 relative z-10">
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a 
                    href="mailto:shehrozshafiq03@gmail.com"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    shehrozshafiq03@gmail.com
                  </a>
                </div>
              </Card>

              <Card className="p-4 bg-card border-border flex items-start gap-4 group relative overflow-hidden hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 relative z-10 icon-hover">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1 relative z-10">
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-sm">Lahore, Pakistan</div>
                </div>
              </Card>
            </div>

            <div className="pt-4 space-y-3">
              <p className="text-sm">
                <strong className="text-foreground">Also available on:</strong>
              </p>
              <div className="flex flex-wrap gap-3">
                <AnimatedIcon
                  href="https://www.fiverr.com/s/WEq0Gpd"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-accent transition-colors text-sm"
                >
                  <>
                    Fiverr
                    <ExternalLink className="h-3 w-3" />
                  </>
                </AnimatedIcon>
                <AnimatedIcon
                  href="https://github.com/shehroz03"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-accent transition-colors text-sm"
                >
                  <>
                    GitHub
                    <ExternalLink className="h-3 w-3" />
                  </>
                </AnimatedIcon>
                <AnimatedIcon
                  href="https://www.linkedin.com/in/chshehrozshafiq/"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-accent transition-colors text-sm"
                  ariaLabel="Open LinkedIn profile"
                >
                  <>
                    <Linkedin className="h-3 w-3" />
                    LinkedIn
                  </>
                </AnimatedIcon>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className={`p-8 bg-card border-border transition-all duration-700 delay-400 relative overflow-hidden group ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Card glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 space-y-4 relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center space-y-2">
                  <h4 className="text-xl">Message Sent!</h4>
                  <p className="text-sm text-muted-foreground">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}