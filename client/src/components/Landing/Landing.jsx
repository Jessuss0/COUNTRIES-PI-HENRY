import { useNavigate } from "react-router-dom"

export default function Landing(props){
    const navigate = useNavigate();
    
    return(
        <div>
            <h1>Welcome to COUNTRIES</h1>
            <button onClick={()=> navigate("/home")}>Comenzar!</button>
        </div>
    )
};