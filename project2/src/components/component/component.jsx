import React, { Fragment } from "react";
import Aside from "./aside/aside";
import Section from "./section/section";
import Jpg1 from "./../img/Rectangle 7.png";
import Jpg2 from "./../img/Rectangle 8.png";
import Jpg3 from "./../img/Rectangle 9.png";
import Jpg4 from "./../img/Rectangle 10.png";
import Jpg5 from "./../img/Rectangle 11.png";
import {sections} from "./section/sections"


const Component = () => {
    const items = sections.map((item) => {
        return (
            <Fragment key ={item.id} >
                < Section 
                    img={item.img_url}
            />
            </Fragment>
            
        )
    })
    return (
        <>
            <div className="main">
                <Aside />
                <section className="news_list">
                    {items}
                    {/* <Section 
                     src={Jpg1}
                     />
                    <Section
                    src={Jpg2}
                    />
                    <Section
                    src={Jpg3}
                    />
                    <Section
                    src={Jpg4}
                    /> */}
                    
                </section>
            </div>
        </>
    )
}

export default Component;