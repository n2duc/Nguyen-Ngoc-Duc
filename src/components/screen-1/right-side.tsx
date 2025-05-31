import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";

const RightSide = ({ className }: { className: string }) => {
  return (
    <div className={cn("", className)}>
      <div className="flex items-center justify-between text-gray-600 border-b">
        <Button variant={"ghost"} className="text-base">
          Properties <ChevronDown />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <ChevronRight />
        </Button>
      </div>
      <div className="grid grid-cols-2 px-4 py-2 gap-y-4 text-gray-600 text-sm">
        <div>Status:</div>
        <div className="flex items-center gap-1">
          <ChevronDown className="size-4 shrink-0" />{" "}
          <span className="text-blue-500">In-Progress</span>
        </div>
        <div>Priority:</div>
        <div className="flex items-center gap-1">
          <ChevronDown className="size-4 shrink-0" />{" "}
          <span className="text-red-500">Critical</span>
        </div>
        <div>Assignee:</div>
        <div className="flex items-center gap-1">
          <ChevronDown className="size-4 shrink-0" />{" "}
          <span>Trangntt</span>
        </div>
        <div>Type:</div>
        <div className="flex items-center gap-1">
          <ChevronDown className="size-4 shrink-0" />{" "}
          <span>Bug</span>
        </div>
        <div>Stated date:</div>
        <div className="flex items-center gap-1">
          <ChevronDown className="size-4 shrink-0" />{" "}
          <span>2025-04-04</span>
        </div>
        <div>Target date:</div>
        <div className="flex items-center gap-1">
          <ChevronDown className="size-4 shrink-0" />{" "}
          <span>2025-04-04</span>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
