import React from "react";
import Logo from "./img/Group1.png"


const Footer = () => {
    return (
        <footer className="footer">
            <img src={Logo} alt="" />
            <div className="fft">
                <p>
                    <a href="">Мой профиль</a>
                </p>
                <p>
                    <a href="">Избранные новости</a>
                </p>
            </div>
        </footer>

    )
}

export default Footer;