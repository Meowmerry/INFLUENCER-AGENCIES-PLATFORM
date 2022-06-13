import React, { useState } from "react";
import { Carousel } from 'antd';
import { Images } from './dataImg'


export const CarouselLaddingPage = () => {

  return (
    <div >
  
      <div className="mt-8">
        <Carousel autoplay slidesToShow={5} style={{border: "1px solid #4998DD"}}>
            <div className="mb-3 md:mb-0 flex justify-center">
              <img
                src={Images[0].link}
                width={"100%"}
                height={"100%"}
                className="cursor-pointer object-contain"
              />
            </div>
            <div className="mb-3 md:mb-0 flex justify-center">
              <img
                src={Images[1].link}
                width={"100%"}
                height={"100%"}
                className="cursor-pointer object-contain"
              />
            </div>
            <div className="mb-3 md:mb-0 flex justify-center">
              <img
                src={Images[2].link}
                width={"100%"}
                height={"100%"}
                className="cursor-pointer object-contain"
              />
            </div>
            <div className="mb-3 md:mb-0 flex justify-center">
              <img
                src={Images[3].link}
                width={"100%"}
                height={"100%"}
                className="cursor-pointer object-contain"
              />
            </div>
            <div className="mb-3 md:mb-0 flex justify-center">
              <img
                src={Images[4].link}
                width={"100%"}
                height={"100%"}
                className="cursor-pointer object-contain"
              />
            </div>
            <div className="mb-3 md:mb-0 flex justify-center">
              <img
                src={Images[5].link}
                width={"100%"}
                height={"100%"}
                className="cursor-pointer object-contain"
              />
            </div>
            <div className="mb-3 md:mb-0 flex justify-center">
              <img
                src={Images[6].link}
                width={"100%"}
                height={"100%"}
                className="cursor-pointer object-contain"
              />
            </div>
            <div className="mb-3 md:mb-0 flex justify-center">
              <img
                src={Images[7].link}
                width={"100%"}
                height={"100%"}
                className="cursor-pointer object-contain"
              />
            </div>
            <div className="mb-3 md:mb-0 flex justify-center">
              <img
                src={Images[8].link}
                width={"100%"}
                height={"100%"}
                className="cursor-pointer object-contain"
              />
            </div>
            <div className="mb-3 md:mb-0 flex justify-center">
              <img
                src={Images[9].link}
                width={"100%"}
                height={"100%"}
                className="cursor-pointer object-contain"
              />
            </div>
            <div className="mb-3 md:mb-0 flex justify-center">
              <img
                src={Images[10].link}
                width={"100%"}
                height={"100%"}
                className="cursor-pointer object-contain"
              />
            </div>
            <div className="mb-3 md:mb-0 flex justify-center">
              <img
                src={Images[11].link}
                width={"100%"}
                height={"100%"}
                className="cursor-pointer object-contain"
              />
            </div>
            <div className="mb-3 md:mb-0 flex justify-center">
              <img
                src={Images[12].link}
                width={"100%"}
                height={"100%"}
                className="cursor-pointer object-contain"
              />
            </div>
            <div className="mb-3 md:mb-0 flex justify-center">
              <img
                src={Images[13].link}
                width={"100%"}
                height={"100%"}
                className="cursor-pointer object-contain"
              />
            </div>
          </Carousel>
      </div>
    </div>
  );
};
