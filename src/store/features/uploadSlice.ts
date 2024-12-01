import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UploadState {
  files: File[];
  error: string | null;
}

const initialState: UploadState = {
  files: [],
  error: null,
};

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    addFile(state, action: PayloadAction<File>) {
      state.files.push(action.payload);
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { addFile, setError } = uploadSlice.actions;
export default uploadSlice.reducer;
