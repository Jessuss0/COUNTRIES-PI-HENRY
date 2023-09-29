import Cards from "../Cards/Cards"

export default function Home(props){
    return(
        <div>
            <Cards/>
        </div>
    )
}


// DEBE RENDERIZAR LAS CARD, HACIENDO UN GET /COUNTRIES
//FILTRADO => CONTINENTE && TIPO ACTIVIDAD TURISTICA
//ORDENAR => ASC && DESC ALFABETICAMENTE Y CANTIDAD POBLACION
//PAGINADO MOSTRANDO 10 PAISES POR PAGINA