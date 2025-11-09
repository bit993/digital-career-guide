import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Building2 } from "lucide-react";

interface ProfessionCardProps {
  title: string;
  description: string;
  education: string[];
  universities: string[];
  skills: string[];
  icon: React.ReactNode;
}

export const ProfessionCard = ({ 
  title, 
  description, 
  education, 
  universities, 
  skills,
  icon 
}: ProfessionCardProps) => {
  return (
    <Card className="group hover:shadow-glow transition-all duration-300 border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
      
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-gradient-primary text-white">
            {icon}
          </div>
          <div className="flex-1">
            <CardTitle className="text-2xl mb-2">{title}</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap className="w-5 h-5 text-primary" />
            <h4 className="font-semibold text-lg">Необходимое образование</h4>
          </div>
          <ul className="space-y-2">
            {education.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-accent mt-1">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="w-5 h-5 text-primary" />
            <h4 className="font-semibold text-lg">ВУЗы России</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {universities.map((uni, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-1">
                {uni}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Ключевые навыки</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} className="bg-gradient-accent border-0">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
