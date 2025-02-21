import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import PriceForecast from "@/components/utils/PriceForecast";
import TicketsList from "@/components/utils/ticketList";
import BookingForm from "@/components/utils/BookingForm";

export default function BookingPage() {
  return (
    <main className="container mx-auto p-4 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Smart Travel Booking
        </h1>
        <p className="text-muted-foreground">
          Book your tickets instantly and travel stress-free
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <BookingForm />
        </div>
        <div className="space-y-6">
          <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
            <PriceForecast />
          </Suspense>
          <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
            <TicketsList />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
