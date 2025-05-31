import { createSlice } from "@reduxjs/toolkit";

interface PaginationState {
  currentPage: number;
  pageSize: number;
  sortField: string | null;
  sortOrder: 'asc' | 'desc';
  filters: Record<string, any>;
}

const initialState: PaginationState = {
  currentPage: 1,
  pageSize: 10,
  sortField: null,
  sortOrder: 'asc',
  filters: {},
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;