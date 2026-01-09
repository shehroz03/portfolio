import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { ProjectDetailsModal } from './ProjectDetailsModal';

const projects = [
  {
    title: 'TourEase – Smart Tour Booking App',
    subtitle: 'Flutter · Firebase',
    description: 'End‑to‑end tour booking application built with Flutter and Firebase, featuring real‑time packages, Google Maps integration, and secure bookings so agencies and travelers can manage trips in one place.',
    longDescription: 'TourEase is a comprehensive mobile application designed to revolutionize the tour booking experience. Built with Flutter and Firebase, it provides a seamless platform connecting travel agencies with customers. The app features real-time package updates, interactive Google Maps integration for location visualization, secure payment processing, and a robust booking management system. Users can browse available tours, check real-time availability, view detailed itineraries, and complete bookings with just a few taps.',
    highlights: [
      'Real-time tour package updates with Firebase Firestore synchronization',
      'Interactive Google Maps integration showing tour locations and routes',
      'Secure payment gateway integration with multiple payment options',
      'Push notifications for booking confirmations and tour updates',
      'Admin panel for agencies to manage tours, bookings, and customer inquiries',
      'Offline mode support for viewing saved tours without internet',
      'Multi-language support for international travelers',
    ],
    image: 'https://images.unsplash.com/photo-1673515336319-20a3ea59c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyJTIwYm9va2luZyUyMHRyYXZlbCUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3Njc4ODYwODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
    demoUrl: undefined,
    githubUrl: undefined,
  },
  {
    title: 'ScholarIQ – AI Scholarship Platform',
    subtitle: 'AI · Web App',
    description: 'AI‑driven web app that analyses student profiles and documents to recommend relevant scholarships, reducing manual searching and helping students focus on high‑probability opportunities.',
    longDescription: 'ScholarIQ leverages artificial intelligence to democratize access to educational funding. The platform uses advanced matching algorithms to analyze student profiles, academic records, and eligibility criteria against thousands of scholarship opportunities. Students simply upload their documents, complete their profile, and the AI engine automatically identifies the best-fit scholarships. The system considers factors like GPA, field of study, demographics, extracurricular activities, and essay topics to provide personalized recommendations with match scores.',
    highlights: [
      'AI-powered scholarship matching algorithm with 90%+ accuracy',
      'Intelligent document parsing to extract relevant student information',
      'Personalized scholarship recommendations with match scores',
      'Deadline tracking and application status management',
      'Automated eligibility checking to filter out non-qualifying opportunities',
      'Essay prompt analysis and writing tips powered by natural language processing',
      'Dashboard with scholarship statistics and application progress tracking',
    ],
    image: 'https://images.unsplash.com/photo-1616161560065-4bbfa1103fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc2Nzg4NjA4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
    demoUrl: undefined,
    githubUrl: undefined,
  },
  {
    title: 'Community Web App – Onboarding & Member Experience',
    subtitle: 'React · UI/UX',
    description: 'Modern React‑based community dashboard with a guided onboarding flow, role‑based groups, suggested members, and an activity‑driven home feed so new users never land on an empty screen.',
    longDescription: 'A feature-rich community platform built with React that brings people together around shared interests. The application provides a smooth user experience from onboarding through daily engagement. Users can join role-based groups, discover suggested connections, participate in discussions, and stay updated through an intelligent activity feed. The platform emphasizes clean UI/UX design with smooth animations, intuitive navigation, and responsive layouts that work beautifully across all devices.',
    highlights: [
      'Streamlined onboarding flow with profile customization and interest selection',
      'Role-based group system with permissions and moderation tools',
      'Smart member suggestions based on interests and activity patterns',
      'Real-time activity feed with post filtering and search',
      'Rich content creation with markdown support and media uploads',
      'Notification system for mentions, replies, and group updates',
      'Dark mode support with Neo-Purple Tech theme integration',
    ],
    image: 'https://images.unsplash.com/photo-1708447135655-e36e87ba4068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzb2NpYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc2Nzg4NjA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false,
    demoUrl: undefined,
    githubUrl: undefined,
  },
  {
    title: 'Data Extraction for Cafés – Fiverr Client Project',
    subtitle: 'Node.js · Automation',
    description: 'Node.js‑powered scraping workflow that delivers 400+ cleaned and deduplicated café leads per batch, exported in ready‑to‑use CSV files for international clients\' outreach campaigns.',
    longDescription: 'A sophisticated data extraction system built with Node.js that automates the collection and processing of café business information. This project demonstrates expertise in web scraping, data cleaning, and workflow automation. The system intelligently navigates multiple data sources, extracts relevant business details (name, address, phone, email, hours, ratings), validates and cleans the data, removes duplicates, and exports structured datasets ready for marketing campaigns. Built to handle high-volume requests while respecting website policies and rate limits.',
    highlights: [
      'Automated scraping of 400+ café leads per batch with high accuracy',
      'Multi-source data aggregation from directories and mapping services',
      'Intelligent data cleaning and validation to ensure quality',
      'Duplicate detection and removal using fuzzy matching algorithms',
      'Export to multiple formats (CSV, Excel, JSON) based on client needs',
      'Geo-location enrichment with coordinates and neighborhood data',
      'Scheduling system for automated daily/weekly data updates',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwc3ByZWFkc2hlZXR8ZW58MXx8fHwxNzY3ODg2MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false,
    demoUrl: undefined,
    githubUrl: undefined,
  },
];

export function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const handleViewDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear after animation
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative" ref={ref}>
        <div className={`max-w-3xl mx-auto text-center mb-16 space-y-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl tracking-tight">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            A showcase of real-world products I've built and shipped
          </p>
        </div>

        {/* Compact Card Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-border hover:border-primary/50 transition-all duration-500 group relative flex flex-col bg-card ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Image Thumbnail */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary text-primary-foreground shadow-lg shadow-primary/25 text-xs">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow relative z-10">
                <div className="space-y-3 flex-grow">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium leading-tight">{project.title}</h3>
                    <p className="text-xs text-primary uppercase tracking-wide">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group/btn hover:bg-primary/10 hover:border-primary/50"
                    onClick={() => handleViewDetails(project)}
                  >
                    View details
                    <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="border-primary/50 hover:bg-primary/10">
            <a href="#contact" className="group">
              Interested in working together?
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <ProjectDetailsModal
          isOpen={isModalOpen}
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}