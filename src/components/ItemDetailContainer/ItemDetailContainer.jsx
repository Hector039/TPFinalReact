import { useContext, useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { DataContext } from "../context/dataContext";
import Contador from "../Contador/Contador";
import { doc, getDoc } from "firebase/firestore";
import { DataBase } from "../../Firebase/config";


export default function ItemDetailContainer() {

    const { handleAgregar } = useContext(DataContext);
    const [ cantidadProd, setCantidadProd ] = useState(1);
    const [ productoDetalle, setProductoDetalle ] = useState({})

    const { productoId }  = useParams();
    
    useEffect(() => {
        const docRef = doc(DataBase, "productos", productoId);
        getDoc(docRef)
            .then((resp) => {
                setProductoDetalle({ ...resp.data(), id: resp.id });
        })
    }, [productoId])


    return (

        <div className="product-card-detalle">
            <div>
                <img src={productoDetalle.img_producto} alt={productoDetalle.nombre_producto} className="img-product-detalle" />
            </div>
            <div className="product-main-detalle">
                <p>{productoDetalle.nombre_producto}</p>
                <p>Stock: {productoDetalle.stock}</p>

                <div className="precio-cantidad">
                    <p>Precio: ${productoDetalle.precio}</p>
                    <Contador stock={productoDetalle.stock} cantidad={cantidadProd} setcantidad={setCantidadProd}/>
                </div>

                <p>Descripción: {productoDetalle.descripcion}</p>

                <div className="buttons-card-detalle">
                    <NavLink to={"/"} className="boton-ver-mas">Volver al listado</NavLink>
                    <button className="cart-button-detalle" onClick={()=>handleAgregar(productoDetalle, cantidadProd)}>Añadir al Carrito</button>
                </div>
            </div>

        </div>

    )
}