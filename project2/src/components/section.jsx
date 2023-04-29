import React from "react";
import Like from "./img/heart.png"
import Share from "./img/share-2.png"


const Section = (props) => {
    return (
        <>
            <div className="content_block">
                <div className="img">
                    <img src={props.src} alt="" />
                </div>
                <div className="subtitle">
                    <div className="like_btn">
                        <a href="">
                            <img src={Like} alt="" />
                        </a>
                    </div>
                    <div className="subtitle">
                        <p className="grey">
                            <span className="grey">29.11.2022</span>
                            <br />
                            <br /> <span className="txt_title">
                                Заголовок новости
                            </span> <br /> <br /> Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nunc vulpuibero etvelit interdac aliquet odio mattis.
                            Class aptent taciti sociosqu ad litora torquent per conubinostra,
                            perinceptos himenaeos.
                        </p>
                        <a href="">Читать дальше&gt;&gt;</a>
                        <div className="share_btn">
                            <a href="">
                                <img src={Share} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ color: "darkgray", width: 845 }} />
        </>

    )
}

export default Section;