import { ProductType } from "@/types/ProductType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductType[] = []
const productSlice = createSlice({
    name: "productReducer",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload)
        }
    }
})


export const { addProduct } = productSlice.actions
export default productSlice.reducer