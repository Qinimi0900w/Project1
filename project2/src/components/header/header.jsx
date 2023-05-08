import React from "react";
import "./header.css";
import Logo from "./../img/logo.png";
import Search from "./../img/search.png";
import Profile from "./../img/Group.png";
import Menu from "./../img/menu.png";

const Header = () => {
    return (
        <header className="header_news">
            <div className="all_logolink">
                <div className="logo_pr">
                    <img src={Logo} alt="" />
                </div>
                <div className="link_pr">
                    <ul>
                        <li>
                            <a href="">
                                <img src={Search} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={Profile} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={Menu} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="title">Новости</p>
        </header>

    )
}

export default Header;