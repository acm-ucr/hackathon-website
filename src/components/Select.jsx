// import { useState, useRef } from "react";
// import { useVirtualizer } from "@tanstack/react-virtual";

// import {
//   Command,
//   CommandEmpty,
//   CommandInput,
//   CommandItem,
//   CommandGroup,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";

// import { ChevronsUpDown } from "lucide-react";
// const Select = ({
//   items,
//   user,
//   field,
//   setUser,
//   placeholder,
//   title,
//   required,
// }) => {
//   const [filtered, setFiltered] = useState(items);
//   const [open, setOpen] = useState(false);
//   const [current, setCurrent] = useState(null);
//   const parent = useRef(null);

//   const { getTotalSize, getVirtualItems, measureElement } = useVirtualizer({
//     count: filtered.length,
//     getScrollElement: () => parent.current,
//     estimateSize: () => 50,
//     overscan: 5,
//   });

//   const handleSearch = (search) => {
//     setFiltered(
//       items.filter((item) =>
//         item.toLowerCase().includes(search.toLowerCase() ?? []),
//       ),
//     );
//   };

//   console.log(getVirtualItems(), filtered.length, filtered);

//   return (
//     <div>
//       <div className="font-semibold">
//         {title}
//         {required && <span className="text-red-500">*</span>}
//       </div>
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <Button
//             variant="outline"
//             role="combobox"
//             aria-expanded={open}
//             className="w-full justify-between"
//           >
//             {current ? current : placeholder}
//             <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-[750px] p-0 text-lg">
//           {/* <Command shouldFilter={false}>
//             <CommandInput
//               onValueChange={handleSearch}
//               placeholder="search"
//               className="text-lg"
//             />
//             <CommandEmpty>No Options Available.</CommandEmpty>
//             <CommandGroup>
//               <CommandList
//                 ref={parent}
//                 style={{
//                   // height: `1000px`,
//                   width: "100%",
//                   overflow: "auto",
//                 }}
//               >
//                 <div
//                   style={{
//                     height: `${getTotalSize()}px`,
//                     width: "100%",
//                     position: "relative",
//                   }}
//                 >
//                   {getVirtualItems().map((virtualItem) => {
//                     const name = filtered[virtualItem.index];

//                     return (
//                       <CommandItem
//                         key={virtualItem.index}
//                         data-index={virtualItem.index}
//                         value={name}
//                         className="text-lg"
//                         onSelect={(value) => {
//                           setCurrent(current === value ? null : name);
//                           setUser({ ...user, [field]: name });
//                           setOpen(false);
//                         }}
//                         ref={measureElement}
//                         style={{
//                           position: "absolute",
//                           top: 0,
//                           left: 0,
//                           width: "100%",
//                           height: `${virtualItem.size}px`,
//                           transform: `translateY(${virtualItem.start}px)`,
//                         }}
//                       >
//                         {name}
//                       </CommandItem>
//                     );
//                   })}
//                 </div>
//               </CommandList>
//             </CommandGroup>
//           </Command> */}

//           <Command shouldFilter={false}>
//             <CommandInput
//               onValueChange={handleSearch}
//               placeholder={placeholder}
//             />
//             <CommandEmpty>No item found.</CommandEmpty>
//             <CommandGroup
//               style={{
//                 width: "100%",
//                 overflow: "auto",
//               }}
//             >
//               <CommandList ref={parent}>
//                 <div
//                   style={{
//                     height: `${getTotalSize()}px`,
//                     width: "100%",
//                     position: "relative",
//                   }}
//                 >
//                   {getVirtualItems().map((virtualOption) => (
//                     <CommandItem
//                       style={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         width: "100%",
//                         height: `${virtualOption.size}px`,
//                         transform: `translateY(${virtualOption.start}px)`,
//                       }}
//                       key={filtered[virtualOption.index]}
//                       value={filtered[virtualOption.index]}
//                       // onSelect={onSelectOption}
//                     >
//                       {filtered[virtualOption.index]}
//                     </CommandItem>
//                   ))}
//                 </div>
//               </CommandList>
//             </CommandGroup>
//           </Command>
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// };

// export default Select;

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
import * as React from "react";

const VirtualizedCommand = ({
  height,
  options,
  placeholder,
  selectedOption,
  onSelectOption,
}) => {
  const [filteredOptions, setFilteredOptions] = React.useState(options);
  const parentRef = React.useRef(null);

  const virtualizer = useVirtualizer({
    count: filteredOptions.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: 5,
  });

  const virtualOptions = virtualizer.getVirtualItems();

  const handleSearch = (search) => {
    setFilteredOptions(
      options.filter((option) =>
        option.value.toLowerCase().includes(search.toLowerCase() ?? []),
      ),
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
    }
  };

  return (
    <Command shouldFilter={false} onKeyDown={handleKeyDown}>
      <CommandInput onValueChange={handleSearch} placeholder={placeholder} />
      <CommandEmpty>No item found.</CommandEmpty>
      <CommandGroup
        ref={parentRef}
        style={{
          height: height,
          width: "100%",
          overflow: "auto",
        }}
      >
        <div
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {virtualOptions.map((virtualOption) => (
            <CommandItem
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualOption.size}px`,
                transform: `translateY(${virtualOption.start}px)`,
              }}
              key={filteredOptions[virtualOption.index].value}
              value={filteredOptions[virtualOption.index].value}
              onSelect={onSelectOption}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  selectedOption === filteredOptions[virtualOption.index].value
                    ? "opacity-100"
                    : "opacity-0",
                )}
              />
              {filteredOptions[virtualOption.index].label}
            </CommandItem>
          ))}
        </div>
      </CommandGroup>
    </Command>
  );
};

function VirtualizedCombobox({
  items,
  searchPlaceholder = "Search items...",
  width = "400px",
  height = "400px",
}) {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
          style={{
            width: width,
          }}
        >
          {selectedOption
            ? items.find((option) => option === selectedOption)
            : searchPlaceholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" style={{ width: width }}>
        <VirtualizedCommand
          height={height}
          options={items.map((option) => ({ value: option, label: option }))}
          placeholder={searchPlaceholder}
          selectedOption={selectedOption}
          onSelectOption={(currentValue) => {
            setSelectedOption(
              currentValue === selectedOption ? "" : currentValue,
            );
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

export default VirtualizedCombobox;
