import { Link } from "react-router-dom";
import './Card.css';

export default function Card({ id, image, name, continent }) {
    return (
      <div className="card-container">
        <Link to={`/detail/${id}`} className="card-link">
          <div className="card">
            <h2 className="card-title">{name}</h2>

            <div className="card-image">
              <img src={image} alt={name} />
            </div>
            
            <h2 className="card-continent">{continent}</h2>
          </div>
        </Link>
      </div>
    );
  }