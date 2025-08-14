import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  image,
  className,
}) => {
  return (
    <Card className={cn(
      "group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
      "bg-card/50 backdrop-blur-sm border-border/50",
      className
    )}>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Image placeholder or actual image */}
      {image && (
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      )}
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-4">
        {/* Technology badges */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="tech" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="flex gap-2 pt-2">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live
              </a>
            </Button>
          )}
          {!liveUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
