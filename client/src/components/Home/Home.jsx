import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { allCountries } from "../../redux/actions";
import { filtContinent, OrderAlphabetical, OrderPopulation } from "../../redux/actions";
import Cards from "../Cards/Cards";
import Select from "../Select/Select";
import "./Home.css";

export default function Home({currentPage, handleNextPage, handlePrevPage, currentElements, totalPages, handlePage}) {
  const countries = useSelector((state) => state.Countries);
  const dispatch = useDispatch();
  const [renderFilter, setrenderFilter] = useState({
    continents: "",
    alphabetical: "",
    population: "",
    activities: "",
  })

  const loadCountries = async () => {
    if (!countries.length) {
      await dispatch(allCountries());
    }
  };

  useEffect(() => {
    loadCountries();
  }, []);

  useEffect(()=>{
    console.log(renderFilter)
  },[renderFilter])

  const handleChange = (event)=>{
    const {name, value} = event.target
    if(name === "Continents"){
      dispatch(filtContinent(value))
      handlePage()
      setrenderFilter({
        ...renderFilter,
        continents: value
      })
    }
    if(name === "Alphabetical"){
      dispatch(OrderAlphabetical(value))
    }
    if(name === "Population"){
      dispatch(OrderPopulation(value))
    }
  }

  const next = "NEXT >"
  const prev = "< PREV"
  const text = currentPage + " of " + totalPages;
  const continentsOptions = ["Europe", "South America", "Asia", "Africa", "North America","Antarctica", "Oceania"];
  const orderAlp = ["A-Z", "Z-A"];
  const orderPop = ["Max Population", "Min Population"];


  return (
    <div className="home-container">
      <Select name={"Continents"} options={continentsOptions} handleChange={handleChange} state={null}/>
      <Select name={"Alphabetical"} options={orderAlp} handleChange={handleChange} state={null}/>
      <Select name={"Population"} options={orderPop} handleChange={handleChange} state={null}/>
      <Cards countries={currentElements} />
      <div  className="pagination">
      <button onClick={handlePrevPage} className="pagination-button">{prev}</button>
      <div className="pagination-number">
      <p>{text}</p>
      </div>
      <button onClick={handleNextPage} className="pagination-button">{next}</button>
      </div>
    </div>
  );
}


// DEBE RENDERIZAR LAS CARD, HACIENDO UN GET /COUNTRIES
//FILTRADO => CONTINENTE && TIPO ACTIVIDAD TURISTICA
//ORDENAR => ASC && DESC ALFABETICAMENTE Y CANTIDAD POBLACION
//PAGINADO MOSTRANDO 10 PAISES POR PAGINA


//TIPOS DE ACT TURISTICAS: ["Cultural", "Special Events", "Adventure and Sports", "Entertainment", "Gastronomy", "Wellness and Relaxation"]