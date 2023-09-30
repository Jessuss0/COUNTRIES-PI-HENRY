import { SEARCH_COUNTRY, ADD_ALL_COUNTRIES, ADD_ID_COUNTRY } from "./action.types";

const initialState = {
    allCountries: [],
    CountryById: [],
    SearchCountryByName: [],
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_ALL_COUNTRIES:
            console.log("Estoy en el case addAllCountries");
            return{...state, allCountries: action.payload} 

        default:
            return{...state}
    }
};

export default rootReducer;