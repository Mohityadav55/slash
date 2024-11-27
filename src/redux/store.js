import { CartSlice } from "./slices/cartSlice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
}); 