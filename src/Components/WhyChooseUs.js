import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TruckICON from "../img/tracking.png";
const WhyChooseUs = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 604, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="wcu">
      <div className="header">
        <div className="wrapper header-wrapper">
          <h3>Famba Na Hina</h3>
          <h1>Logistics and Transport</h1>
          <span className="icon-container">
            <hr />
            <img width="40" src={TruckICON} alt="" srcset="" />
            <hr />
          </span>
        </div>
      </div>
      <div className="carousel">
        <div className="wrapper carousel-wrapper ">
          <Carousel
            responsive={responsive}
            draggable={true}
            arrows={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
          >
            <div className="box box-1">Item 1</div>
            <div className="box box-2">Item 2</div>
            <div className="box box-3">Item 3</div>
            <div className="box box-4">Item 4</div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
