import { configureStore } from "@reduxjs/toolkit";
import reducer from '../slice/bookSlice'

const store = configureStore({
    reducer : reducer
})

export default store;