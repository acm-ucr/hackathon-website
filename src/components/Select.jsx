import { useState, useRef } from "react";
// import { useVirtualizer } from "@tanstack/react-virtual";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { ChevronsUpDown } from "lucide-react";
const Select = ({
  items,
  user,
  field,
  setUser,
  placeholder,
  title,
  required,
}) => {
  const [options] = useState(items);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);
  const parent = useRef(null);
  // const { getTotalSize, getVirtualItems, measureElement } = useVirtualizer({
  //   count: options.length,
  //   getScrollElement: () => ref.current,
  //   estimateSize: () => 50,
  //   measureElement: (el) => {
  //     if (el.innerText.length > 45) return 50;
  //     else return 35;
  //   },
  // });

  return (
    <div>
      <div className="font-semibold">
        {title}
        {required && <span className="text-red-500">*</span>}
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {current ? current : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-96 p-0 text-lg ">
          <Command>
            <CommandInput placeholder="search" className="text-lg " />
            <CommandEmpty>No Options Available.</CommandEmpty>
            <CommandList ref={parent}>
              {options.map((option, index) => (
                <CommandItem
                  key={index}
                  value={option}
                  className="text-lg"
                  onSelect={(value) => {
                    setCurrent(current === value ? null : option);
                    setUser({ ...user, [field]: option });
                    setOpen(false);
                  }}
                >
                  {option}
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Select;
