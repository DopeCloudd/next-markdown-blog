"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Visibilité client";

const chartData = [
  { site: "Sans", visibility: 40, fill: "var(--color-sans)" },
  { site: "Avec", visibility: 85, fill: "var(--color-avec)" },
];

const chartConfig = {
  visibility: {
    label: "Visibilité",
  },
  sans: {
    label: "Sans",
    color: "hsl(var(--chart-1))",
  },
  avec: {
    label: "Avec",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function BarChartAvantages() {
  return (
    <div className="flex justify-center">
      <Card className="max-w-screen-md">
        <CardHeader>
          <CardTitle>
            Visibilité d'une entreprise avec et sans site vitrine
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="site"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="visibility" fill="var(--color-desktop)" radius={8}>
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                  formatter={(value: string) => `${value}%`}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="leading-none text-muted-foreground">
            Pourcentage de visibilité sur le web d'une entreprise avec et sans
            site internet.
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
