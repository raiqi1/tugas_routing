import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Create } from "./components/create/Create";
import { Login } from "./pages/login/Login";
import { Home } from "./pages/home/Home";
import { DetailsPages } from "./pages/details/DetailsPages";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details/:id' element={<DetailsPages/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
