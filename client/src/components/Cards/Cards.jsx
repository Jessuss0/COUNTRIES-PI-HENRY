import Card from "../Card/Card"
import "./Cards.css";

export default function Cards({countries}){
    return(
        <div className="cards-container">
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