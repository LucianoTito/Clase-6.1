import { configureStore } from "@reduxjs/toolkit";
import countries from './slices/countries.slice'

const store = configureStore({
    reducer:{
            countries
    }
})


export default store