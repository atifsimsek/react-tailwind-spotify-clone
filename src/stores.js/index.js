import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "stores.js/player";

export default configureStore({
  reducer: {
    player: playerReducer,
  },
});
