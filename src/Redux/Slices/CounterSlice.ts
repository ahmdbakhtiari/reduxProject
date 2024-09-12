import { createSlice } from "@reduxjs/toolkit";


const initialState = ({
    count : 0
})

const counterReducer = createSlice({
    name : "CounterReducer",
    initialState,
    reducers : {
        plusCount : (state , action) => {
            state.count += action.payload
        },
        minusCount : (state , action) => {
            state.count -= action.payload
        }
    }
})


export default counterReducer.reducer
export const {plusCount , minusCount} = counterReducer.actions