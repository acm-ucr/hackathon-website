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
  const ideas = useMemo(() => generateDummyIdeas(1000), []);

  const ref = useRef(null);

  const { measureElement, getVirtualItems } = useVirtualizer({
    count: ideas.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 325,
    lanes: 4,
    overscan: 4,
  });

  return (
    <div className="flex h-[calc(100vh-48px)] w-full flex-col">
      <div className="pb-3 pt-4">
        <Title title="Find a Team" />
      </div>
      <Toolbar />
      <div ref={ref} className="relative h-full overflow-y-scroll">
        {getVirtualItems().map(({ index, size, start }) => {
          if (index % 4) return null;
          const row = ideas.slice(index, index + 4);
          return (
            <div
              key={`row: ${Math.floor(index / 4)}`}
              className="absolute left-0 top-0 grid w-full grid-cols-4"
              style={{
                height: `${size}px`,
                transform: `translateY(${start}px)`,
              }}
              ref={measureElement}
              data-index={index}
            >
              {row.map(({ title, technologies, description, contact }, i) => (
                <div key={`column: ${i}`} className="flex items-start p-2">
                  <Idea
                    title={title}
                    technologies={technologies}
                    description={description}
                    contact={contact}
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
