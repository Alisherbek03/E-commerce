// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   bascket: [],
// };

// const counterSlice = createSlice({
//   name: "main",
//   initialState,
//   reducers: {
//     increment: (state, action) => {
//       const item = state.bascket.find((item) => item.id === action.payload);
//       if (item) {
//         item.count += 1;
//       }
//     },
//     decrement: (state, action) => {
//       const item = state.bascket.find((item) => item.id === action.payload);
//       if (item && item.count > 1) {
//         item.count -= 1;
//       }
//     },
//     removeItem: (state, action) => {
//       state.bascket = state.bascket.filter(
//         (item) => item.id !== action.payload
//       );
//     },
//   },
// });

// export const { increment, decrement, removeItem } = counterSlice.actions;
// export default counterSlice.reducer;
