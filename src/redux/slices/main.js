import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { toast } from "react-toastify";

const savedBascket = localStorage.getItem("bascket");
const initialState = {
  bascket: savedBascket ? JSON.parse(savedBascket) : [],
};

const mainSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToBascket: (state, action) => {
      state.bascket = [...state.bascket, { ...action.payload, count: 1 }];
      localStorage.setItem('bascket' , JSON.stringify(state.bascket))
    },
    incrementToBascket: (state, action) => {
      const id = action.payload;
      state.bascket = state.bascket.map((item) => {
        if (item.id === id) {
          const newItem = {
            ...item,
            count: item.count + 1,
          };
          return newItem;
        } else {
          return item;
        }
      });
      localStorage.setItem("bascket", JSON.stringify(state.bascket));
    },

    decrementToBascket: (state, action) => {
      const id = action.payload;
      state.bascket = state.bascket
        .map((item) => {
          if (item.id === id) {
            if (item.count === 1) {
              return null;
            }
            return {
              ...item,
              count: item.count - 1,
            };
          }
          return item;
        })
        .filter((item) => item !== null);
      localStorage.setItem("bascket", JSON.stringify(state.bascket));
    },

    removeCart: (state, action) => {
      const id = action.payload;
      state.bascket = state.bascket.filter((bascket) => bascket.id !== id);
      toast.info("Korzinkadan o'chirildi");
      localStorage.setItem("bascket", JSON.stringify(state.bascket));
    },
  },
});

export const {
  addToBascket,
  incrementToBascket,
  decrementToBascket,
  removeCart,
} = mainSlice.actions;
export default mainSlice.reducer;
