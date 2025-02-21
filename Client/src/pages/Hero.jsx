import { ArrowRight, Clock, QrCode, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

        <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Smart Travel,
                  <span className="block text-primary">Smarter Ticketing</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Transform your travel experience with AI-powered ticketing.
                  Book smarter, travel better.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg">
                  <Link to={"/main"}>Book Now</Link>
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-8 border-t pt-8 sm:grid-cols-4">
                <div>
                  <p className="text-3xl font-bold">50K+</p>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">100+</p>
                  <p className="text-sm text-muted-foreground">Cities</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              {/* Feature Cards with hover effect */}
              <div className="absolute right-0 top-1/2 w-96 -translate-y-1/2 space-y-6">
                <div className="transform transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="rounded-xl border bg-card p-6 shadow-sm">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <QrCode className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Digital Tickets</h3>
                        <p className="text-sm text-muted-foreground">
                          Instant QR code generation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="transform transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="rounded-xl border bg-card p-6 shadow-sm">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Smart Pricing</h3>
                        <p className="text-sm text-muted-foreground">
                          AI-powered price predictions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="transform transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="rounded-xl border bg-card p-6 shadow-sm">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Real-time Updates</h3>
                        <p className="text-sm text-muted-foreground">
                          Live status and notifications
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="transform transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="rounded-xl border bg-card p-6 shadow-sm">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Smart Capacity</h3>
                        <p className="text-sm text-muted-foreground">
                          Optimized seat allocation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-2">
              <QrCode className="h-6 w-6" />
              <span className="text-lg font-bold">SmartTicket</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">
              <Link to={"/features"}>Features</Link>
            </Button>
            <Button variant="ghost" href="/pricing">
              <Link to={"/pricing"}>Pricing</Link>
            </Button>

            <Button variant="ghost">
              <Link to={"/about"}>About</Link>
            </Button>

            <Button href="/login">
              <Link to={"/login"}>Login</Link>
            </Button>
          </div>
        </nav>
      </header>
    </div>
  );
}
