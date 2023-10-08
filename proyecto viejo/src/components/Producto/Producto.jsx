
import { NavLink } from "react-router-dom";
import ItemContador from "../ItemContador/ItemContador";

export default function Producto({producto}) {

    return (
        <div className="product-card">
            
            <img src={producto.img_producto} alt={producto.nombre_producto} className="img-product" />
            <p>{producto.nombre_producto}</p>
            <p>Categoría: {producto.categoria}</p>
            <p>Precio: ${producto.precio}</p>
        
            <div className="buttons-card">
                <ItemContador productoStock={producto.stock} productoId={producto.id}/>
                <NavLink to={`/${producto.id}`} className="info-button">Ver Detalle</NavLink>
            </div>

        </div>
    )
}