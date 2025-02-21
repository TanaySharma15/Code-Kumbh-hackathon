import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const team = [
    {
      name: "Nikhil Patidar",
      role: "Leader",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sumit Dhurvey",
      role: "Member",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Rishabh Dangi",
      role: "Member",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Teena uikey",
      role: "Member",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Tanay Sharma",
      role: "Member",
      image: "/placeholder.svg?height=400&width=400",
    },
  ];

  return (
    <div className="container mx-auto py-16 pl-12 pr-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          About SmartTicket
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're revolutionizing the way people book and manage their travel with
          AI-powered solutions and cutting-edge technology.
        </p>
      </div>

      <div className="grid gap-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg">
                At SmartTicket, we believe that booking travel should be simple,
                transparent, and intelligent. Our mission is to eliminate the
                stress and uncertainty from travel booking through innovative
                technology and predictive analytics.
              </p>
              <p className="text-lg">
                Founded in 2024, we've helped thousands of travelers save time
                and money while enjoying a seamless booking experience.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              {/* <Image
                src="/placeholder.svg?height=600&width=800"
                alt="SmartTicket Office"
                fill
                className="object-cover"
              /> */}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                    {/* <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
