import { useNavigate } from "react-router-dom"
import "./Landing.css"

export default function Landing(props){
    const navigate = useNavigate();
    
    return (
        <div className="landing">
          <h1 className="h1">Welcome to COUNTRIES!</h1>
          <button onClick={()=>{navigate("/home")}} className="startButton">GO!</button>
        </div>
      );
    }