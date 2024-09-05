"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import { ROLES, SIZES, DIETS, SCHOOLS } from "@/data/admin/Statistics";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const Chart = ({ title, status = null, data }) => {
  console.log("status", status);
  console.log("chart", data);
  console.log(ROLES[status]);
  const ITEMS = { ...ROLES, ...SIZES, ...DIETS, ...SCHOOLS };

  const statusData =
    status !== null
      ? [
          {
            type: ROLES[status].label,
            value: 1,
            className: ROLES[status].className,
            fill: ROLES[status].fill,
          },
        ]
      : [];

  const chartData = Object.entries(data).map(([type, value]) => ({
    type: ITEMS[type].label,
    value: value,
    className: ITEMS[type].className,
    fill: ITEMS[type].fill,
  }));

  const chartConfig = Object.entries(data).map(([type, value]) => {
    const label = ITEMS[type].label;

    return {
      label: {
        label: label,
      },
    };
  });

  const total = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, [chartData]);

  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="type"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {total.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            {title}
                          </tspan>
                        </text>
                    );
                  }
                }}
              />
            </Pie>
            <Pie
              data={statusData}
              dataKey="value"
              nameKey="type"
              innerRadius={50}
              outerRadius={55}
              strokeWidth={5}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Chart;
