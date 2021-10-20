// ducks pattern
import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface counterState {
    value:number;
}

// initial value
const initialState = {
    value :0
}

// 
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
          // incerement
    inceremented(state) {
        state.value + 1;
    },

  },
});


export const { inceremented } = counterSlice.actions


export default counterSlice.reducer