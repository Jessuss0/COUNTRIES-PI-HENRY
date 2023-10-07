import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./SearchBar.css"
import { useDispatch} from 'react-redux';
import { nameCountry, reset } from "../../redux/actions";

export default function Nav({handlePage}){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [name, setName] = useState("");

    const handleChange = (event)=>{
        setName(event.target.value)
     };

    const handleSearch = (event)=>{
      dispatch(nameCountry(name))
      setName("");
      handlePage();
    }

    const base = ()=>{
      navigate("/home")
      dispatch(reset())
    }

     return (
        <div className="navbar">
          <div className="left">
            <button onClick={base}>CounTri3s</button>
          </div>
          <button onClick={()=> navigate("/activities")}>ACTIVITIES</button>
          <div className="right">
            <input type="search" onChange={handleChange} value={name} placeholder="Busca un país..." />
            <button onClick={handleSearch}>Buscar</button>
          </div>
        </div>
      );
    }