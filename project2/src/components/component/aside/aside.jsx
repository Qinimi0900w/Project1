import React from "react";
import "./aside.css";

const Aside = () => {
    return (
        <aside>
            <form className="form">
                <div className="form_title">
                    <p>
                        <b>Фильтрация</b>
                    </p>
                </div>
                <div className="checkbox">
                    <input type="custom-checkbox" className="checkbox" disabled="disabled" name="sport"/>
                    <label for="sport">Спорт</label>
                </div>
                <br />
                <div className="checkbox">
                    <input type="custom-checkbox" className="checkbox" disabled="disabled"/>
                    <label>Политика</label>
                </div>
                <br />
                <div className="checkbox">
                    <input type="custom-checkbox" className="checkbox" disabled="disabled" />
                    <label>Звезды</label>
                </div>
                <br />
                <div className="checkbox">
                    <input type="custom-checkbox" className="checkbox" disabled="disabled"/>
                    <label>Искусство</label>
                </div>
                <br />
                <div className="checkbox">
                    <input type="custom-checkbox" className="checkbox" />
                    <label>Мода</label>
                </div>
                <br />
                <button className="btn">
                    <a href="">Применить</a>
                </button>
            </form>
        </aside>

    )
}

export default Aside;