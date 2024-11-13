import {
  Card,
  CardContent,
} from "@/components/ui/card";

export const FeatureCard = ({ title, description }) => {
  return (
    <div className="group relative">
      {/* Animated border gradient - Slowed down */}
      <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-[#003e4b] via-[#00ff99] to-[#003e4b] 
        opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500
        animate-gradient-slow"></div>  {/* Changed from animate-gradient-xy to animate-gradient-slow */}
      
      {/* Glowing edge */}
      <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-[#003e4b] via-[#00ff99] to-[#003e4b] 
        opacity-0 group-hover:opacity-75 group-hover:blur-sm transition-all duration-500"></div>

      {/* Main card */}
      <Card className="relative p-6 backdrop-blur-md bg-[#052127]/90 hover:bg-[#052127] 
        transition-all duration-500 h-full border-transparent">
        <CardContent className="space-y-4 pt-4">
          <h3 className="text-xl text-white font-semibold">{title}</h3>
          <p className="text-gray-200">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};