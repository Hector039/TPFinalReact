
import { NavLink } from "react-router-dom";
import ItemContador from "../ItemContador/ItemContador";

export default function Producto({producto}) {
    
    function handleAgregar() {
        console.log({...producto, cantidad});
    }

    return (
        <div className="product-card">
            
            <img src={producto.img_producto} alt={producto.nombre_producto} className="img-product" />
            <p>{producto.nombre_producto}</p>
            <p>Categoría: {producto.categoria}</p>
            <div className="precio-cantidad">
                <p>Precio: ${producto.precio}</p>
                <ItemContador productoStock={producto.stock}/>
                
            </div>

            <div className="buttons-card">
                <NavLink to={`/${producto.id}`} className="info-button">Ver Detalle</NavLink>
                <button className="cart-button" onClick={handleAgregar}>Añadir al Carrito</button>
            </div>

        </div>
    )
}