import { useState } from "react";

const ItemContador = ({productoStock}) => {

    const [cantidad, setCantidad] = useState(1);

    function handleRestar() {
        cantidad > 1 && setCantidad(cantidad - 1);
    }
    function handleSumar() {
        cantidad < productoStock && setCantidad(cantidad + 1);
    }


    return (
        <div className="seleccion-cantidad">
            <button onClick={handleRestar} className="botton-cantidad">-</button>
            <p className="info-cantidad">{productoStock === 0 ? "X" : cantidad}</p>
            <button onClick={handleSumar} className="botton-cantidad">+</button>
        </div>
    )
}

export default ItemContador;