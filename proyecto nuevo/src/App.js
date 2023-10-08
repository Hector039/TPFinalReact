import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import getProductos from "./components/Api/Api";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import MiCuenta from "./components/MiCuenta/assets/MiCuenta";
import Carrito from "./components/Carrito/Carrito";
import Contacto from "./components/Contacto/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { DataContext } from "./components/context/dataContext";


export default function App(){

    const [carrito, setCarrito] = useState([]);

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        async function axiosData() {
            let data = await getProductos();
            
            setProductos(data);
        }
        axiosData();

    }, [])

    return (
        <DataContext.Provider value={{productos, carrito, setCarrito}}>
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path={"/"} element={<ItemListContainer/>} />     
            <Route exact path={"/:productoId"} element={<ItemDetailContainer/>}/>
            <Route exact path={"/cuenta"} element={<MiCuenta/>}/>
            <Route exact path={"/carrito"} element={<Carrito/>}/>            
            <Route exact path={"/contacto"} element={<Contacto/>}/>
        </Routes>   
        <Footer/>     
        </BrowserRouter>
        </DataContext.Provider>
    )
}

