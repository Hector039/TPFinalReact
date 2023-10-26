import { useForm } from "react-hook-form";
import { DataContext } from "../context/dataContext";
import { useContext } from "react";
import googleLogo from "./assets/googleLogo.png";

export default function MiCuenta() {

    const { login, accederConGoogle, newRegister, userState } = useContext(DataContext);

    const {
        register,
        handleSubmit,
    } = useForm({
        mode: "onBlur",
    });

    const {
        register: register2,
        handleSubmit: handleSubmit2,
    } = useForm({
        mode: "onBlur",
    });

    return (
        <div className="cuenta-main">
            <h1>Mi Cuenta:</h1>

            <section className="cuenta-info">
                {
                    !userState &&
                    <div className="cuenta-acceder">
                        <p className="cuenta-title">Acceder usuario existente:</p>
                        <form onSubmit={handleSubmit(login)}>
                            <input type="email" id="ecorreo" name="ecorreo" placeholder="Correo Electrónico *" {...register("ecorreo", { required: true })} />
                            <input type="password" id="pass" name="pass" placeholder="Contraseña *" {...register("pass", { required: true })} />
                            <button type="submit" className="cuenta-button">Acceder</button>
                        </form>
                        <p className="cuenta-title">O también:</p>
                        <button className="cuenta-button-google" onClick={accederConGoogle}>Acceder con Google <img src={googleLogo} alt="Google Logo" /></button>
                    </div>
                }

                <div className="cuenta-registrarse">
                    <p className="cuenta-title">Registrar cuenta nueva:</p>
                    <form onSubmit={handleSubmit2(newRegister)}>
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
                        <input type="email" id="email" name="email" placeholder="Dirección Correo Electrónico *" {...register2("email")} />
                        <input type="password" id="password" name="password" placeholder="Contraseña nueva *" {...register2("password")} />
                        <p>Tus datos personales solo se utilizarán para procesar tu pedido.</p>
                        <p>Recuerda que tu contraseña debe tener mínimo 6 carácteres.</p>
                        <button type="submit" className="cuenta-button" >Registrarse</button>
                    </form>
                </div>
            </section>

        </div>
    )
}