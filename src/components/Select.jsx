import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/utils/tailwind";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState, useRef } from "react";

const VirtualizedCommand = ({ options, selected, setSelected, setOpen }) => {
  const [filteredOptions, setFilteredOptions] = useState(options);
  const parentRef = useRef(null);

  const { getTotalSize, getVirtualItems } = useVirtualizer({
    count: filteredOptions.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40,
    overscan: 5,
  });

  const handleSearch = (search) => {
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(search.toLowerCase() ?? []),
      ),
    );
  };

  const handleKeyDown = (event) => {
    console.log(event.key);
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
    }
  };

  return (
    <Command shouldFilter={false} onKeyDown={handleKeyDown}>
      <CommandInput onValueChange={handleSearch} placeholder="search" />
      <CommandEmpty>No item found.</CommandEmpty>
      <CommandGroup
        className="h-[400px] w-full overflow-y-scroll"
        ref={parentRef}
      >
        <div
          className="relative w-full"
          style={{
            height: `${getTotalSize()}px`,
          }}
        >
          {getVirtualItems().map((virtualRow) => (
            <CommandItem
              className="absolute left-0 top-0 w-full"
              style={{
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
              key={virtualRow.index}
              value={filteredOptions[virtualRow.index]}
              onSelect={() => {
                setSelected(filteredOptions[virtualRow.index]);
                setOpen(false);
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  selected === filteredOptions[virtualRow.index]
                    ? "opacity-100"
                    : "opacity-0",
                )}
              />
              {filteredOptions[virtualRow.index]}
            </CommandItem>
          ))}
        </div>
      </CommandGroup>
    </Command>
  );
};

const Select = ({ title, required = false, items, placeholder }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <p className="mb-0 font-semibold">
        {title}
        {required && <span className="text-red-500">*</span>}
      </p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {selected ? selected : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[700px] p-0">
          <VirtualizedCommand
            options={items}
            placeholder={placeholder}
            selected={selected}
            setSelected={setSelected}
            setOpen={setOpen}
          />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Select;
