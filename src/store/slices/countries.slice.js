import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const countriesSlice = createSlice({
    name:'countries',
    initialState:null,
    reducers: {
        setCountries: (state,action)=> action.payload /* lo que retornemos en el action es el valor que va a tomar el initialState */
    }
})

export default countriesSlice.reducer;
/*el reducer es el representante, es el más importante */

export  const {setCountries} = countriesSlice.actions
                                 /*aqui están todas las action, y a este objeto lo desestructuramos para exportarlo */



export const getCountriesThunk = () => (dispatch) => {
    const url = 'https://restcountries.com/v3.1/lang/spa'
    axios.get(url)
    .then(res => dispatch(setCountries(res.data))) /*como setCountries es una action, necesitamos despacharla */
    .catch(err => console.log(err))

}