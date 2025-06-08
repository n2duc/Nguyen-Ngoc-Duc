import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux-hooks";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type SortingState,
} from "@tanstack/react-table";
import {
  resetTableFilter,
  setFiltersState,
  setPaginationState,
  setSortingState,
} from "@/stores/slices/pagination-slice";
import { customersData } from "@/lib/data";
import { columns } from "@/components/a3/columns";

export default function usePaginatedTable() {
  const dispatch = useAppDispatch();
  const tableState = useAppSelector((state) => state.pagination);
  const [sorting, setSorting] = useState<SortingState>(tableState.sorting);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    tableState.columnFilters
  );
  const [pagination, setPagination] = useState({
    pageIndex: tableState.pagination.pageIndex || 0,
    pageSize: tableState.pagination.pageSize || 10,
  });

  useEffect(() => {
    dispatch(setPaginationState(pagination));
  }, [pagination, dispatch]);

  useEffect(() => {
    dispatch(setSortingState(sorting));
  }, [sorting, dispatch]);

  useEffect(() => {
    dispatch(setFiltersState(columnFilters));
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

  return {
    table,
    handleResetFilters
  }
}
