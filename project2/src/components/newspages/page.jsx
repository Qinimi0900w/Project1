import React from "react";
import img from "./img/Rectangle 7.png";
import arrow from "./img/arrow-left.png";
import like from "./img/heart.png";
import share from "./img/share-2.png"


const Page = ({head,data,txt1,txt2}) => {
    return (
        <>
            <div className="page_main">
                <div className="div-arrow">
                    <button className="btn_arrow">
                        <img src={arrow} alt="" />
                    </button>
                </div>
                <div>
                    <button className="btn_like">
                        <img src={like} alt="" />
                    </button>
                </div>
                <div className="main_content">
                    <p className="grey">{data}</p>
                    <h2>{head}</h2>
                    <p className="grey">
                        {txt1}
                    </p>
                    <img src={img} alt="" className="main_img" />
                    <p className="grey">
                        {txt2}
                    </p>
                </div>
                <button className=" btn_share">
                    <img src={share} alt="" />
                </button>
                <br />
                <br />
                <div className="comment_content">
                    <h3>Комментарии</h3>
                    <div className="comment-txt">
                        <p>
                            <b>Олег Петров</b>
                        </p>
                        <p className="grey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                            libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
                            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                        <div className="comment_link">
                            <p className="grey">30.11.2022</p>
                            <a href="">Ответить</a>
                        </div>
                        <div className="comment_subtxt">
                            <p>
                                <b>Олег Петров</b>
                            </p>
                            <p className="grey">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                vulputate libero et velit interdum, ac aliquet odio mattis. Class
                                aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                inceptos himenaeos.
                            </p>
                            <div className="comment_link">
                                <p className="grey">30.11.2022</p>
                                <a href="">Ответить</a>
                            </div>
                            <div className="block_answer">
                                <label htmlFor="">
                                    <b>Вы</b>
                                </label>
                                <input type="text" className="fields_answer" />
                                <input type="submit" defaultValue="Ответить" className="btn_answer" />
                            </div>
                        </div>
                        <p>
                            <b>Олег Петров</b>
                        </p>
                        <p className="grey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                            libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
                            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                        <div className="comment_link">
                            <p className="grey">30.11.2022</p>
                            <a href="">Ответить</a>
                        </div>
                        <div className="mainblock_answer">
                            <label htmlFor="">
                                <b>Вы</b>
                            </label>
                            <input
                                type="text"
                                className="mainFieldSnswer"
                                placeholder="Напишите комментарий"
                            />
                            <input
                                type="submit"
                                defaultValue="Ответить"
                                className="btn_mainfield"
                            />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Page;