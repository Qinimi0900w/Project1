import React from "react";
import img from "./img/Rectangle 7.png";
import arrow from "./img/arrow-left.png";
import like from "./img/heart.png";
import share from "./img/share-2.png"
import CommentBlock from "./comment";


// const Page = () => {
//     const dataPage =[
//         {
//             id:1,
//             head:"Заголовок новости",
//             txt1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
//             img:"./img/Rectangle 7.png",
//             txt2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.",
//         }
//     ]

//     const items = dataPage.map((item) => {
//         <PageSection
//         id={item.id}
//         head={item.head}
//         txt1={item.txt1}
//         txt2={item.txt2}
//         />
//     } )
//     return (
//         <div className="titlePage">
//             {items}
//         </div>
//     )
// }
// export default Page;

const PageSection = ({head,data,img,txt1,txt2}) => {
    return(
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
            </div>
            <CommentBlock/>
        </>
    )
}
export default PageSection;