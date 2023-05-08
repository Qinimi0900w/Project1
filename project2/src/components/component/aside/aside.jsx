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
                <input type="checkbox" className="checkbox" />
                <span>Спорт</span>
                <br />
                <input type="checkbox" className="checkbox" />
                <span>Политика</span>
                <br />
                <input type="checkbox" className="checkbox" />
                <span>Звезды</span>
                <br />
                <input type="checkbox" className="checkbox" />
                <span>Искусство</span>
                <br />
                <input type="checkbox" className="checkbox" />
                <span>Мода</span>
                <br />
                <button className="btn">
                    <a href="">Применить</a>
                </button>
            </form>
        </aside>

    )
}

export default Aside;