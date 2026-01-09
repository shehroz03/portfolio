import { Mail, ArrowUpRight, Code2, Sparkles } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'Fiverr',
    href: 'https://www.fiverr.com/shehrozshafiq',
    icon: () => (
      <div className="w-6 h-6 flex items-center justify-center font-bold text-lg">F</div>
    ),
    color: '#1DBF73',
    description: 'Hire on Fiverr',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/shehrozshafiqq',
    icon: () => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    color: '#E5E7EB',
    description: 'View repositories',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shehroz-shafiq',
    icon: () => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: '#0A66C2',
    description: 'Connect on LinkedIn',
  },
  {
    name: 'Email',
    href: 'mailto:shehrozshafiq49@gmail.com',
    icon: Mail,
    color: '#6366F1',
    description: 'Send a message',
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#050816] overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/50 via-[#050816] to-[#050816]" />
      
      {/* Animated Orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#6366F1] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#A855F7] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="pt-24 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
            
            {/* Brand Section - Larger on desktop */}
            <div className="lg:col-span-5 space-y-8">
              {/* Logo & Tagline */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 group">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#A855F7] flex items-center justify-center shadow-lg shadow-[#6366F1]/30">
                      <Code2 className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#6366F1] to-[#A855F7] rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
                      ShehrozDev
                    </h3>
                  </div>
                </div>
                
                <p className="text-[#9CA3AF] leading-relaxed max-w-md">
                  Full‑stack web & mobile developer specializing in building production-ready SaaS dashboards, AI tools, and Flutter/Firebase applications with clear business outcomes.
                </p>
                
                {/* Status Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#6366F1]/10 via-[#8B5CF6]/10 to-[#A855F7]/10 border border-[#6366F1]/20">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#6366F1]" />
                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-[#6366F1] animate-ping" />
                  </div>
                  <span className="text-sm font-medium bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">
                    Available for new projects
                  </span>
                  <Sparkles className="w-4 h-4 text-[#A855F7]" />
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="space-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">15+</div>
                  <div className="text-xs text-[#6B7280]">Projects</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">5+</div>
                  <div className="text-xs text-[#6B7280]">Years Exp</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#A855F7] to-[#6366F1] bg-clip-text text-transparent">100%</div>
                  <div className="text-xs text-[#6B7280]">Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-sm font-semibold text-[#E5E7EB] tracking-wider uppercase">Quick Links</h4>
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-3 text-[#9CA3AF] hover:text-[#E5E7EB] transition-all duration-300 w-fit"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1]/30 group-hover:bg-[#6366F1] group-hover:shadow-lg group-hover:shadow-[#6366F1]/50 transition-all duration-300" />
                    <span className="relative">
                      {item.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#A855F7] group-hover:w-full transition-all duration-300" />
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </a>
                ))}
              </nav>
            </div>
            
            {/* Connect Section */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-[#E5E7EB] tracking-wider uppercase">Let's Connect</h4>
                <p className="text-sm text-[#6B7280]">Ready to build something amazing?</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-5 rounded-2xl bg-gradient-to-br from-[#0A0F1E]/80 to-[#050816]/80 backdrop-blur-sm border border-[#1F2937]/50 hover:border-[#6366F1]/50 transition-all duration-500 overflow-hidden"
                      style={{
                        boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      {/* Hover Gradient Overlay */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                        style={{
                          background: `radial-gradient(circle at center, ${link.color}15 0%, transparent 70%)`,
                        }}
                      />
                      
                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-start gap-3">
                        {/* Icon Container */}
                        <div 
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1F2937]/50 to-[#0A0F1E]/50 border border-[#374151]/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                          style={{
                            boxShadow: `0 0 0 0 ${link.color}00`,
                          }}
                        >
                          {typeof IconComponent === 'function' && IconComponent.prototype?.render ? (
                            <IconComponent 
                              className="w-6 h-6 transition-colors duration-300" 
                              style={{ color: link.color }}
                            />
                          ) : (
                            <div style={{ color: link.color }}>
                              <IconComponent />
                            </div>
                          )}
                        </div>
                        
                        {/* Text */}
                        <div className="space-y-1">
                          <div className="font-semibold text-[#E5E7EB] group-hover:text-white transition-colors duration-300">
                            {link.name}
                          </div>
                          <div className="text-xs text-[#6B7280] group-hover:text-[#9CA3AF] transition-colors duration-300">
                            {link.description}
                          </div>
                        </div>
                      </div>
                      
                      {/* Corner Accent */}
                      <div 
                        className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                        style={{
                          background: `radial-gradient(circle at top right, ${link.color}30 0%, transparent 70%)`,
                        }}
                      />
                      
                      {/* Bottom Glow */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/0 to-transparent group-hover:via-[#6366F1]/50 transition-all duration-500"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#1F2937]/50" />
          </div>
          <div className="relative flex justify-center">
            <div className="px-6 bg-[#050816]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#6366F1]/50" />
                <div className="w-2 h-2 rounded-full bg-[#8B5CF6]/50" />
                <div className="w-2 h-2 rounded-full bg-[#A855F7]/50" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-sm text-[#6B7280] text-center md:text-left">
              <span>© 2026 </span>
              <span className="font-semibold text-[#E5E7EB]">Shehroz Shafiq</span>
              <span> · All rights reserved</span>
            </div>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <span className="text-[#6B7280]">Crafted with</span>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-lg bg-[#0A0F1E] border border-[#1F2937]/50 text-[#61DAFB] font-medium hover:border-[#61DAFB]/30 transition-colors duration-300">
                  React
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-[#0A0F1E] border border-[#1F2937]/50 text-[#3178C6] font-medium hover:border-[#3178C6]/30 transition-colors duration-300">
                  TypeScript
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-[#0A0F1E] border border-[#1F2937]/50 text-[#06B6D4] font-medium hover:border-[#06B6D4]/30 transition-colors duration-300">
                  Tailwind
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}