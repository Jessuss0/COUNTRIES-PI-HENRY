import { SEARCH_COUNTRY, ADD_ALL_COUNTRIES, ADD_ID_COUNTRY, RESET } from "./action.types";

const initialState = {
    Countries: [],
    allCountries: [],
    idCountry: []
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_ALL_COUNTRIES:
            return{...state, Countries: action.payload, allCountries: action.payload} 

        case ADD_ID_COUNTRY:
            return{...state, idCountry: action.payload}

        case SEARCH_COUNTRY:
            return {...state, Countries: action.payload}
        
        case RESET:
            return{...state, Countries: state.allCountries}

        default:
            return{...state}
    }
};

export default rootReducer;