import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./AppSlice"
import searchSlice from "./SearchSlice"
import chatSlice from "./ChatSlice"
const appStore = configureStore({
    reducer :{
    app : appSlice,
    search :searchSlice,
    chat : chatSlice
    }
})
export default appStore