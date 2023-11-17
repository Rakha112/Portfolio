import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface NavBar {
  isNavBarOpen: boolean;
}

const initialState: NavBar = {
  isNavBarOpen: false,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    openNavBar: (state) => {
      state.isNavBarOpen = true;
    },
    closeNavBar: (state) => {
      state.isNavBarOpen = false;
    },
  },
});

export const { openNavBar, closeNavBar } = navbarSlice.actions;

export default navbarSlice.reducer;
