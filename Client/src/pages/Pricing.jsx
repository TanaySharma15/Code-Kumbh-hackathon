import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for occasional travelers",
      features: [
        "Basic ticket booking",
        "QR code tickets",
        "Email support",
        "Real-time updates",
      ],
    },
    {
      name: "Pro",
      price: "$9.99/month",
      description: "For frequent travelers",
      features: [
        "Everything in Basic",
        "Price predictions",
        "Priority support",
        "Flexible booking",
        "No booking fees",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations",
      features: [
        "Everything in Pro",
        "Custom integration",
        "Account manager",
        "Bulk booking",
        "Analytics dashboard",
        "API access",
      ],
    },
  ];

  return (
    <div className="container mx-auto py-16 pl-12 pr-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-muted-foreground">
          Choose the plan that works best for you
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <p className="text-3xl font-bold mt-4">{plan.price}</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
