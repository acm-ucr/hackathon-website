"use client";

import Title from "@/components/admin/Title";
import Toolbar from "./Toolbar";
import Idea from "./Idea";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useMemo, useRef } from "react";

const generateDummyIdeas = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    title: `Idea ${i}`,
    technologies: ["Python", "TensorFlow"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    contact: "Please contact me on Discord using webdiv",
  }));
};

const Find = () => {
  const ideas = useMemo(() => generateDummyIdeas(75), []);

  const containerRef = useRef(null);

  const { measureElement, getVirtualItems } = useVirtualizer({
    count: ideas.length,
    getScrollElement: () => containerRef.current,
    estimateSize: () => 30,
    measureElement: (el) => {
      if (el.clientHeight > 300) return 70;
      if (el.clientHeight > 200) return 60;
      else return 30;
    },
  });

  return (
    <div className="flex h-[calc(100vh-48px)] w-full flex-col">
      <div className="pb-3 pt-4">
        <Title title="Find a Team" />
      </div>
      <Toolbar />
      <div ref={containerRef} className="relative h-full overflow-y-scroll">
        {getVirtualItems().map(({ index, size, start }) => {
          if (index % 4) return null;
          const row = ideas.slice(index, index + 4);
          return (
            <div
              key={`row: ${index}`}
              className="grid grid-cols-4"
              style={{
                height: `${size}px`,
                transform: `translateY(${start}px)`,
              }}
            >
              {row.map((group, i) => (
                <div
                  key={`column: ${index}`}
                  ref={measureElement}
                  data-index={index + i}
                  className="flex items-start p-2"
                >
                  <Idea
                    title={group.title}
                    technologies={group.technologies}
                    description={group.description}
                    contact={group.contact}
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Find;
