import { configureStore } from "@reduxjs/toolkit";
import { pokemonsSlice } from "./redux";

const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;