import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ColumnFiltersState, SortingState } from "@tanstack/react-table";

interface PaginationState {
  pagination: {
    pageIndex: number;
    pageSize: number;
  };
  sorting: SortingState;
  columnFilters: ColumnFiltersState;
}

const initialState: PaginationState = {
  pagination: {
    pageIndex: 0,
    pageSize: 10,
  },
  sorting: [],
  columnFilters: [],
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPaginationState(state, action: PayloadAction<{ pageIndex: number; pageSize: number }>) {
      state.pagination = action.payload;
    },
    setSortingState(state, action: PayloadAction<SortingState>) {
      state.sorting = action.payload;
    },
    setFiltersState(state, action: PayloadAction<ColumnFiltersState>) {
      state.columnFilters = action.payload;
    },
    resetTableFilter(state) {
      state.pagination = initialState.pagination
      state.sorting = initialState.sorting
      state.columnFilters = initialState.columnFilters
    },
  },
});

export const { setPaginationState, setSortingState, setFiltersState, resetTableFilter } = paginationSlice.actions;
export default paginationSlice.reducer;