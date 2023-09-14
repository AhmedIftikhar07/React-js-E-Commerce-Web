import React, { useState } from 'react'
import Slider from "react-slick";
import { bannerImgOne, bannerImgTwo, bannerImgThree, bannerImgFour, bannerImgFive } from '../../assests';
    
const Banner = () => {
    const [dotActive, setDotActive] = useState()
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prev,next)=>{
            setDotActive(next)
        },
        appendDots: dots => (
            <div
              style={{
               position: "absolute",
               top: "70%",
               left: "45%",
                transform: "translate(-50% -50%)",
                width: "210px"
              }}
            >
              <ul style={{ 
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
               }}>
                {" "}
                 {dots}
                 {" "} 
                 </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={
                i === dotActive
                ?
                {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#131921",
                padding: "8px 0",
                cursor: "pointer",
                border: "1px #f3a847 solid"
              } 
              :
              {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#232F3E",
                padding: "8px 0",
                cursor: "pointer",
                border: "1px solid white"
              }
            }
            >
              {i + 1}
            </div>
          )
      };
  return (
    <div className='w-full '>
        <div className='w-ful h-full relative'>
        <Slider {...settings}>
          <div>
            <img src={bannerImgOne} alt="banner img" />
          </div>
          <div>
            <img src={bannerImgTwo} alt="banner image2" />
          </div>
          <div>
            <img src={bannerImgThree} alt="banner image3" />
          </div>
          <div>
            <img src={bannerImgFour} alt="banner image4" />
          </div>
          <div>
            <img src={bannerImgFive} alt="banner image5" />
          </div>
      
        </Slider>
        </div>
      </div>
  )
}

export default Banner
