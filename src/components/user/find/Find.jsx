"use client";

import Title from "@/components/admin/Title";
import Toolbar from "./Toolbar";
import Idea from "./Idea";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useMemo, useRef } from "react";

const Find = () => {
  const ideas = useMemo(() => [], []);

  const ref = useRef(null);

  const { measureElement, getVirtualItems } = useVirtualizer({
    count: ideas.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 325,
    measureElement: (el) => {
      if (el.clientHeight > 325) return el.clientHeight;
      return 325;
    },
    lanes: 4,
    overscan: 4,
  });

  return (
    <div className="flex h-[calc(100vh-48px)] w-full flex-col">
      <div className="pb-3 pt-4">
        <Title title="Find a Team" />
      </div>
      <Toolbar />
      <div className="relative h-full overflow-y-scroll">
        {ideas.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            No Teams Available
          </div>
        ) : (
          <div ref={ref}>
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
                >
                  {row.map(
                    ({ title, technologies, description, contact }, i) => (
                      <div
                        key={`column: ${i}`}
                        ref={measureElement}
                        data-index={index + i}
                        className="flex items-start p-2"
                      >
                        <Idea
                          title={title}
                          technologies={technologies}
                          description={description}
                          contact={contact}
                        />
                      </div>
                    ),
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Find;
