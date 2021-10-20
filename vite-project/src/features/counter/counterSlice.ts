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
        state.value ++;
    },
    amountAdded(state, action:PayloadAction<number>){
        state.value += action.payload
    }

  },
});


export const { inceremented } = counterSlice.actions


export default counterSlice.reducer