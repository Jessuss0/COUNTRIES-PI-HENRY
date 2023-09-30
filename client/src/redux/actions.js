import { SEARCH_COUNTRY, ADD_ALL_COUNTRIES, ADD_ID_COUNTRY } from "./action.types";
import axios from 'axios';

export const allCountries = ()=>{

    return async (dispatch)=>{
        try {
            const {data} = await axios("http://localhost:3001/countries")
            console.log("LLEGO EL DISPATCH", data);
            return dispatch({
                type: ADD_ALL_COUNTRIES,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}