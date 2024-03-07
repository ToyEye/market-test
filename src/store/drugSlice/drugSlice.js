import { createSlice } from "@reduxjs/toolkit";

const drugSlice = createSlice({
  name: "drugSlice",
  initialState: {
    drugList: [],
  },
});

export default drugSlice.reducer;
