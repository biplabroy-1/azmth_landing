import { NeonGradientCard } from "../components/ui/neon-gradient-card";

export const FeatureCard = ({ title, description }) => {
  return (
    // <div className="group relative">
    //   {/* Animated border gradient - Slowed down */}
    //   <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-[#003e4b] via-[#00ff99] to-[#003e4b]
    //     opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500
    //     animate-gradient-slow"></div>  {/* Changed from animate-gradient-xy to animate-gradient-slow */}

    //   {/* Glowing edge */}
    //   <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-[#003e4b] via-[#00ff99] to-[#003e4b]
    //     opacity-0 group-hover:opacity-75 group-hover:blur-sm transition-all duration-500"></div>

    //   {/* Main card */}
    //   <Card className="relative p-6 backdrop-blur-md bg-[#052127]/90 hover:bg-[#052127]
    //     transition-all duration-500 h-full border-transparent">
    //     <CardContent className="space-y-4 pt-4">
    //       <h3 className="text-xl text-white font-semibold">{title}</h3>
    //       <p className="text-gray-200">{description}</p>
    //     </CardContent>
    //   </Card>
    // </div>

    <NeonGradientCard className="w-1/2 items-center flex justify-center text-center">
      <div className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        {title}
      </div>
      <h3 className="text-lg">
      {description}
      </h3>
    </NeonGradientCard>
  );
};
