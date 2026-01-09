import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { AnimatedIcon } from './ui/animated-icon';
import fiverrIcon from 'figma:asset/4df4046b9bf7a8d2d346989ba7c8b843154a0e13.png';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.1),transparent_50%)]" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#A855F7]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-muted-foreground">Full-Stack Developer & Founder</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight">
                I build fast, scalable
                <br />
                <span className="text-primary bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">products for real users.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Full-stack web & mobile developer from Lahore, specialized in SaaS products, AI tools, tour booking platforms, education systems, and community dashboards.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" asChild className="shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                <a href="#contact" className="group">
                  Start a project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/50 hover:bg-primary/10">
                <a href="#projects">View my work</a>
              </Button>
            </div>

            {/* Social Line */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Available for freelance, startup collaborations, and long-term product work.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <AnimatedIcon
                href="https://github.com/shehroz03"
                floating={true}
                className="p-3 rounded-lg bg-secondary hover:bg-accent transition-colors"
                ariaLabel="Open GitHub profile"
              >
                <Github className="h-5 w-5" />
              </AnimatedIcon>
              <AnimatedIcon
                href="https://www.linkedin.com/in/chshehrozshafiq/"
                floating={true}
                className="p-3 rounded-lg bg-secondary hover:bg-accent transition-colors"
                ariaLabel="Open LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </AnimatedIcon>
              <AnimatedIcon
                href="https://www.fiverr.com/s/WEq0Gpd"
                floating={true}
                className="p-3 rounded-lg bg-secondary hover:bg-accent transition-colors"
                ariaLabel="Open Fiverr profile"
              >
                <span className="h-5 w-5 flex items-center justify-center font-bold text-lg">F</span>
              </AnimatedIcon>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main card stack with enhanced glow */}
              <div className="relative z-10 space-y-4">
                {/* Card 1 - Dashboard Preview */}
                <div className="bg-gradient-to-br from-card to-card/50 border border-primary/30 rounded-2xl p-6 shadow-2xl shadow-primary/20 backdrop-blur-sm transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-primary/20 rounded w-3/4 animate-pulse"></div>
                    <div className="h-3 bg-primary/10 rounded w-1/2"></div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="h-16 bg-gradient-to-br from-primary/30 to-purple-500/20 rounded-lg"></div>
                      <div className="h-16 bg-gradient-to-br from-purple-500/20 to-primary/30 rounded-lg"></div>
                      <div className="h-16 bg-gradient-to-br from-primary/20 to-purple-500/30 rounded-lg"></div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Mobile App Preview */}
                <div className="bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-2xl p-6 shadow-2xl shadow-purple-500/10 backdrop-blur-sm transform -rotate-2 hover:rotate-0 transition-transform duration-300 ml-12">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-500"></div>
                      <div className="space-y-1 flex-1">
                        <div className="h-2 bg-primary/20 rounded w-1/2"></div>
                        <div className="h-2 bg-primary/10 rounded w-1/3"></div>
                      </div>
                    </div>
                    <div className="h-20 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-lg"></div>
                  </div>
                </div>

                {/* Card 3 - Code Snippet */}
                <div className="bg-gradient-to-br from-card to-card/50 border border-primary/25 rounded-2xl p-6 shadow-2xl shadow-primary/15 backdrop-blur-sm">
                  <div className="font-mono text-xs space-y-2">
                    <div className="flex gap-2">
                      <span className="text-purple-400">const</span>
                      <span className="text-primary">buildProduct</span>
                      <span className="text-muted-foreground">= () =&gt; {'{'}</span>
                    </div>
                    <div className="flex gap-2 pl-4">
                      <span className="text-green-400">return</span>
                      <span className="text-yellow-400">'success'</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-muted-foreground">{'}'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}