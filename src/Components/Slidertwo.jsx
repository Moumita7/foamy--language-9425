import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "../styles/header.css"


const Slidertwo = () => {
  const settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          speed: 500
        };
        return (
          <div className="top" >
          <h2>Top Destinations</h2>
         
            <Slider {...settings}>
              <div className="card">
              <div>
               <img className="imgg" width="100%" height='200px' src="https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/Mobile/City/o7zyedk7po4liguigvzs.jpg" alt='df'/>
               <h2 className="textt">Goa Holiday Homes</h2>
              </div>
              </div>
              <div className="card">
              <div>
               <img className="imgg" width="100%" height='200px' src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/08/shutterstock_599364767.jpg" alt='df'/>
               <h2 className="textt">Galle Holiday Homes</h2>
              </div>
              </div>
              <div className="card">
              <div>
               <img className="imgg" width="100%" height='200px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxwQX1_ekaCFHs2-mypbxQvnZ3ZO2_QwrTQ&usqp=CAU" alt='df'/>
               <h2 className="textt">Phuket Holiday Homes</h2>
              </div>
              </div>
              <div className="card">
              <div>
               <img className="imgg" width="100%" height='200px' src="https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/Mobile/City/o7zyedk7po4liguigvzs.jpg" alt='df'/>
               <h2 className="textt">Goa Holiday Homes</h2>
              </div>
              </div>
              <div className="card">
              <div>
               <img className="imgg" width="100%" height='200px' src="https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/Mobile/City/o7zyedk7po4liguigvzs.jpg" alt='df'/>
               <h2 className="textt">Goa Holiday Homes</h2>
              </div>
              </div>
              <div className="card">
              <div>
               <img className="imgg" width="100%" height='200px' src="https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/Mobile/City/o7zyedk7po4liguigvzs.jpg" alt='df'/>
               <h2 className="textt">Goa Holiday Homes</h2>
              </div>
              </div>
            </Slider>
          </div>
        );
      }



export default Slidertwo