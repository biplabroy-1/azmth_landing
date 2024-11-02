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
    <Card className="p-6">
      <CardContent className="space-y-4 pt-4 backdrop-blur-md">
        <Icon className="w-10 h-10 text-purple-600" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};
