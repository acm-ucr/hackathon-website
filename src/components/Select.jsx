// import { ChevronDown } from "lucide-react";
// import { useState, useEffect, useRef } from "react";
// import { useVirtualizer } from "@tanstack/react-virtual";

// const Select = ({
//   items,
//   user,
//   field,
//   setUser,
//   placeholder,
//   title,
//   editable = true,
//   required,
//   searchable = false,
// }) => {
//   const [options, setOptions] = useState(items);
//   const [show, setShow] = useState(false);
//   const [input, setInput] = useState("");
//   const ref = useRef(null);
//   const parent = useRef(null);

//   const { getTotalSize, getVirtualItems, measureElement } = useVirtualizer({
//     count: options.length,
//     getScrollElement: () => ref.current,
//     estimateSize: () => 50,
//     measureElement: (el) => {
//       if (el.innerText.length > 45) return 50;
//       else return 35;
//     },
//   });

//   const handleClickOutside = ({ target }) => {
//     if (parent.current && !parent.current.contains(target)) {
//       setShow(false);
//     }
//   };

//   const handleInput = (e) => {
//     setOptions(
//       items.filter((name) =>
//         name.toLowerCase().search(e.target.value.toLowerCase()) === -1
//           ? false
//           : true,
//       ),
//     );

//     setInput(e.target.value);
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   return (
//     <div ref={parent}>
//       <p className="mb-1 font-semibold">
//         {title}
//         {required && <span className="text-red-500">*</span>}
//       </p>
//       <button
//         disabled={!editable}
//         onClick={() => setShow(!show)}
//         className={`${
//           !user[field] && "text-hackathon-gray-200"
//         } flex w-full items-center justify-between bg-transparent pb-1`}
//         data-cy="select-toggle"
//       >
//         {user[field] || placeholder}
//         {editable && (
//           <ChevronDown
//             className={`${show && "rotate-180"} text-black duration-300`}
//             data-cy="select-arrow"
//           />
//         )}
//       </button>
//       {show && (
//         <div className="relative">
//           <div
//             ref={ref}
//             className="absolute h-fit max-h-[35vh] w-full overflow-y-scroll bg-hackathon-green-100"
//             data-cy="select-menu"
//           >
//             {searchable && (
//               <input
//                 value={input}
//                 autoFocus
//                 className="sticky left-0 top-0 z-10 my-1 w-full bg-hackathon-green-100 px-2 py-2 outline-none ring-0"
//                 placeholder="search"
//                 onChange={handleInput}
//               />
//             )}
//             {options.length === 0 && (
//               <div className="p-2 text-hackathon-gray-200">
//                 No Options Available
//               </div>
//             )}
//             <div
//               className="relative w-full"
//               style={{
//                 height: `${getTotalSize()}px`,
//               }}
//             >
//               {getVirtualItems().map((virtualRow) => {
//                 const name = options[virtualRow.index];

//                 return (
//                   <div
//                     className="absolute left-0 top-0 flex w-full items-center px-2 hover:cursor-pointer hover:bg-hackathon-green-200"
//                     key={virtualRow.index}
//                     data-index={virtualRow.index}
//                     ref={measureElement}
//                     onClick={() => {
//                       setUser({ ...user, [field]: name });
//                       setShow(false);
//                     }}
//                     style={{
//                       height: `${virtualRow.size}px`,
//                       transform: `translateY(${virtualRow.start}px)`,
//                     }}
//                   >
//                     {name}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Select;

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

const VirtualizedContent = ({ items, setSelected }) => {
  const ref = useRef(null);
  const { getTotalSize, getVirtualItems } = useVirtualizer({
    count: items.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 50,
  });
  return (
    <DropdownMenuContent ref={ref} className="h-[400px] overflow-y-scroll">
      <DropdownMenuGroup className="relative w-[700px]" asChild>
        <div style={{ height: `${getTotalSize()}px` }}>
          {getVirtualItems().map((virtualRow) => {
            const name = items[virtualRow.index];

            return (
              <DropdownMenuItem
                className="absolute left-0 top-0 w-full"
                style={{
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
                key={virtualRow.index}
                onClick={() => setSelected(name)}
              >
                {name}
              </DropdownMenuItem>
            );
          })}
        </div>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  );
};

const Select = ({ items, title, placeholder }) => {
  const [selected, setSelected] = useState(null);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button className="w-full justify-between" variant="outline">
          {selected ? selected : placeholder}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <VirtualizedContent items={items} setSelected={setSelected} />
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

export default Select;
