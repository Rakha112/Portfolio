import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Lenis from "@studio-freight/lenis";

interface LenisType {
  lenis: Lenis | null;
}

const initialState: LenisType = {
  lenis: null,
};

export const lenisSlice = createSlice({
  name: "lenis",
  initialState,
  reducers: {
    setLenis: (state, action: PayloadAction<Lenis | null>) => {
      // state.lenis = action.payload;
      Object.assign(state, { lenis: action.payload });
    },
  },
});

export const { setLenis } = lenisSlice.actions;

export default lenisSlice.reducer;
