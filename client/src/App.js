import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import NotFound404 from "./components/404/NotFound";
import Nav from "./components/SearchBar/SearchBar";
import { Routes, Route, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div >
      {location.pathname !== "/" && <Nav/>}
      <Routes>

        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/detail/:id" element={<Detail/>}/>
        <Route exact path="/form" element={<Form/>}/>

        <Route path="*" element={<NotFound404/>}/>

      </Routes>
    </div>
  );
}

export default App;
