import { useContext } from "react"
import { DataContext } from "../context/dataContext"


export default function Carrito() {

    const {carrito, setCarrito} = useContext(DataContext);

    const handleVaciar = () => {
        setCarrito([]);
    }

    function eliminarItem(id) {
        const itemId = carrito.find((item) => item.id === id);
        console.log(itemId);
        const carritoNuevo = carrito.filter((item) => item.id !== itemId.id);
        setCarrito(carritoNuevo);
    }



    return (
        <div className="carrito">
            <h1>Carrito</h1>

            <div className="carrito-main">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
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
                            <th>{prod.id}</th>
                            <th>{prod.nombre_producto}</th>
                            <th>${prod.precio}</th>
                            <th>{prod.cantidad}</th>
                            <th>${prod.cantidad * prod.precio}</th>
                        
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
                            <th>{carrito.reduce((acumulador, item) => acumulador + (item.cantidad * item.precio), 0)}</th>
                        </tr>
                    </tfoot>

                </table>
                
            </div>
            {
                carrito.length > 0 ?
                <div className="botones-carrito">
                    <button className="cart-button" onClick={handleVaciar}>Vaciar Carrito</button>
                    <button className="carrito-comprar-button">Finalizar Compra</button>
                </div> : 
                <h2 className="carrito-mensaje">Aún no hay productos en el carrito</h2>
            }
            
        </div>
    )
}