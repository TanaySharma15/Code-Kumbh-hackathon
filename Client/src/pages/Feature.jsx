import { Bot, Clock, Globe, QrCode, Shield, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FeaturesPage() {
  const features = [
    {
      icon: <QrCode className="h-8 w-8" />,
      title: "Digital Tickets",
      description: "Instant QR code generation for seamless entry",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Smart Pricing",
      description: "AI-powered price predictions to save money",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Assistant",
      description: "24/7 support with our intelligent chatbot",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Real-time Updates",
      description: "Get instant notifications about your journey",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Booking",
      description: "End-to-end encrypted transaction system",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Wide Coverage",
      description: "Available in over 100 cities worldwide",
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Powerful Features for Smart Travel
        </h1>
        <p className="text-xl text-muted-foreground">
          Everything you need for a seamless booking experience
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-[1450px] ml-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="transform transition-all hover:-translate-y-1 hover:shadow-lg "
          >
            <CardHeader>
              <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                {feature.icon}
              </div>
              <CardTitle className={"text-2xl font-semibold"}>
                {feature.title}
              </CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Add feature-specific content or screenshots here */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
