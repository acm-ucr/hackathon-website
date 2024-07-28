"use client";

import Title from "@/components/admin/Title";
import Toolbar from "./Toolbar";
import Idea from "./Idea";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

const generateDummyIdeas = (count) => {
  const dummyIdeas = [];
  for (let i = 1; i <= count; i++) {
    dummyIdeas.push({
      title: `Idea ${i}`,
      technologies: ["Python", "TensorFlow"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      contact: "Please contact me on Discord using webdiv",
    });
  }
  return dummyIdeas;
};

const Find = () => {
  // const ideas = [
  //   {
  //     title: "Idea 1",
  //     technologies: ["Next.js", "PyTorch"],
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     contact: "Please contact me on Discord using webdiv",
  //   },
  //   {
  //     title: "Idea 2",
  //     technologies: ["Python", "TensorFlow"],
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     contact: "Please contact me on Discord using webdiv",
  //   },
  //   {
  //     title: "Idea 3",
  //     technologies: ["Python", "TensorFlow"],
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     contact: "Please contact me on Discord using webdiv",
  //   },
  //   {
  //     title: "Idea 4",
  //     technologies: ["Python", "TensorFlow"],
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     contact: "Please contact me on Discord using webdiv",
  //   },
  // ];

  const ideas = generateDummyIdeas(75);

  const containerRef = useRef(null);

  const { measureElement, getVirtualItems } = useVirtualizer({
    count: ideas.length,
    getScrollElement: () => containerRef.current,
    estimateSize: () => 30,
    measureElement: (el) => {
      if (el.clientHeight > 300) return 80;
      else if (el.clientHeight > 200) return 60;
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
        {getVirtualItems().map((virtualItem, index) => {
          if (virtualItem.index % 4) return null;
          const row = ideas.slice(index, index + 4);
          return (
            <div
              key={`row: ${Math.floor(virtualItem.index / 4)}`}
              className="grid grid-cols-4"
              style={{
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              {row.map((group, index) => (
                <div
                  key={`column: ${index}`}
                  ref={measureElement}
                  data-index={virtualItem.index + index}
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
