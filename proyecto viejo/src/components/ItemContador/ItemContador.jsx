import { useState } from "react";
import getProductosId from "../../DataProduct/getProductosId";
import { DataContext } from "../Context/DatosContext";
import { useContext } from "react";

const ItemContador = ({ productoStock, productoId }) => {

    const item = useContext(DataContext);

    const [cantidad, setCantidad] = useState(1);

    function handleRestar() {
        cantidad > 1 && setCantidad(cantidad - 1);
    }
    function handleSumar() {
        cantidad < productoStock && setCantidad(cantidad + 1);
    }

    const productoDetalle = getProductosId(item, productoId);

    function handleAgregar() {
        console.log({ ...productoDetalle, cantidad });
    }


    return (
        <div className="contador-boton-carrito">
            <div className="seleccion-cantidad">
                <button onClick={handleRestar} className="botton-cantidad">-</button>
                <p className="info-cantidad">{productoStock === 0 ? "Sin Stock" : cantidad}</p>
                <button onClick={handleSumar} className="botton-cantidad">+</button>
            </div>

                <button className="cart-button-detalle" onClick={handleAgregar}>Añadir al Carrito</button>
        </div>

    )
}

export default ItemContador;