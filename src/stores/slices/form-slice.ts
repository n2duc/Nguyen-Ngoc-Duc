import { createSlice } from "@reduxjs/toolkit";

interface AddressData {
  province: string;
  district: string;
  street: string;
}

interface FormState {
  schema: string;
  formData: Record<string, string | number | boolean>;
  addressData: AddressData;
};

const initialState: FormState = {
  schema: "",
  formData: {},
  addressData: {
    province: '',
    district: '',
    street: ''
  }
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
    setAddressData(state, action) {
      state.addressData = action.payload;
    },
    resetForm(state) {
      state.formData = {};
      state.addressData = {
        province: '',
        district: '',
        street: ''
      };
    }
  }
});

export const { setSchema, setFormData, setAddressData, resetForm } = formSlice.actions;
export default formSlice.reducer;