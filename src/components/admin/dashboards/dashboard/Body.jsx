import { flexRender } from "@tanstack/react-table";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Body = ({ getIsSelected, getVisibleCells, Dropdown, original }) => {
  return (
    <>
      <Accordion
        type="multiple"
        className="border-b-[1px] border-hackathon-gray-200"
      >
        <AccordionItem value="participant-info">
          <div
            className={`flex items-center px-3 ${
              getIsSelected() ? "bg-green-100" : "bg-white"
            }`}
            data-cy={original.uid}
          >
            {getVisibleCells().map(({ id, column, getContext }) => (
              <div
                className={`flex items-center ${column.columnDef.meta?.width}`}
                key={id}
              >
                {flexRender(column.columnDef.cell, getContext())}
              </div>
            ))}
            <AccordionTrigger className="flex items-center justify-between p-4 text-sm font-medium"></AccordionTrigger>
          </div>

          <AccordionContent>
            <Dropdown object={original} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Body;
