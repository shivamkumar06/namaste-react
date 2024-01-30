import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {

      // Vanilla(Older) Redux => DON'T MUTATE STATE, returning was mandatory
      // donst newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Above logic is handled by IMMER library
      // Redux Toolkit => WE HAVE TO MUTATE STATE
      // mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },
    clearCart: (state) => {
      // we are not mutating state here it is just adding reference to new array, so it will not work
      // this will work locally but not in redux, original state is not getting modified act as local variable
      // state = [];

      // RTK - either mutate the exsisting state or return new state
      state.items.length = 0;
      // this will also work
      // return {items : []}; // this new [] will be replaced inside originalState
    },
  },
});


export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
