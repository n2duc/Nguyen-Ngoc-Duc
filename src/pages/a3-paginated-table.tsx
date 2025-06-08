import { columns } from "@/components/a3/columns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DataTable from "@/components/a3/data-table";
import DataTablePagination from "@/components/a3/data-table-pagination";
import DataTableToolbar from "@/components/a3/data-table-toolbar";
import usePaginatedTable from "@/hooks/use-paginated-table";

const PaginatedTable = () => {
  const { table, handleResetFilters } = usePaginatedTable();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="flex-1 container w-full mx-auto my-5 shadow">
        <CardHeader>
          <CardTitle>Paginated Table</CardTitle>
          <CardDescription>
            A3 Assignment - Paginated table with sorting and filtering
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <DataTableToolbar onResetFilters={handleResetFilters} />
          <DataTable columns={columns} table={table} />
        </CardContent>
        <CardFooter>
          <DataTablePagination table={table} className="w-full" />
        </CardFooter>
      </Card>
    </div>
  );
};

export default PaginatedTable;
