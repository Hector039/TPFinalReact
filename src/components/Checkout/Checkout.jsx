import { useContext, useState } from "react";
import { DataContext } from "../context/dataContext";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { DataBase } from "../../Firebase/config";


export default function Checkout() {

    const { carrito, handleVaciar, dt } = useContext(DataContext);
    const [encargoId, setEncargoId] = useState("");
    const { register, handleSubmit } = useForm();

    const pagar = (e) => {
        const encargo = {
            productos: carrito,
            total: carrito.reduce((acumulador, item) => acumulador + (item.cantidad * item.precio), 0),
            fecha: dt,
            cliente: e
        }
        console.log(encargo);

        const encargoRef = collection(DataBase, "compras");
        addDoc(encargoRef, encargo)
            .then((envio) => {
                setEncargoId(envio);
                handleVaciar();
            })
    }

    if (encargoId) {
        return (
            <div>
                <h2>Muchas gracias por tu compra!</h2>
                <p>Código de Compra: {encargoId.id} --- Fecha: {encargoId.fecha}</p>
                <p>Tu pedido:</p>
                {
                    encargoId.productos.map((prod) => (
                        <div key={prod.id}>
                            <p>{prod.nombre_producto} Cant: {prod.cantidad}</p>
                        </div>
                    ))
                }
                <p>Total: ${(carrito.reduce((acumulador, item) => acumulador + (item.cantidad * item.precio), 0)).toFixed(2)}</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Finalizando compra...</h1>
            <form onSubmit={handleSubmit(pagar)}>
                <input type="text" placeholder="Ingresá tu Nombre" {...register("nombre")} required/>
                <input type="email" placeholder="Ingresá tu E-mail" {...register("email")} required/>
                <input type="phone" placeholder="Ingresá tu Teléfono" {...register("telefono")} />
                <button type="submit">Comprar</button>
            </form>
        </div>
    )
}