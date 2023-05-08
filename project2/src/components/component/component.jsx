import React from "react";
import Aside from "./aside/aside";
import Section from "./section/section";
import Jpg1 from "./../img/Rectangle 7.png";
import Jpg2 from "./../img/Rectangle 8.png";
import Jpg3 from "./../img/Rectangle 9.png";
import Jpg4 from "./../img/Rectangle 10.png";
import Jpg5 from "./../img/Rectangle 11.png";



// const picture = [
//     {
//         src:"./img/Rectangle 7.png"
//     },
//     {
//         src:"./img/Rectangle 8.png"

//     },
//     {
//         src:"./img/Rectangle 9.png"

//     },
//     {
//         src:"./img/Rectangle 10.png"

//     }, 
//     {
//         src:"./img/Rectangle 11.png"

//     }
// ]
const Component = () => {
    return (
        <>
            <div className="main">
                <Aside />
                <section className="news_list">
                    <Section 
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
                    />
                    <Section 
                    src={Jpg5}
                    />

                </section>
            </div>
        </>
    )
}

export default Component;