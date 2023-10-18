import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "./assets/logo.png";
import FacebookIcon from "./assets/facebook-icon.jpg";
import InstagramIcon from "./assets/instagram-icon.jpg";
import WhatsappIcon from "./assets/WhatsApp.svg.png";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/dataContext";
import getDolares from "../ApiDolar/ApiDolar";


export default function NavBar() {

        const { dt } = useContext(DataContext);

        const [dolares, setDolares] = useState([]);

        useEffect(() => {
                async function axiosData() {
                        let data = await getDolares();
                        setDolares(data);
                }
                axiosData();

        }, [])
        
        return (
                <nav className="navbar">
                        <div className="top-navbar">

                                <p>Cotizaciones:</p>
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

                                <div>{dt}</div>
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
                                        <CartWidget/>
                                </div>
                        </div>
                </nav>
        )
}