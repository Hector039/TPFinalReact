import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/dataContext";

export default function Producto({producto}) {

    const { cantidad, handleAgregar, handleRestar, handleSumar} = useContext(DataContext);
    
    return (
        <div className="product-card">
            
            <img src={producto.img_producto} alt={producto.nombre_producto} className="img-product" />
            <p>{producto.nombre_producto}</p>
            <p>Categoría: {producto.categoria}</p>
            <div className="precio-cantidad">
                <p>Precio: ${producto.precio}</p>
                <div className="seleccion-cantidad">
                    <button onClick={handleRestar} className="botton-cantidad">-</button>                
                    <p className="info-cantidad">{producto.stock === 0 ? "X" : cantidad}</p>
                    <button onClick={()=>handleSumar(producto.stock)} className="botton-cantidad">+</button>
                </div>
            </div>

            <div className="buttons-card">
                <NavLink to={`/${producto.id}`} className="info-button">Ver Detalle</NavLink>
                <button className="cart-button" onClick={()=>handleAgregar(producto)}>Añadir al Carrito</button>
            </div>

        </div>
    )
}