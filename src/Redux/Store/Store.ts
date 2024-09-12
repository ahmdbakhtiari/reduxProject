
import productSlice from "../Slices/ProductCountSlices";
import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Slices/CounterSlice";


const store = configureStore({
    reducer: {
        counterReducer: CounterReducer,
        addProductReducer: productSlice
    }
})

export default store