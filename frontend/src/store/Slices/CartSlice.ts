import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "../../interface-type";

const initialState: CounterState[] = [];

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CounterState>) => {
      console.log("Current state:", state);
      console.log("Action payload:", action.payload);
      const existItem = state.find(item => item._id === action.payload._id);
      if (!existItem) {
        state.push(action.payload); 
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter(item => item._id !== action.payload); 
    },
    clearCart: () => {
      return []; 
    },
  },
});


export const { addToCart, removeFromCart, clearCart } = slice.actions;
export default slice.reducer;
