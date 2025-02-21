import { QrCode } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Popover } from "../ui/popover";

const tickets = [
  {
    id: "T1234",
    from: "Indore",
    to: "Jabalpur",
    date: "Feb 25, 2024",
    status: "Upcoming",
    prefrence: "window",
  },
  {
    id: "T1235",
    from: "Jabalpur",
    to: "Mumbai",
    date: "Mar 1, 2024",
    status: "Upcoming",
    prefrence: "none",
  },
];

export default function TicketsList() {
  const handleQrGen = () => {
    <Popover></Popover>;
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Tickets</CardTitle>
        <CardDescription>View and manage your booked tickets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="space-y-1">
                <p className="font-medium">
                  {ticket.from} → {ticket.to}
                </p>
                <p className="text-sm text-muted-foreground">
                  {ticket.date} · Ticket #{ticket.id}
                </p>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                  {ticket.status}
                </span>
              </div>
              <Button variant="outline" size="icon " onClick={handleQrGen}>
                <QrCode className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
