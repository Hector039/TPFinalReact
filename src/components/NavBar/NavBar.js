import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "./assets/logo.png";
import FacebookIcon from "./assets/facebook-icon.jpg";
import InstagramIcon from "./assets/instagram-icon.jpg";
import WhatsappIcon from "./assets/WhatsApp.svg.png";
import { useEffect, useState } from "react";
import getDolares from "../ApiDolar/ApiDolar";
import { DateTime } from "luxon";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/config";
import { DataContext } from "../context/dataContext";
import { useContext } from "react";


export default function NavBar() {

        const { userState, setUserState } = useContext(DataContext);

        const dt = DateTime.now().setLocale('es').toLocaleString(DateTime.DATE_MED);

        const [dolares, setDolares] = useState([]);

        useEffect(() => {
                async function axiosData() {
                        let data = await getDolares();
                        setDolares(data);
                }
                axiosData();

        }, [])

        const logOut = async () => {
                await signOut(auth);
                setUserState(auth.currentUser);
        }

        return (
                <nav className="navbar">
                        <div className="top-navbar">

                                <p>Cotizaciones:</p>
                                {
                                        dolares.length === 0 ? <p>consiguiendo las cotizaciones...</p> :

                                                <div className="marquee marquee--hover-pause">
                                                        <ul className="marquee-content">
                                                                <li>{dolares[0].nombre}: ${dolares[0].compra} - ${dolares[0].venta}:</li>
                                                                <li>{dolares[1].nombre}: ${dolares[1].compra}- ${dolares[1].venta}</li>
                                                                <li>{dolares[4].nombre}: ${dolares[4].compra}- ${dolares[4].venta}</li>
                                                        </ul>

                                                        <ul aria-hidden="true" className="marquee-content">
                                                                <li>{dolares[0].nombre}: ${dolares[0].compra} - ${dolares[0].venta}</li>
                                                                <li>{dolares[1].nombre}: ${dolares[1].compra}- ${dolares[1].venta}</li>
                                                                <li>{dolares[4].nombre}: ${dolares[4].compra}- ${dolares[4].venta}</li>
                                                        </ul>
                                                </div>


                                }
                                <div className="fecha-container"><p className="fecha-navbar">{dt}</p></div>

                                <NavLink to={"/cuenta"} className="button-top-navbar" style={({ isActive }) => {
                                        return { fontWeight: isActive ? "bold" : "" }
                                }}>{!userState ? "Mi Cuenta" : userState.email }</NavLink>

                                {userState && <button className="boton-logout" onClick={logOut}>LogOut</button>}

                                <Link to={"https://www.facebook.com/"} target="_blank" rel="noreferrer" className="network-icon">
                                        <img src={FacebookIcon} alt="Facebook Icono" />
                                </Link>
                                <Link to={"https://www.instagram.com/"} target="_blank" rel="noreferrer" className="network-icon">
                                        <img src={InstagramIcon} alt="Instagram Icono" />
                                </Link>
                                <Link to={"https://web.whatsapp.com/"} target="_blank" rel="noreferrer" className="network-icon">
                                        <img src={WhatsappIcon} alt="Whatsapp Icono" />
                                </Link>

                        </div>
                        <div className="bottom-navbar">
                                <div className="navbar-brand">
                                        <Link to={"/"}>
                                                <img src={Logo} alt="Tienda Logo" />
                                        </Link>

                                </div>

                                <div className="navbar-menu">
                                        <NavLink to={"/"} className="navbar-item" style={({ isActive }) => {
                                                return { fontWeight: isActive ? "bold" : "" }
                                        }}>Inicio</NavLink>
                                        <NavLink to={"/cuenta"} className="navbar-item" style={({ isActive }) => {
                                                return { fontWeight: isActive ? "bold" : "" }
                                        }}>Mi Cuenta</NavLink>
                                        <NavLink to={"/carrito"} className="navbar-item" style={({ isActive }) => {
                                                return { fontWeight: isActive ? "bold" : "" }
                                        }}>Carrito</NavLink>
                                        <NavLink to={"/contacto"} className="navbar-item" style={({ isActive }) => {
                                                return { fontWeight: isActive ? "bold" : "" }
                                        }}>Contacto</NavLink>
                                        <CartWidget />
                                </div>
                        </div>
                </nav>
        )
}