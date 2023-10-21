import { useContext, useState } from "react";
import { DataContext } from "../context/dataContext";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { DataBase } from "../../Firebase/config";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { DateTime } from "luxon";


export default function Checkout() {

    const { carrito, handleVaciar } = useContext(DataContext);
    const { register, handleSubmit } = useForm();

    const [ encargoId, setEncargoId ] = useState({});
    const [ productosCheck, setProductoscheck ] = useState([]);
    const [ infoEncargo, setInfoEncargo ] = useState({});

    const MySwal = withReactContent(Swal);
    const dt = DateTime.now().setLocale('es').toLocaleString(DateTime.DATETIME_SHORT);

    const pagar = (e) => {
        const encargo = {
            productos: carrito,
            total: carrito.reduce((acumulador, item) => acumulador + (item.cantidad * item.precio), 0).toFixed(2),
            fecha: dt,
            cliente: e
        }
        setProductoscheck(carrito);
        setInfoEncargo(encargo);

        const encargoRef = collection(DataBase, "compras");
        addDoc(encargoRef, encargo)
            .then((envio) => {
                setEncargoId(envio);
                MySwal.fire({
                    icon: "success",
                    title: "Muchas gracias por tu compra!",
                    text: "El pedido se envió correctamente, pulsa para ver tu comprobante:",
                })
                handleVaciar();
            })
    }

    console.log(encargoId);
    console.log(infoEncargo.fecha);

    if (encargoId.id !== undefined) {
        return (
            <div className="checkout-compra">
                <h2>Muchas gracias por tu compra!</h2>
                <p>Código de Compra: {encargoId.id}</p>
                <p>Fecha: {infoEncargo.fecha}</p>
                <div className="pedido-resumen">
                    <p>Pediste:</p>
                    {
                        productosCheck.map((prod) => (
                            <div key={prod.id}>
                                <p>{prod.nombre_producto} / Cant: {prod.cantidad}</p>
                            </div>
                        ))
                    }
                </div>

                <p>Total: ${infoEncargo.total}</p>
                <NavLink to={"/"} className="boton-volver">Volver a Inicio</NavLink>
            </div>
        )
    }

    return (
        <div className="checkout-main">
            <h1>Finalizando compra...</h1>
            <form className="checkout-form" onSubmit={handleSubmit(pagar)}>
                <input type="text" name="nombre" placeholder="Ingresá tu Nombre" {...register("nombre", { required: true })} />
                <input type="email"  name="email" placeholder="Ingresá tu E-mail" {...register("email", { required: true })} />
                <input type="number"  name="telefono" placeholder="Ingresá tu Teléfono" {...register("telefono")} />
                <button type="submit" className="checkout-button-comprar" >Comprar!</button>
            </form>
        </div>
    )
}