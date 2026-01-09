import { useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    subtitle: string;
    image: string;
    description: string;
    longDescription: string;
    highlights: string[];
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
  } | null;
}

export function ProjectDetailsModal({ isOpen, onClose, project }: ProjectDetailsModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Focus trap implementation
  useEffect(() => {
    if (!isOpen) return;

    const modal = document.getElementById('project-modal');
    if (!modal) return;

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    modal.addEventListener('keydown', handleTab as any);
    firstElement?.focus();

    return () => {
      modal.removeEventListener('keydown', handleTab as any);
    };
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        id="project-modal"
        className="relative w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] bg-card border border-border rounded-t-3xl md:rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom md:slide-in-from-bottom-4 md:zoom-in-95 duration-300"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-secondary flex items-center justify-center transition-colors icon-hover"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] md:max-h-[85vh] scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 overflow-hidden bg-secondary">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            {project.featured && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                  Featured
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Header */}
            <div className="space-y-3">
              <h2 id="modal-title" className="text-3xl md:text-4xl tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm text-primary uppercase tracking-wide">
                {project.subtitle}
              </p>
            </div>

            {/* Long Description */}
            <div className="prose prose-invert max-w-none">
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl">Key Features & Highlights</h3>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            {(project.demoUrl || project.githubUrl) && (
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                {project.demoUrl && (
                  <Button size="lg" asChild className="flex-1 shadow-lg shadow-primary/25 hover:shadow-primary/40">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="group">
                      View Live Demo
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button size="lg" variant="outline" asChild className="flex-1 border-primary/50 hover:bg-primary/10">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            )}

            {/* Contact CTA */}
            <div className="bg-secondary/50 border border-border rounded-xl p-6 space-y-3">
              <h4 className="text-lg">Interested in a similar project?</h4>
              <p className="text-sm text-muted-foreground">
                I can help you build something similar or discuss how this solution can be adapted for your needs.
              </p>
              <Button size="sm" variant="outline" asChild className="border-primary/50 hover:bg-primary/10">
                <a href="#contact">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
