import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "tools" | "languages";
}

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  icon: Icon,
  skills,
  className,
}) => {
  const getCategoryColor = (category: Skill["category"]) => {
    switch (category) {
      case "frontend":
        return "text-blue-500";
      case "backend":
        return "text-green-500";
      case "database":
        return "text-purple-500";
      case "tools":
        return "text-orange-500";
      case "languages":
        return "text-red-500";
      default:
        return "text-primary";
    }
  };

  return (
    <Card className={cn(
      "group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      "bg-card/50 backdrop-blur-sm border-border/50",
      className
    )}>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-4">
        <div className="space-y-3">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  {skill.name}
                </span>
                <Badge variant="outline" className="text-xs">
                  {skill.level}%
                </Badge>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
        
        {/* Category badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {Array.from(new Set(skills.map(s => s.category))).map((category) => (
            <Badge
              key={category}
              variant="skill"
              className={cn("text-xs capitalize", getCategoryColor(category))}
            >
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
