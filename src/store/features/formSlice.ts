/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

interface FormState {
  step: number;
  formData: Record<string, any>;
}

const initialState: FormState = {
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
    updateFormData(state, action: PayloadAction<Record<string, any>>) {
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
