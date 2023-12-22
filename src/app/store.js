import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";

//here we create our store

//
const store = configureStore({
  reducer: {
    // reducer is coming from cartSlice
    cart: cartReducer,
  },
});

export default store;

//first we pass store to the whole application
//aur iske andar jitte bhi reducer hain unka
//access pure application ko hota aur jitne bhi
//state ke saare action hme store ki help se mil
//jaate hain
