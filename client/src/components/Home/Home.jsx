import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { allCountries } from "../../redux/actions";
import axios from "axios";

export default function Home(props){
    // const countries = useSelector((state)=> state.allCountries);
    const dispatch = useDispatch();

    // const loadCountries = async()=>{
    //     if(!countries.length){
    //         await dispatch(allCountries);
    //     }
    // };
    const [countries, setCountries] = useState([]);

    const loadC = async()=>{
        const {data} = await axios("http://localhost:3001/countries")
       setCountries(data)
       dispatch(allCountries);
    }

    useEffect(()=>{
        loadC();
        dispatch(allCountries);
    },[]);

    return(
        <div>
            {countries?.map(country=>{
                return <Card
                key={country.id}
                id={country.id}
                image= {country.image}
                name= {country.name}
                continent= {country.continent}/>
            })}
        </div>
    )
}


// DEBE RENDERIZAR LAS CARD, HACIENDO UN GET /COUNTRIES
//FILTRADO => CONTINENTE && TIPO ACTIVIDAD TURISTICA
//ORDENAR => ASC && DESC ALFABETICAMENTE Y CANTIDAD POBLACION
//PAGINADO MOSTRANDO 10 PAISES POR PAGINA