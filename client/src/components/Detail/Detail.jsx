import Activities from "../Activities/Activities";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { idCountry } from "../../redux/actions";
import "./Detail.css"

export default function Detail(props){
    const { id } = useParams();
    const Country = useSelector((state)=> state.idCountry);
    const dispatch = useDispatch();

    const loadIdCountry = ()=>{
        if(id === Country.id) return;
        else dispatch(idCountry(id))
    }

    useEffect(()=>{
        loadIdCountry()
    },[])

    return(
        <div className="background">
            <div className="detail-container ">
            {Country && (
                <div className="detail-content">
          <div className="left-section">
            <h2 className="country-name">{Country.name}</h2>
            <h2>{Country.continent}</h2>
            <h2>{Country.capital}</h2>
            {Country.subregion && <h2>{Country.subregion}</h2>}
            {Country.area && <h2>Area: {Country.area}</h2>}
            <h2>Population: {Country.population}</h2>
          </div>
          <div className="right-section">
            <img src={Country.image} alt={Country.name} />
          </div>
        </div>
      )}
      </div>
            <br />
            {Country?.Activities?.length > 0 && <div>
                <h2 className="h2">Actividades Relacionadas:</h2>
            <Activities Activities={Country.Activities} />
            </div>
            }
        </div>
    )
}

