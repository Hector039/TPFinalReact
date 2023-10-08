import { useContext } from "react"
import { DataContext } from "../context/dataContext"


export default function Carrito() {

    const {carrito} = useContext(DataContext);


    return (
        <div className="carrito">
            <h1>Carrito</h1>

            <div className="carrito-main">
                <table>
                    <thead>
                        <tr>
                            <th>X</th>
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
                            <th>X</th>
                            <th>{prod.id}</th>
                            <th>{prod.nombre_producto}</th>
                            <th>{prod.precio}</th>
                            <th>{prod.cantidad}</th>
                            <th>{prod.cantidad * prod.precio}</th>
                            {/* <th>Total</th> */}
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
            <button className="carrito-comprar-button">Finalizar Compra</button>
        </div>
    )
}