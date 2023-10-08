export default function MiCuenta (){
    return(
        <div className="cuenta-main">
            <h1>Mi Cuenta:</h1>

            <section className="cuenta-info">
                <div className="cuenta-acceder">
            <p className="cuenta-title">Acceder:</p>
            <form action="">
                <input type="text" id="name" name="name" autoComplete="nombre" placeholder="Nombre de Usuario *"  required/>
                <input type="text" id="pass" name="pass" autoComplete="contraseña" placeholder="Contraseña *"  required/>
                <button type="submit" className="cuenta-button">Acceder</button>
            </form>
            </div>

            <div className="cuenta-registrarse">
            <p className="cuenta-title">Registrarse:</p>
            <form action="">
                <input type="text" id="email" name="email" autoComplete="correo-electrónico" placeholder="Dirección Correo Electrónico"/>
                <p>Se enviará un enlace a tu dirección de correo electrónico para establecer una nueva contraseña.</p>
                <p>Tus datos personales solo se utilizarán para procesar tu pedido.</p>
                <button type="submit" className="cuenta-button">Registrarse</button>
            </form>
            </div>
            </section>
            
        </div>
    )
}