import { cn } from "@/lib/utils"
import { ArrowUp, Circle, FileText, Plus } from "lucide-react"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import TimeLine from "./time-line"

const LeftSide = ({ className }: { className: string }) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <div>
        <div className="flex items-center gap-1 py-2 text-gray-600 border-b">
          <FileText className="w-[18px] h-[18px]" />
          <span className="text-base">Description</span>
        </div>
        <div className="mt-2 space-y-2">
          <div className="flex items-start gap-3">
            <Circle className="w-2 h-2 mt-2 text-main shrink-0" />
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="flex items-start gap-3">
            <Circle className="w-2 h-2 mt-2 text-main shrink-0" />
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <Button variant={"ghost"} className="text-main">
            <Plus className="size-4" /> Add sub-tickets
          </Button>
        </div>
      </div>
      <div className="mt-8 space-y-5">
        <div className="flex items-center gap-1 py-2 text-gray-600 border-b">
          <FileText className="w-[18px] h-[18px]" />
          <span className="text-base">Activity</span>
        </div>
        <TimeLine />
        <div className="relative w-full">
          <Textarea placeholder="Leave a comment ..." className="resize-none min-h-[90px]" />
          <Button size={"icon"} variant={"ghost"} className="absolute right-1 bottom-1"><ArrowUp className="text-main" /></Button>
        </div>
      </div>
    </div>
  )
}

export default LeftSide