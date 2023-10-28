import { Link } from "react-router-dom";
import CarritoIcono from "./assets/carritoIcono.svg";
import { useContext } from "react";
import { DataContext } from "../context/dataContext";

export default function CartWidget() {

    const { carritoNumero } = useContext(DataContext);

    return (
        <div className="cart-widget">
            <Link to={"/carrito"}>
                <div className="widget">
                    <img src={CarritoIcono} alt="Icono Carrito" />
                    <p>{carritoNumero()}</p>
                </div>
            </Link>
        </div>
    )
}