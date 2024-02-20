import { create } from "zustand";
import Genre from "./entities/Genre";
import Platform from "./entities/Platform";

interface GameQueries {
  genre?: Genre;
  platform?: Platform;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQueries;
  showSearchBar: boolean;
  setGenre: (genre: Genre) => void;
  setPlatform: (platform: Platform) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
  clearGameQuery: () => void;
  scrollToTop: () => void;
  setShowSearchBar: (booleanValue: boolean) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => {
  return {
    gameQuery: {},
    showSearchBar: false,
    setGenre: (genre) =>
      set((store) => ({ gameQuery: { ...store.gameQuery, genre } })),
    setPlatform: (platform) =>
      set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
    setSortOrder: (sortOrder) =>
      set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    clearGameQuery: () => set({ gameQuery: {} }),
    scrollToTop: () => window.scrollTo(0, 0),
    setShowSearchBar: (booleanValue: boolean) =>
      set(() => ({ showSearchBar: booleanValue })),
  };
});

export default useGameQueryStore;
