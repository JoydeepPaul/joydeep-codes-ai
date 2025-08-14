import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MessageCircle, 
  Github, 
  Linkedin,
  ChevronUp 
} from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingActionButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickActions = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:joydeeppaul791@gmail.com",
      color: "hover:bg-primary hover:text-primary-foreground",
    },
    {
      icon: Phone,
      label: "Call",
      href: "tel:+918240672326",
      color: "hover:bg-success hover:text-success-foreground",
    },
    {
      icon: MessageCircle,
      label: "Message",
      href: "#contact",
      color: "hover:bg-accent hover:text-accent-foreground",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/JoydeepPaul",
      color: "hover:bg-foreground hover:text-background",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/joydeep-paul-70371724a/",
      color: "hover:bg-blue-600 hover:text-white",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Actions */}
      <div
        className={cn(
          "flex flex-col gap-2 mb-4 transition-all duration-300 ease-out",
          isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {quickActions.map((action, index) => (
          <div
            key={action.label}
            className="flex items-center gap-2 transition-all duration-300"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <Badge
              variant="outline"
              className="bg-background/80 backdrop-blur-sm border-border/50 text-xs"
            >
              {action.label}
            </Badge>
            <Button
              size="icon"
              variant="outline"
              asChild
              className={cn(
                "h-10 w-10 bg-background/80 backdrop-blur-sm border-border/50 shadow-lg",
                action.color,
                "transition-all duration-200 hover:scale-110"
              )}
            >
              <a href={action.href} target="_blank" rel="noopener noreferrer">
                <action.icon className="h-4 w-4" />
              </a>
            </Button>
          </div>
        ))}
      </div>

      {/* Main FAB */}
      <div className="flex flex-col gap-2">
        {/* Expand/Collapse Button */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "h-10 w-10 bg-background/80 backdrop-blur-sm border-border/50 shadow-lg",
            "transition-all duration-200 hover:scale-110",
            isExpanded && "bg-primary text-primary-foreground"
          )}
        >
          <ChevronUp
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isExpanded && "rotate-180"
            )}
          />
        </Button>

        {/* Scroll to Top Button */}
        <Button
          size="icon"
          variant="outline"
          onClick={scrollToTop}
          className={cn(
            "h-10 w-10 bg-background/80 backdrop-blur-sm border-border/50 shadow-lg",
            "transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          )}
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default FloatingActionButton;
