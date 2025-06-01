import { customersData } from "@/lib/data";
import { getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, type ColumnFiltersState, type SortingState } from "@tanstack/react-table";
import { columns } from "@/components/a3/columns";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import DataTable from "@/components/a3/data-table";
import { useEffect, useState } from "react";
import DataTablePagination from "@/components/a3/data-table-pagination";
import { useAppSelector, useAppDispatch } from "@/hooks/redux-hooks";
import { resetTableFilter, setFiltersState, setPaginationState, setSortingState } from "@/stores/slices/pagination-slice";
import DataTableToolbar from "@/components/a3/data-table-toolbar";

const PaginatedTable = () => {
  const dispatch = useAppDispatch();
  const tableState = useAppSelector((state) => state.pagination);
  const [sorting, setSorting] = useState<SortingState>(tableState.sorting);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(tableState.columnFilters)
  const [pagination, setPagination] = useState({
    pageIndex: tableState.pagination.pageIndex || 0,
    pageSize: tableState.pagination.pageSize || 10,
  });

  useEffect(() => {
    dispatch(setPaginationState(pagination))
  }, [pagination, dispatch]);

  useEffect(() => {
    dispatch(setSortingState(sorting))
  }, [sorting, dispatch]);

  useEffect(() => {
    dispatch(setFiltersState(columnFilters))
  }, [columnFilters, dispatch]);

  const table = useReactTable({
    data: customersData,
    columns,
    state: {
      sorting,
      pagination,
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleResetFilters = () => {
    setSorting([]);
    setColumnFilters([]);
    setPagination({
      pageIndex: 0,
      pageSize: 10,
    });
    dispatch(resetTableFilter());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="flex-1 container w-full mx-auto my-5 shadow">
        <CardHeader>
          <CardTitle>Paginated Table</CardTitle>
          <CardDescription>A3 Assignment - Paginated table with sorting and filtering</CardDescription>
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
  )
}

export default PaginatedTable