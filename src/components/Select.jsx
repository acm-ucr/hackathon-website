import { useState, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

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
  const [filtered, setFiltered] = useState(items);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);
  const parent = useRef(null);
  const { getTotalSize, getVirtualItems, measureElement } = useVirtualizer({
    count: filtered.length,
    getScrollElement: () => parent.current,
    estimateSize: () => 50,
  });

  const handleSearch = (search) => {
    setFiltered(
      items.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase() ?? [])
      )
    );
  };

  console.log(getVirtualItems());

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
        <PopoverContent className="w-[750px] p-0 text-lg ">
          <Command shouldFilter={false}>
            <CommandInput
              onValueChange={handleSearch}
              placeholder="search"
              className="text-lg "
            />
            <CommandEmpty>No Options Available.</CommandEmpty>
            <CommandList ref={parent}>
              <div
                style={{
                  height: `${getTotalSize()}px`,
                  width: "100%",
                  position: "relative",
                }}
              >
                {getVirtualItems().map((virtualItem) => {
                  const name = filtered[virtualItem.index];

                  return (
                    <CommandItem
                      key={name}
                      data-index={virtualItem.index}
                      value={name}
                      className="text-lg"
                      onSelect={(value) => {
                        setCurrent(current === value ? null : name);
                        setUser({ ...user, [field]: name });
                        setOpen(false);
                      }}
                      ref={measureElement}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: `${virtualItem.size}px`,
                        transform: `translateY(${virtualItem.start}px)`,
                      }}
                    >
                      {name}
                    </CommandItem>
                  );
                })}
              </div>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Select;
