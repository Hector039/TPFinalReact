import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "./assets/logo.png";
import FacebookIcon from "./assets/facebook-icon.jpg";
import InstagramIcon from "./assets/instagram-icon.jpg";
import WhatsappIcon from "./assets/WhatsApp.svg.png";


export default function NavBar() {
        return (
                <nav className="navbar">
                        <div className="top-navbar">
                                <NavLink to={"/cuenta"} className="button-top-navbar" style={({isActive})=>{
                                                return {fontWeight: isActive ? "bold" : ""}
                                        }}>Mi Cuenta</NavLink>

                                        <Link to={"https://www.facebook.com/"} target="_blank" rel="noreferrer" className="network-icon">
                                        <img src={FacebookIcon}  alt="Facebook Icono"  />
                                        </Link>
                                        <Link to={"https://www.instagram.com/"} target="_blank" rel="noreferrer" className="network-icon">
                                        <img src={InstagramIcon}  alt="Instagram Icono"  />
                                        </Link>
                                        <Link to={"https://web.whatsapp.com/"} target="_blank" rel="noreferrer" className="network-icon">
                                        <img src={WhatsappIcon}  alt="Whatsapp Icono"  />
                                        </Link>

                        </div>
                        <div className="bottom-navbar">
                                <div className="navbar-brand">
                                        <Link to={"/"}>
                                                <img src={Logo} alt="Tienda Logo" />
                                        </Link>
                                        
                                </div>

                                <div className="navbar-menu">
                                        <NavLink to={"/"} className="navbar-item" style={({isActive})=>{
                                                return {fontWeight: isActive ? "bold" : ""}
                                        }}>Inicio</NavLink>
                                        <NavLink to={"/cuenta"} className="navbar-item" style={({isActive})=>{
                                                return {fontWeight: isActive ? "bold" : ""}
                                        }}>Mi Cuenta</NavLink>
                                        <NavLink to={"/carrito"} className="navbar-item" style={({isActive})=>{
                                                return {fontWeight: isActive ? "bold" : ""}
                                        }}>Carrito</NavLink>
                                        <NavLink to={"/contacto"} className="navbar-item" style={({isActive})=>{
                                                return {fontWeight: isActive ? "bold" : ""}
                                        }}>Contacto</NavLink>
                                        
                                        <CartWidget />
                                </div>
                        </div>
                </nav>
        )
}