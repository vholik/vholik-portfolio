import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: false,
  reducers: {
    showMenu: (state) => {
      return !state;
    },
  },
});

export const { showMenu } = menuSlice.actions;

export default menuSlice.reducer;
