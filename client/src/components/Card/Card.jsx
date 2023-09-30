import { Link } from "react-router-dom";

export default function Card({id, image, name, continent}){
    return(
        <div>
            <Link to={`/detail/${id}`}>
            <div>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <h2>{continent}</h2>
            </div>
            </Link>
        </div>
    )
}