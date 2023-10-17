import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "../context/dataContext";
import Contador from "../Contador/Contador";

export default function Producto({producto}) {

    const { handleAgregar} = useContext(DataContext);
    const [cantidadProd, setCantidadProd] = useState(1);
    
    /* 
    function handleRestar() {
        cantidadProd > 1 && setCantidadProd(cantidadProd - 1);
    }

    function handleSumar() {
        cantidadProd < producto.stock && setCantidadProd(cantidadProd + 1);
    }
     */
    
    return (
        <div className="product-card">
            
            <img src={producto.img_producto} alt={producto.nombre_producto} className="img-product" />
            <p>{producto.nombre_producto}</p>
            <p>Categoría: {producto.categoria}</p>
            <div className="precio-cantidad">
                <p>Precio: ${producto.precio}</p>
                <Contador stock={producto.stock} cantidad={cantidadProd} setcantidad={setCantidadProd}/>

                {/* <div className="seleccion-cantidad">
                    <button onClick={handleRestar} className="botton-cantidad">-</button>                
                    <p className="info-cantidad">{producto.stock === 0 ? "Sin Stock" : cantidadProd}</p>
                    <button onClick={handleSumar} className="botton-cantidad">+</button>
                </div> */}

            </div>

            <div className="buttons-card">
                <NavLink to={`/${producto.id}`} className="info-button">Ver Detalle</NavLink>
                <button className="cart-button" onClick={()=>handleAgregar(producto, cantidadProd)}>Añadir al Carrito</button>
            </div>

        </div>
    )
}