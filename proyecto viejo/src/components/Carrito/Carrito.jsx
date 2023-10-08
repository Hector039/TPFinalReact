export default function Carrito() {

    return (
        <div className="carrito">
            <h1>Carrito</h1>

            <div className="carrito-main">
                <table>
                    <thead>
                        <tr>
                            <th>X</th>
                            <th>id</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Total</th>
                        </tr>
                    </thead>

                </table>
                
            </div>
            <button className="carrito-comprar-button">Finalizar Compra</button>
        </div>
    )
}