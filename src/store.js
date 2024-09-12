import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./features/charactersSlice/charactersSlice";
import currentPageSlice from "./features/currentPageSlice/currentPageSlice";
import filterCharactersSlice from "./features/filterCharactersSlice/filterCharactersSlice";
import searchCharacterSlice from "./features/searchCharacterSlice/searchCharacterSlice";
import isShowSingleCharacterSlice from "./features/isShowSingleCharacterSlice/isShowSingleCharacterSlice";
import selectedIdSlice from "./features/selectedIdSlice/selectedIdSlice";
import selectedCharacterInfoSlice from "./features/selectedCharacterInfoSlice/selectedCharacterInfoSlice";
import characterEpisodesInfoSlice from "./features/characterEpisodesInfoSlice/characterEpisodesInfoSlice";

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
    selectedCharacterInfo: selectedCharacterInfoSlice,
    characterEpisodesInfo: characterEpisodesInfoSlice,
    currentPage: currentPageSlice,
    filterCharacters: filterCharactersSlice,
    searchCharacter: searchCharacterSlice,
    isShowSingleCharacter: isShowSingleCharacterSlice,
    selectedId: selectedIdSlice,
  },
});
