import { Link } from "react-router-dom";
import CarritoIcono from "./assets/carritoIcono.svg";

export default function CartWidget () {
return (
    <div className="cart-widget">
        <Link to={"/carrito"}>
            <img src={CarritoIcono} alt="Icono Carrito"/>
        </Link>
        0
    </div>
)
}