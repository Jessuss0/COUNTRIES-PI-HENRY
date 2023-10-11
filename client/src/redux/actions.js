import { SEARCH_COUNTRY, ADD_ALL_COUNTRIES, ADD_ID_COUNTRY, RESET, ADD_ACTIVITY, FILTER_CONTINENTS, FILTER_ACTIVITY, ORDER_ALPHABETICAL, ORDER_POPULATION, GET_ALL_ACTIVITIES } from "./action.types";
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

export const allActivities = ()=>{

    return async (dispatch)=>{
        try {
            const {data} = await axios("http://localhost:3001/activities")
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: data
            })
        } catch (error) {
            console.log(error);
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

export const addActivity = (activity)=>{
    const endPoint = "http://localhost:3001/activities"
    return async(dispatch)=>{
        try {
            const response = await axios.post(endPoint, activity)
            return dispatch({
                type:ADD_ACTIVITY,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data);
        }
    }
}

export const filtContinent = (continent)=>{
    return async (dispatch)=>{
        try {
            return dispatch({
                type: FILTER_CONTINENTS,
                payload: continent,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const filtActivity = (id)=>{
    const endPoint = "http://localhost:3001/activities/" + id;
    return async (dispatch)=>{
        try {
            const {data} = await axios(endPoint);
            return dispatch({
                type: FILTER_ACTIVITY,
                payload: data.Countries
            })
        } catch (error) {
            console.log(error.message);
        }
    }

}

export const OrderAlphabetical = (order)=>{
    return async (dispatch)=>{
        try {
            return dispatch({
                type: ORDER_ALPHABETICAL,
                payload: order
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const OrderPopulation = (order)=>{
    return async (dispatch)=>{
        try {
            return dispatch({
                type: ORDER_POPULATION,
                payload: order
            })
        } catch (error) {
            console.log(error);
        }
    }
}

