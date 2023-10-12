import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { DataContext } from "../context/dataContext";

export default function ItemDetailContainer() {

    const {productos, cantidad, handleAgregar, handleRestar, handleSumar} = useContext(DataContext);

    const { productoId } = useParams();

    const productoDetalle = productos.find(obj => obj.id === parseInt(productoId));

    return (

        <div className="product-card-detalle">
            <div>
                <img src={productoDetalle.img_producto} alt={productoDetalle.nombre_producto} className="img-product-detalle" />
            </div>
            <div className="product-main-detalle">
                <p>{productoDetalle.nombre_producto}</p>
                <p>Stock: {productoDetalle.stock} -- ID: {productoDetalle.id}</p>

                <div className="precio-cantidad">
                    <p>Precio: ${productoDetalle.precio}</p>
                    <div className="seleccion-cantidad">
                        <button onClick={handleRestar} className="botton-cantidad">-</button>
                        <p className="info-cantidad">{productoDetalle.stock === 0 ? "X" : cantidad}</p>
                        <button onClick={()=>handleSumar(productoDetalle.stock)} className="botton-cantidad">+</button>
                    </div>
                </div>

                <p>Descripción: {productoDetalle.descripcion}</p>

                <div className="buttons-card-detalle">
                    <button className="cart-button-detalle" onClick={()=>handleAgregar(productoDetalle)}>Añadir al Carrito</button>
                    <NavLink to={"/"} className="boton-ver-mas">Volver al listado</NavLink>
                </div>
            </div>

        </div>

    )
}