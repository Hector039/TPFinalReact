import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "../context/dataContext";
import Contador from "../Contador/Contador";

export default function Producto({ producto }) {

    const { handleAgregar } = useContext(DataContext);
    const [cantidadProd, setCantidadProd] = useState(1);


    return (
        <div className="product-card">
            <img src={producto.img_producto} alt={producto.nombre_producto} className="img-product" />
            <div className="product-card-main">
                <h3>{producto.nombre_producto}</h3>
                <h4>Precio: ${producto.precio}</h4>
                <div className="precio-cantidad">
                    <p className="product-categoria">{producto.categoria}</p>
                    <Contador stock={producto.stock} cantidad={cantidadProd} setcantidad={setCantidadProd} />
                </div>

                <div className="buttons-card">
                    <NavLink to={`/${producto.id}`} className="info-button">Ver Detalle</NavLink>
                    {
                        producto.stock === 0 ? <button className="cart-button-disabled">No Disponible</button> :
                            <button className="cart-button" onClick={() => handleAgregar(producto, cantidadProd)}>Añadir al Carrito</button>
                    }
                </div>
            </div>


        </div>
    )
}