import React from "react";
import "./HeaderCarousel.css";
import img2 from "./logo.png";
import { Link } from "react-router-dom";

const HeaderImg = () => {
  return (
    <div className="header-container">
      <div className="content">
        <div className="contentImg">
          <img width="400" src={img2} style={{marginTop: "160px"}} />
        </div>
        <p className="contentH">
          Project Strategis BRI yang Mentransformasi<br/> Finance System di BRI
        </p>
        <div className="contentBtn">
          <Link to="/BRIFirst" className="btn btn-light">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

//
// const HeaderCarousel = () => {jrfy6t78
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };
//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img className="d-block w-100" src={img1} alt="First slide" />
//         <Carousel.Caption>
//           <Container>
//             <Row>
//               <Col>
//                 <div className="Header">
//                   <Row>
//                     <div
//                       style={{
//                         fontSize: "60px",
//                         fontWeight: "bolder",
//                         color: "#034584",
//                       }}
//                     >
//                       Apa itu BRIFirst?
//                     </div>
//                     <h6>
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry's
//                       standard dummy text ever since the 1500s, when an unknown
//                       printer took a
//                     </h6>
//                   </Row>
//                 </div>
//               </Col>
//               <Col></Col>
//             </Row>
//           </Container>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100" src={img2} alt="Second slide" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100" src={img3} alt="Third slide" />
//       </Carousel.Item>
//     </Carousel>
//   );
// };

export default HeaderImg;
