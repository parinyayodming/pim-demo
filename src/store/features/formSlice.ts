import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
  formData: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setStep(state, action) {
      state.step = action.payload;
    },
    updateFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetForm(state) {
      state.step = 0;
      state.formData = {};
    },
  },
});

export const { setStep, updateFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
