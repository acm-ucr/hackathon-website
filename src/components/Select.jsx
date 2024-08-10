import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Input } from "@/components/ui/input";

const VirtualizedContent = ({ items, setSelected, userFn }) => {
  const ref = useRef(null);
  const [options, setOptions] = useState(items);
  const { getTotalSize, getVirtualItems } = useVirtualizer({
    count: options.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 50,
  });
  const handleInput = (e) => {
    setOptions(
      items.filter((name) =>
        name.toLowerCase().search(e.target.value.toLowerCase()) === -1
          ? false
          : true,
      ),
    );
  };
  return (
    <DropdownMenuContent
      ref={ref}
      className="h-fit max-h-[400px] overflow-y-scroll"
      data-cy="select-menu"
    >
      <Input
        placeholder="search"
        className="sticky top-0 z-50 bg-white"
        onKeyDown={(event) => event.stopPropagation()}
        onChange={handleInput}
      />
      <DropdownMenuGroup className="relative w-[700px]">
        <div style={{ height: `${getTotalSize()}px` }}>
          {getVirtualItems().map((virtualRow) => {
            const option = options[virtualRow.index];

            return (
              <DropdownMenuItem
                className="absolute left-0 top-0 w-full"
                style={{
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
                key={virtualRow.index}
                onClick={() => {
                  console.log(option);
                  setSelected(option.name || option);
                  userFn(option);
                }}
              >
                {option.name || option}
              </DropdownMenuItem>
            );
          })}
        </div>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  );
};

const Select = ({
  items,
  title,
  required,
  placeholder,
  user,
  setUser,
  field,
  userFn = (value) => setUser({ ...user, [field]: value }),
}) => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {title && (
        <p className="mb-1 font-semibold">
          {title}
          {required && <span className="text-red-500">*</span>}
        </p>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            data-cy="select-toggle"
            className="w-full justify-between"
            variant="outline"
          >
            {selected ? selected : placeholder}
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <VirtualizedContent
            items={items}
            setSelected={setSelected}
            userFn={userFn}
          />
        </DropdownMenuPortal>
      </DropdownMenu>
    </>
  );
};

export default Select;
