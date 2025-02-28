import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name : 'counter',
    initialState : {
        value : 1,
        initial:1
    },
    reducers : {
        increment:(state)=> {state.value+=1},
        decrement:(state)=> {state.value-=1},
    }
})

export const {increment , decrement} = counter.actions

export default counter.reducer;