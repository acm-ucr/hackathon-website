"use client";
import { ResponsivePie } from "@nivo/pie";

const Pie = ({ data }) => (
  <div className="h-full w-full">
    <ResponsivePie
      data={data}
      margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={5}
      borderWidth={1}
      colors={["#38A3A5", "#57CC99", "#80ED99", "#277D72", "#83C5BE"]}
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
    />
  </div>
);

export default Pie;
