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

  const chartConfig = Object.entries(data).map(([type, _]) => {
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

  const CustomLabel = ({ x, y, value }) => {
    return (
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#000"
        fontSize="16px"
        fontWeight="bold"
      >
        {value > 0 ? value : ""}
      </text>
    );
  };

  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 p-2">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-w-[300px]"
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
              innerRadius={70}
              strokeWidth={5}
              label={<CustomLabel />}
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
              innerRadius={55}
              outerRadius={60}
              strokeWidth={5}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Chart;
