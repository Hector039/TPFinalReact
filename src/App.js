import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import MiCuenta from "./components/MiCuenta/assets/MiCuenta";
import Carrito from "./components/Carrito/Carrito";
import Contacto from "./components/Contacto/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { DatosProvider } from "./components/Context/DatosContext";

export default function App(){

    return (
        <BrowserRouter>
        <NavBar/>
        <Routes>

            <DatosProvider>
                <Route exact path={"/"} element={<ItemListContainer/>} />     
                <Route exact path={"/:productoId"} element={<ItemDetailContainer/>}/>
                <Route exact path={"/carrito"} element={<Carrito/>}/> 
            </DatosProvider>

            <Route exact path={"/cuenta"} element={<MiCuenta/>}/>
            <Route exact path={"/contacto"} element={<Contacto/>}/>
        </Routes>   
        <Footer/>     
        </BrowserRouter>
    )
}

