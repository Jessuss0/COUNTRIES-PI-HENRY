import React, { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { allCountries } from "../../redux/actions";
import { filtContinent, OrderAlphabetical, OrderPopulation, allActivities, filtActivity } from "../../redux/actions";
import Cards from "../Cards/Cards";
import Select from "../Select/select1/Select";
import "./Home.css";

export default function Home({currentPage, handleNextPage, handlePrevPage, currentElements, totalPages, handlePage}) {
  const countries = useSelector((state) => state.Countries);
  const activities = useSelector((state)=> state.Activities)
  const dispatch = useDispatch();

  const loadCountries = async () => {
    if (!countries.length) {
      await dispatch(allCountries());
    }
  };

  const loadActivities = async () => {
      await dispatch(allActivities());
  };

  useEffect(() => {
    loadCountries();
    loadActivities();
  }, []);

  const handleChange = (event)=>{
    const {name, value} = event.target
    if(name === "Continents"){
      dispatch(filtContinent(value))
      handlePage()
    }
    if(name === "Activities"){
      dispatch(filtActivity(value))
      handlePage()
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
      <div>
      <Select name={"Continents"} options={continentsOptions} handleChange={handleChange} state={null}/>
      <Select name={"Alphabetical"} options={orderAlp} handleChange={handleChange} state={null}/>
      <Select name={"Population"} options={orderPop} handleChange={handleChange} state={null}/>
      <select name="Activities" onChange={handleChange} className='mi-select'>
      {activities.map((activity) => (
        <option key={activity.id} value={activity.id}>
            {activity.name}
          </option>
        ))}
      </select>
        </div>
      <Cards countries={currentElements} />
      <div className="pagination">
      <button onClick={handlePrevPage} className="pagination-button">{prev}</button>
      <div className="pagination-number">
      <p>{text}</p>
      </div>
      <button onClick={handleNextPage} className="pagination-button">{next}</button>
      </div>
    </div>
  );
}