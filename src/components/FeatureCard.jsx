// components/FeatureCard.js
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="p-6 backdrop-blur-md bg-transparent hover:bg-gradient-to-r from-[#003e4b] to-[#00ff99] transition-all duration-1000 ease-in-out">
      <CardContent className="space-y-4 pt-4 ">
        <Icon className="w-10 h-10 text-white" />
        <h3 className="text-xl text-white font-semibold">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </CardContent>
    </Card>
  );
};
