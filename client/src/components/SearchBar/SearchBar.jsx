import { useState } from "react"

export default function Nav(props){
    const [name, setName] = useState("");

    const handleChange = (event)=>{
        setName(event.target.value)
     };
    return(
        <div>
            <input type='search' onChange={handleChange} value={name} placeholder="Busca un pais..."/>
         <button onClick={console.log(name)}>Buscar</button>
        </div>
    )
}