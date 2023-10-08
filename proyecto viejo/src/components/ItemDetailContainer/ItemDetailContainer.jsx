import { useParams } from "react-router-dom";
import ItemContador from "../ItemContador/ItemContador";
import { useContext } from "react";
import { DataContext } from "../Context/DatosContext";
import getProductosId from "../../DataProduct/getProductosId";
import { NavLink } from "react-router-dom";

export default function ItemDetailContainer() {


    const item = useContext(DataContext);

    const productoId = useParams();

    let parametroId = productoId.productoId;

    const productoDetalle = getProductosId(item, parametroId);


    console.log(productoDetalle);

    return (

        <div className="product-card-detalle">
            <div>
                <img src={productoDetalle.img_producto} alt={productoDetalle.nombre_producto} className="img-product-detalle" />
            </div>
            <div className="product-main-detalle">
                <p>{productoDetalle.nombre_producto}</p>
                <p>Stock: {productoDetalle.stock} -- ID: {productoDetalle.id}</p>
                <p>Precio: ${productoDetalle.precio}</p>
                <p>Descripción: {productoDetalle.descripcion}</p>

                <div className="contador-vermas">
                    <ItemContador productoStock={productoDetalle.stock} productoId={productoDetalle.id}/>
                    <NavLink to={"/"} className="boton-ver-mas">Volver al listado</NavLink>
                </div>

            </div>
           
        </div>

    )
}