import { useState } from "react";
import { CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";

export default function BookingForm() {
  const [date, setDate] = useState(Date);
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book Your Journey</CardTitle>
        <CardDescription>
          Select your travel details to get instant digital tickets
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Mode</label>
          <Input placeholder="Name" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Age</label>
          <Input placeholder="Age" type="number" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Name</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select mode of travel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="flight">Flight</SelectItem>
              <SelectItem value="train">Train</SelectItem>
              <SelectItem value="metro">Metro</SelectItem>
              <SelectItem value="bus">Bus</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">From</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select departure city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ind">Indore</SelectItem>
              <SelectItem value="bp">Bhopal</SelectItem>
              <SelectItem value="jbp">Jabalpur</SelectItem>
              <SelectItem value="mum">Mumbai</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">To</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select destination city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ind">Indore</SelectItem>
              <SelectItem value="bp">Bhopal</SelectItem>
              <SelectItem value="jbp">Jabalpur</SelectItem>
              <SelectItem value="mum">Mumbai</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Prefrence</label>
          <Select defaultValue="any">
            <SelectTrigger>
              <SelectValue placeholder="Select number of passengers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="window">window</SelectItem>
              <SelectItem value="middle">middle</SelectItem>
              <SelectItem value="any">any</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleBooking} disabled={loading}>
          <Link to={"/payment"}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Book Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
