import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { allCountries } from "../../redux/actions";
import Cards from "../Cards/Cards";
import "./Home.css";

export default function Home(props) {
  const countries = useSelector((state) => state.Countries);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const elementosPorPagina = 10;

  const indexOfLastElement = currentPage * elementosPorPagina;
  const indexOfFirstElement = indexOfLastElement - elementosPorPagina;
  const currentElements = countries?.slice(indexOfFirstElement, indexOfLastElement);

  const totalPages = Math.ceil((countries?.length || 0) / elementosPorPagina);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const loadCountries = async () => {
    if (!countries.length) {
      await dispatch(allCountries());
    }
  };

  useEffect(() => {
    loadCountries();
  }, []);

  const next = "NEXT >"
  const prev = "< PREV"
  const text = currentPage + " of 25";

  return (
    <div className="home-container">
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