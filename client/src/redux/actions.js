import { SEARCH_COUNTRY, ADD_ALL_COUNTRIES, ADD_ID_COUNTRY, RESET } from "./action.types";
import axios from 'axios';

export const allCountries = ()=>{

    return async (dispatch)=>{
        try {
            const {data} = await axios("http://localhost:3001/countries")
            return dispatch({
                type: ADD_ALL_COUNTRIES,
                payload: data
            })
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const idCountry = (id)=>{
    return async (dispatch)=>{
        const endPoint = "http://localhost:3001/countries/" + id;
        try {
            const {data} = await axios(endPoint);
            return dispatch({
                type: ADD_ID_COUNTRY,
                payload: data
            })
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const nameCountry = (name)=>{
    return async(dispatch)=>{
        const endPoint = `http://localhost:3001/countries/name?name=${name}`;
        console.log(endPoint);
        try {
            const {data} = await axios(endPoint);
            return dispatch({
                type: SEARCH_COUNTRY,
                payload: data
            })
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const reset = ()=>{
    return async(dispatch)=>{
        try {
            return dispatch({
                type:RESET,
                payload: null
            })
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}