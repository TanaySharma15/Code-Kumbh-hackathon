import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  { date: "Mon", price: 200 },
  { date: "Tue", price: 250 },
  { date: "Wed", price: 230 },
  { date: "Thu", price: 300 },
  { date: "Fri", price: 350 },
  { date: "Sat", price: 400 },
  { date: "Sun", price: 450 },
];

export default function PriceForecast() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Price Forecast</CardTitle>
        <CardDescription>
          Predicted ticket prices for the next 7 days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#0ea5e9"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
