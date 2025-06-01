import { cn } from "@/lib/utils";
import type { Column } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface ColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export default function ColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: ColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return (
      <div className={cn(className)}>
        <span className="inline-block px-1 py-2">{title}</span>
        <Input
          type="text" 
          placeholder={`Search...`}
          value={(column.getFilterValue() as string) ?? ""}
          onChange={(e) => column.setFilterValue(e.target.value)}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start">
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        {title}
        <ArrowUpDown />
      </Button>
      <Input
        type="text"
        placeholder="Search..."
        value={(column.getFilterValue() as string) ?? ""}
        onChange={(e) => column.setFilterValue(e.target.value)}
      />
    </div>
  );
}
