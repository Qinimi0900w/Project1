import React, { useState } from "react";
import "./header.css";
import Logo from "./../img/logo.png";
import Slider from "./../img/sliders.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


const ModalProfile = ({ active, setactive }) => {
    return (
        <div className={active ? "modal_profile_active" : "modal_profile"}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <FontAwesomeIcon icon={faXmark} className="btnexit" onClick={() => setactive(false)} />
                <li>Мой профиль</li>
                <hr style={{ color: 'ligthgrey', width: '140px' }} />
                <li >Выйти</li>
            </div>
        </div>
    )
}
const ModalBurger = ({ active, setactive }) => {
    return (
        <div className={active ? "modal_burger_active" : "modal_burger"}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <FontAwesomeIcon icon={faXmark} className="btnexit" onClick={() => setactive(false)} />
                <li>Избранные новости</li>
            </div>
        </div>
    )
}
const Header = () => {
    const [modalActive, setModalActive] = useState();
    const [modalActiveBur, setModalActiveBur] = useState(true);
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
                                <a href="/"  >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="navbtn" />
                                </a>
                            </li>
                            <li>
                                <a href="/"  onClick={() => { setModalActive(true) }}>
                                <FontAwesomeIcon icon={faUser} className="navbtn"/>
                                </a>
                            </li>
                            <li>
                                <a href="/"  onClick={() => { setModalActiveBur(true) }}>
                                    <FontAwesomeIcon icon={faBars} className="navbtn"/>
                                </a>
                            </li>
                        </ul>
                        <ModalProfile active={modalActive} setactive={setModalActive} />
                        <ModalBurger active={modalActiveBur} setactive={setModalActive} />

                    </div>
                </div>
                <p className="title">Новости</p>
            </header>
            <div className="slider_block">
                <a href=""><img src={Slider} alt="" className="slider" /></a>
            </div>
        </>

    )
}

export default Header;

