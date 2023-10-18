import { useContext } from "react"
import { DataContext } from "../context/dataContext"
import { Link } from "react-router-dom";


export default function Carrito() {

    const {carrito, handleVaciar, eliminarItem} = useContext(DataContext);

    return (
        <div className="carrito">
            <h1>Carrito</h1>

            <div className="carrito-main">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            carrito.map((prod) => (
                        <tr key={prod.id}>
                            <th> <button className="boton-quitar-carrito" onClick={()=>{eliminarItem(prod.id)}}>X</button></th>
                            <th>{prod.nombre_producto}</th>
                            <th>${prod.precio}</th>
                            <th>{prod.cantidad}</th>
                            <th>${(prod.cantidad * prod.precio).toFixed(2)}</th>
                        
                        </tr>
                            ))
                        }
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>{(carrito.reduce((acumulador, item) => acumulador + (item.cantidad * item.precio), 0)).toFixed(2)}</th>
                        </tr>
                    </tfoot>

                </table>
                
            </div>
            {
                carrito.length > 0 ?
                <div className="botones-carrito">
                    <button className="cart-button" onClick={handleVaciar}>Vaciar Carrito</button>
                    <Link to={"/checkout"} className="carrito-comprar-button" >Finalizar Compra</Link>
                </div> : 
                <h2 className="carrito-mensaje">Aún no hay productos en el carrito</h2>
            }
            
        </div>
    )
}