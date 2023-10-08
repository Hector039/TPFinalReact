import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/dataContext";

export default function Producto({producto}) {

    const { carrito, setCarrito} = useContext(DataContext);
    const [cantidad, setCantidad] = useState(1);

    function handleRestar() {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    function handleSumar() {
        cantidad < producto.stock && setCantidad(cantidad + 1);
    }
    
    function handleAgregar() {
        const productoSel = {...producto, cantidad};
        const carritoCopia = [...carrito];
        const prodEncontradoCarrito = carritoCopia.find((item) => item.id === productoSel.id);
        
        if (prodEncontradoCarrito){
            prodEncontradoCarrito.cantidad += cantidad;
        } else {
            carritoCopia.push(productoSel)
        }
        setCarrito(carritoCopia);
    }

    const carritoNumero = () => {
        return carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);
    }
    
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
                    <button onClick={handleSumar} className="botton-cantidad">+</button>
                </div>
            </div>

            <div className="buttons-card">
                <NavLink to={`/${producto.id}`} className="info-button">Ver Detalle</NavLink>
                <button className="cart-button" onClick={handleAgregar}>Añadir al Carrito</button>
            </div>

        </div>
    )
}