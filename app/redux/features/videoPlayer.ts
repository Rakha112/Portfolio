import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface NavBar {
  play: boolean;
  url: string;
}

const initialState: NavBar = {
  play: false,
  url: "",
};

export const videoSlice = createSlice({
  name: "video",
  initialState: initialState,
  reducers: {
    setVideoPlay: (state, action: PayloadAction<boolean>) => {
      state.play = action.payload;
    },
    setVideoUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },
});

export const { setVideoPlay, setVideoUrl } = videoSlice.actions;

export default videoSlice.reducer;
