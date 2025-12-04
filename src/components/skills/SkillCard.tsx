import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  level: number;
}

const SkillCard = ({ name, icon: Icon, level }: SkillCardProps) => {
  return (
    <div className="glass p-6 rounded-xl hover-lift group">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Icon size={24} />
        </div>
        <h3 className="font-heading font-semibold text-lg">{name}</h3>
      </div>
      
      {/* Progress Bar */}
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
      <p className="text-right text-sm text-muted-foreground mt-2">{level}%</p>
    </div>
  );
};

export default SkillCard;
