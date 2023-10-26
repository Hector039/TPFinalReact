import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import MiCuenta from "./components/MiCuenta/MiCuenta";
import Carrito from "./components/Carrito/Carrito";
import Contacto from "./components/Contacto/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { DataProvider } from "./components/context/dataContext";
import Checkout from "./components/Checkout/Checkout";
import Sistema from "./components/Sistema/Sistema";

export default function App() {
    return (
        <DataProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path={"/"} element={<ItemListContainer/>} />
                    <Route exact path={"/:productoId"} element={<ItemDetailContainer/>} />
                    <Route exact path={"/cuenta"} element={<MiCuenta/>} />
                    <Route exact path={"/carrito"} element={<Carrito/>} />
                    <Route exact path={"/contacto"} element={<Contacto/>} />
                    <Route exact path={"/checkout"} element={<Checkout/>} />
                    <Route exact path={"/sistema"} element={<Sistema/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </DataProvider>
    )
}

