import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { idCountry } from "../../redux/actions";

export default function Detail(props){
    const { id } = useParams();
    const Country = useSelector((state)=> state.idCountry);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(idCountry(id))
    },[])

    return(
        <div>
             {Country && <div>
                <h2>{Country.name}</h2>
                <img src={Country.image} alt={Country.name} />
                <h2>{Country.continent}</h2>
                <h2>{Country.capital}</h2>
                {Country.subregion && <h2>{Country.subregion}</h2>}
                {Country.area && <h2>Area: {Country.area}</h2>}
                <h2>Population: {Country.population}</h2>
            </div>}
        </div>
    )
}

// MOSTRAR TODA LA INFO DE UN PAIS: ID (Código de tres letras).
// Nombre.
// Imagen de la bandera.
// Continente.
// Capital.
// Subregión (si tiene).
// Área (si tiene).
// Población.

