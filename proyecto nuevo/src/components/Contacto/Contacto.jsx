import PhoneIcon from "./Assets/icon-phone.svg";
import EmailIcon from "./Assets/icon-email.svg";
import LocationIcon from "./Assets/icon-location.svg";
import FacebookIcon from "./Assets/facebook-icon.jpg";
import InstagramIcon from "./Assets/instagram-icon.jpg";
import WhatsappIcon from "./Assets/WhatsApp.svg.png";

export default function Contacto() {
    return (
        <div className="contacto-main">
            <div className="contacto-info-uno">
                <h1>Quienes somos?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum odio beatae autem, voluptatum doloremque vero culpa vitae adipisci ipsa, aperiam ullam quo voluptas qui, temporibus magni perferendis praesentium aspernatur.</p>
            </div>

            <div className="contacto-info-dos">
                <div className="contacto-info-dos-contactar">

                    <div className="contacto-como">
                        <div className="contacto-uno">
                            <div>
                                <img src={PhoneIcon} alt="icono teléfono" />
                            </div>
                            <div>
                                <p>Call-center:</p>
                                <p>0800-666-66666</p>
                            </div>
                        </div>
                        <div className="contacto-dos">
                            <div>
                                <img src={EmailIcon} alt="icono E-mail" />
                            </div>
                            <div>
                                <p>E-mail:</p>
                                <p>ejemplo@gmail.com</p>
                            </div>
                        </div>
                        <div className="contacto-tres">
                            <div>
                                <img src={LocationIcon} alt="icono Ubicación" />
                            </div>
                            <div>
                                <p>Casa Central:</p>
                                <p>Av. Siempre viva 1234</p>
                            </div>
                        </div>
                        <div className="contacto-networks">
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="network-icon-contacto"><img src={FacebookIcon} alt="Facebook Icono" /></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="network-icon-contacto"><img src={InstagramIcon} alt="Instagram Icono" /></a>
                            <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer" className="network-icon-contacto"><img src={WhatsappIcon} alt="Whatsapp Icono" /></a>
                        </div>
                    </div>
                </div>

                <div className="contacto-info-dos-donde">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54358.90165918648!2d-60.70378570612509!3d-31.62203794828376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9adc40888e1%3A0xdcf7761e8d02804a!2sSanta%20Fe%20de%20la%20Vera%20Cruz%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1695070125270!5m2!1ses!2sar"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="contacto-map"></iframe>
                </div>
            </div>
        </div>
    )
}