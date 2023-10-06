import { NavLink, useParams } from "react-router-dom";
import ItemContador from "../ItemContador/ItemContador";
import { useContext } from "react";
import { DataContext } from "../Context/DatosContext";
import getProductosId from "../../DataProduct/getProductosId";

export default function ItemDetailContainer() {

    const item = useContext(DataContext);

    const productoId = useParams();

    let parametroId = productoId.productoId;

    const productoDetalle = getProductosId(item, parametroId);


    console.log(productoDetalle);

    function handleAgregar() {
        console.log({ ...productoDetalle, cantidad });
    }

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
                    <ItemContador productoStock={productoDetalle.stock}/>
                </div>

                <p>Descripción: {productoDetalle.descripcion}</p>

                <div className="buttons-card-detalle">
                    <button className="cart-button-detalle" onClick={handleAgregar}>Añadir al Carrito</button>
                    <NavLink to={"/"} className="boton-ver-mas">Volver al listado</NavLink>
                </div>
            </div>

        </div>

    )
}