"use client"

import * as React from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { MoreVertical, Trash, Edit, Eye } from "lucide-react"

// Export individual components
export const DropdownMenuRoot = DropdownMenu.Root;
export const DropdownMenuTrigger = DropdownMenu.Trigger;
export const DropdownMenuContent = DropdownMenu.Content;
export const DropdownMenuItem = DropdownMenu.Item;
export const DropdownMenuSeparator = DropdownMenu.Separator;
export const DropdownMenuLabel = DropdownMenu.Label;

export default function RadixDropdownMenu() {
  const handleItemClick = (action: string) => {
    console.log(`${action} action clicked`);
    // Add your logic here for each action
  };

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white border border-black outline-none hover:bg-violet3 focus:border-2">
          <MoreVertical className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent
          className="min-w-[220px] bg-white rounded-md p-[5px] border border-black shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
          align="end"
        >
          <DropdownMenuLabel className="pl-[25px] text-xs leading-[25px] text-mauve11">
            Actions
          </DropdownMenuLabel>
          <DropdownMenuItem 
            className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[30px] px-[10px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 cursor-pointer hover:bg-violet3"
            onClick={() => handleItemClick('View')}
          >
            <Eye className="mr-2 h-4 w-4" />
            <span>View</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[30px] px-[10px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 cursor-pointer hover:bg-violet3"
            onClick={() => handleItemClick('Edit')}
          >
            <Edit className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="h-[1px] bg-violet6 m-[5px]" />
          <DropdownMenuItem 
            className="group text-[13px] leading-none text-red-500 rounded-[3px] flex items-center h-[30px] px-[10px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-red-100 data-[highlighted]:text-red-900 cursor-pointer hover:bg-red-100"
            onClick={() => handleItemClick('Delete')}
          >
            <Trash className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenuRoot>
  )
}