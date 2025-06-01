import { useAppSelector } from "@/hooks/redux-hooks";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface DataTableToolbarProps {
  onResetFilters: () => void;
}

export default function DataTableToolbar({
  onResetFilters,
}: DataTableToolbarProps) {
  const paginationState = useAppSelector((state) => state.pagination);

  const activeFilters = paginationState.columnFilters.map((filter) => ({
    id: filter.id,
    value: filter.value as string,
  }));

  return (
    <div className="flex items-center gap-5">
      <Button className="mb-4" onClick={onResetFilters}>
        Reset Filters & Pagination
      </Button>
      {activeFilters.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="text-sm font-medium py-1">Active filters:</span>
          {activeFilters.map((filter) => (
            <Badge
              key={filter.id}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {filter.id}: {filter.value}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
