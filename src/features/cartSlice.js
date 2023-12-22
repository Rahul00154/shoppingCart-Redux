import { createSlice } from "@reduxjs/toolkit";

//create our cart slice
//create slice takes a object
//inside slice we first initialize name of that slice and pass initial state(variable) of that slice,
//And then create our reducer object where all fuctionality logic is written

const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    //reducer function takes two param one is state and other is action that we receive when calling that reducer function
    //aur initial state me jo bhi value aayegi whi state hoti

    //reducers ke Andar jitne bhi function hote hain unhe hum action kahte hain
    add(state, action) {
      //jo bhi data hum pass krte hain iss function ko call krte time wo payload ke andar aata hai.
      state.push(action.payload);
    },
    remove(state, action) {
      //here we write logic for removing element from the array jiska id match karega
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

//Now we export the action that is present in our slice

//action ko hme call krna hota hai
export const { add, remove } = cartSlice.actions;
//now we export the reducers to use it in our store
//and reducer ko hme store ke andar rkhna parta hai
export default cartSlice.reducer;
