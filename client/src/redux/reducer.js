import { SEARCH_COUNTRY, ADD_ALL_COUNTRIES, ADD_ID_COUNTRY, RESET, ADD_ACTIVITY, FILTER_CONTINENTS, ORDER_ALPHABETICAL, ORDER_POPULATION } from "./action.types";

const initialState = {
    Countries: [],
    allCountries: [],
    idCountry: [],
    activityPost: [],
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
        
        case ADD_ACTIVITY:
            return{...state, activityPost: action.payload}
        
        case FILTER_CONTINENTS:
            let copia = [...state.allCountries]
            let filtrado = copia.filter((country) => country.continent === action.payload);
            return {...state, Countries: filtrado}

        case ORDER_ALPHABETICAL:
            let copia2 = [...state.Countries]
            let resultado = copia2.slice().sort((a, b) => {
                const nombreA = a.name.toUpperCase();
                const nombreB = b.name.toUpperCase();
                return action.payload === "A-Z" ? nombreA.localeCompare(nombreB) : nombreB.localeCompare(nombreA);
              });
            return {...state, Countries: resultado}
        
        case ORDER_POPULATION:
            let copia3 = [...state.Countries]
            let ordenados =
            action.payload === "Min Population"
          ? copia3.sort((a, b) => a.population - b.population)
          : copia3.sort((a, b) => b.population - a.population);
          return {...state, Countries: ordenados}

        default:
            return{...state}
    }
};

export default rootReducer;