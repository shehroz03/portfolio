import { Award, Users, Code, Rocket } from 'lucide-react';
import { Card } from './ui/card';
import { useScrollAnimation } from './hooks/useScrollAnimation';

const stats = [
  { icon: Code, value: '3+', label: 'Years building products' },
  { icon: Rocket, value: '4+', label: 'Major projects shipped' },
  { icon: Users, value: 'Multiple', label: 'Tech stacks & platforms' },
];

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-32 px-6 bg-secondary/20 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#6366F1]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#A855F7]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#6366F1]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative" ref={ref}>
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Top Row: Profile Photo + Heading + Intro Paragraph */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center">
            {/* Circular Profile Photo with Enhanced Effects */}
            <div
              className={`flex-shrink-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative group">
                {/* Rotating light effect - slow halo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366F1]/40 via-[#A855F7]/40 to-[#6366F1]/40 blur-3xl -z-10 scale-[1.4] opacity-50 group-hover:opacity-70 transition-opacity duration-300 motion-safe:animate-[spin_14s_linear_infinite]"></div>
                
                {/* Secondary rotating glow (opposite direction) */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-l from-[#A855F7]/30 via-[#6366F1]/30 to-[#A855F7]/30 blur-2xl -z-10 scale-[1.3] opacity-40 group-hover:opacity-60 transition-opacity duration-300 motion-safe:animate-[spin_20s_linear_infinite_reverse]"></div>
                
                {/* Profile Image Container with Enhanced Rings */}
                <div className="relative">
                  {/* Outer gradient glow ring */}
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#A855F7] opacity-80 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-300"></div>
                  
                  {/* Middle decorative ring */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#6366F1]/50 to-[#A855F7]/50 opacity-60"></div>
                  
                  {/* Inner dark ring */}
                  <div className="absolute -inset-0.5 rounded-full bg-[#0B1120]"></div>
                  
                  {/* Profile Image */}
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-[3px] border-[#6366F1] transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:border-[#8B5CF6] shadow-2xl shadow-[#6366F1]/20 group-hover:shadow-[#A855F7]/40">
                    <img
                      src="figma:asset/4e7ad929db6fcddf77885da08da132fa9f3f99cb.png"
                      alt="Shehroz Shafiq - Full-Stack Developer"
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Image overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#6366F1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Heading + Intro Paragraph with Enhanced Typography */}
            <div
              className={`flex-1 space-y-6 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="space-y-3">
                <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] bg-gradient-to-br from-white via-white to-white/80 bg-clip-text">
                  About me
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] rounded-full shadow-lg shadow-[#6366F1]/50"></div>
              </div>
              
              <div className="max-w-2xl text-muted-foreground leading-relaxed text-base md:text-lg space-y-4">
                <p className="text-foreground/90">
                  I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] font-semibold">full‑stack developer</span> from Lahore who enjoys turning rough ideas into reliable, production‑ready products. I've worked on tour booking apps, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] font-semibold">AI‑driven scholarship platforms</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] font-semibold">community dashboards</span>, data‑extraction tools, and high‑converting landing pages for clients and personal projects. My focus is always the same: clear UX, solid engineering, and outcomes that actually move the business forward.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Cards Section with Enhanced Design */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className={`relative p-8 bg-gradient-to-br from-[#0A0F1E] via-[#0B1120] to-[#050816] border border-[#1F2937] hover:border-[#6366F1] transition-all duration-300 ease-out hover:scale-[1.03] group overflow-hidden ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 120}ms` }}
                  >
                    {/* Animated background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/0 via-[#8B5CF6]/5 to-[#A855F7]/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Accent border line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#6366F1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                      {/* Icon Container with Enhanced Glow */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#6366F1]/30 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366F1]/20 to-[#A855F7]/20 border border-[#6366F1]/30 flex items-center justify-center group-hover:border-[#6366F1] group-hover:shadow-lg group-hover:shadow-[#6366F1]/30 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110">
                          <Icon className="h-7 w-7 text-[#6366F1] group-hover:text-[#8B5CF6] transition-colors duration-300" />
                        </div>
                      </div>
                      
                      {/* Text Content */}
                      <div className="space-y-2">
                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent group-hover:from-[#6366F1] group-hover:to-[#A855F7] transition-all duration-300">
                          {stat.value}
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground font-medium group-hover:text-foreground/80 transition-colors duration-300">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#6366F1]/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>
                );
              })}
            </div>

            {/* Bottom Meta Lines with Enhanced Design */}
            <div
              className={`pt-8 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Projects Across */}
                <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#0A0F1E]/80 to-[#050816]/80 border border-[#1F2937]/50 hover:border-[#6366F1]/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse"></div>
                      <span className="inline-block px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1F2937] to-[#111827] text-[#E5E7EB] text-xs font-semibold tracking-widest border border-[#374151]/50">
                        PROJECTS ACROSS
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed pl-3.5">
                      tour booking, education, communities, automation, and AI tools.
                    </p>
                  </div>
                </div>

                {/* Current Focus */}
                <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#0A0F1E]/80 to-[#050816]/80 border border-[#1F2937]/50 hover:border-[#A855F7]/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A855F7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span className="inline-block px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1F2937] to-[#111827] text-[#E5E7EB] text-xs font-semibold tracking-widest border border-[#374151]/50">
                        CURRENT FOCUS
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed pl-3.5">
                      SaaS dashboards, AI‑powered tools, and Flutter/Firebase apps for startups and small businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}