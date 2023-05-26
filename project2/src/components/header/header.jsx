import React, { useState } from "react";
import "./header.css";
import Logo from "./../img/logo.png";
import Search from "./../img/search.png";
import Profile from "./../img/Group.png";
import Menu from "./../img/menu.png";
import Slider from "./../img/sliders.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const ModalProfile = ({ active, setactive }) => {
    return (
        <div className={active ? "modal_profile_active" : "modal_profile"}>
            <div className="modal_content" onClick={e => e.stopPropagation}>
                <FontAwesomeIcon icon={faXmark} className="btnexit" onClick={() => setactive(false)} />
                <li>Мой профиль</li>
                <hr style={{ color: 'ligthgrey', width: '140px' }} />
                <li >Выйти</li>
            </div>
        </div>
    )
}
const Header = () => {
    const [modalActive, setModalActive] = useState(true);
    return (
        <>
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
                        <ModalProfile active={modalActive} setactive={setModalActive} />
                    </div>
                </div>
                <p className="title">Новости</p>
            </header>
            <div className="slider_block">
                <a href=""><img src={Slider} alt="" className="slider" style={{ display: 'none' }} /></a>
            </div>
        </>

    )
}

export default Header;

