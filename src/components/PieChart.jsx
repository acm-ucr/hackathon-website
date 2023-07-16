"use client";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "sass",
    label: "sass",
    value: 514,
    color: "hsl(327, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 43,
    color: "hsl(35, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 527,
    color: "hsl(199, 70%, 50%)",
  },
  {
    id: "hack",
    label: "hack",
    value: 356,
    color: "hsl(213, 70%, 50%)",
  },
  {
    id: "ruby",
    label: "ruby",
    value: 84,
    color: "hsl(340, 70%, 50%)",
  },
];

const MyResponsivePie = () => (
  <div className="h-80">
    <ResponsivePie
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }} // was 40, 80, 80, 80
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "solid",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "solid",
        },
      ]}
      legends={[
        {
          anchor: "right",
          direction: "column",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 5,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  </div>
);

export default MyResponsivePie;
