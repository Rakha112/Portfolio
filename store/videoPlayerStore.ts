import { create } from "zustand";

export interface VideoPlayerStore {
  play: boolean;
  url: string;
  setVideoPlay: (value: boolean) => void;
  setVideoUrl: (value: string) => void;
}

const initialState: VideoPlayerStore = {
  play: false,
  url: "",
  setVideoPlay: () => {},
  setVideoUrl: () => {},
};

const useVideoPlayerStore = create<VideoPlayerStore>((set) => ({
  ...initialState,
  setVideoPlay: (value) => set({ play: value }),
  setVideoUrl: (value) => set({ url: value }),
}));

export default useVideoPlayerStore;
