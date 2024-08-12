import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../slices/crateSlice";
import mainSlice from "../slices/main";

const store = configureStore({
  reducer: {
    // count_data: counterReducer,
    main: mainSlice,
  },
});

export { store };
