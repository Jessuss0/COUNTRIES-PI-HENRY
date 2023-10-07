import { Routes, Route, useLocation} from 'react-router-dom';
import { useState } from "react";
import { useSelector } from 'react-redux';
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import NotFound404 from "./components/404/NotFound";
import Nav from "./components/SearchBar/SearchBar";

function App() {
  const location = useLocation();
  const countries = useSelector((state) => state.Countries);

  const [currentPage, setCurrentPage] = useState(1);
  
  const elementosPorPagina = 10;
  const indexOfLastElement = currentPage * elementosPorPagina;
  const indexOfFirstElement = indexOfLastElement - elementosPorPagina;
  const currentElements = countries?.slice(indexOfFirstElement, indexOfLastElement);
  const totalPages = Math.ceil((countries?.length || 0) / elementosPorPagina);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePage = ()=>{
    setCurrentPage(1);
  }

  return (
    <div >
      {location.pathname !== "/" && location.pathname !== "/activities" && <Nav handlePage={handlePage}/>}
      <Routes>

        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/home" element={<Home handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} currentPage={currentPage} currentElements={currentElements}/>}/>
        <Route exact path="/detail/:id" element={<Detail/>}/>
        <Route exact path="/activities" element={<Form/>}/>

        <Route path="*" element={<NotFound404/>}/>

      </Routes>
    </div>
  );
}

export default App;
