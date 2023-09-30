import { useParams } from "react-router-dom";

export default function Detail(props){
    const { id } = useParams();

    return(
        <div>
            <h2>DETALLES DEL PAIS: {id}</h2>
        </div>
    )
}

// MOSTRAR TODA LA INFO DE UN PAIS: ID (Código de tres letras).
// Nombre.
// Imagen de la bandera.
// Continente.
// Capital.
// Subregión (si tiene).
// Área (si tiene).
// Población.

