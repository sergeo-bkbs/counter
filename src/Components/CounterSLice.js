import { createSlice } from "@reduxjs/toolkit";
 export const CounterSlice=createSlice({
name:"count",
initialState:{
    count:0
},
reducer:{
    increment:(state)=>{
       return  state.count+=1
    },
    decrement:(state)=>{
        return state.count-=1
    }
},
})
export const{increment,decrement} =CounterSlice.actions
export default CounterSlice.reducer