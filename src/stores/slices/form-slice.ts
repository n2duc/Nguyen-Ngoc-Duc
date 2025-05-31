import { createSlice } from "@reduxjs/toolkit";

interface FormState {
  schema: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: Record<string, any>;
};

const initialState: FormState = {
  schema: "",
  formData: {},
}

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setSchema(state, action) {
      state.schema = action.payload;
    },
    setFormData(state, action) {
      state.formData = action.payload;
    },
    resetForm(state) {
      state.formData = {};
    },
    resetAll(state) {
      state.schema = "";
      state.formData = {};
    }
  }
});

export const { setSchema, setFormData, resetForm, resetAll } = formSlice.actions;
export default formSlice.reducer;