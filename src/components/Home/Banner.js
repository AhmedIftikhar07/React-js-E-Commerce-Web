import React   from 'react'
import Slider from "react-slick";
import { bannerImgOne, bannerImgTwo, bannerImgThree, bannerImgFour, bannerImgFive } from '../../assests';
import { KeyboardArrowLeft, KeyboardArrowRightOutlined } from '@mui/icons-material';

const Banner = () => {
  const LeftArrow = ({ onClick }) => (
    <button
      className="custom-arrow left-0 top-1/2 transform -translate-y-1/2 absolute z-10 bg-white text-gray-700 hover:text-gray-900 md:p-2 p-0 rounded-full shadow-md opacity-50 hover:opacity-100 duration-300"
      onClick={onClick}
    >
      <span><KeyboardArrowLeft/></span>
    </button>
  );

  // Custom arrow component for the right arrow
  const RightArrow = ({ onClick }) => (
    <button
      className="custom-arrow right-0 top-1/2 transform -translate-y-1/2 absolute z-10 bg-white text-gray-700 hover:text-gray-900 md:p-2 p-0 rounded-full shadow-md opacity-50 hover:opacity-100 duration-300"
      onClick={onClick}
    >
      <span><KeyboardArrowRightOutlined/></span>
    </button>
  );
  const settings = {
    infinite: true,
    autoplay: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  // Custom arrow component for the left arrow

  return (
    <div className='w-full '>
      <div className='w-ful h-full relative'>
        <Slider {...settings}>
          <div>
            <img  src={bannerImgOne} alt="banner img" />
          </div>
          <div>
            <img  src={bannerImgTwo} alt="banner image2" />
          </div>
          <div>
            <img  src={bannerImgThree} alt="banner image3" />
          </div>
          <div>
            <img  src={bannerImgFour} alt="banner image4" />
          </div>
          <div>
            <img  src={bannerImgFive} alt="banner image5" />
          </div>

        </Slider>
      </div>
    </div>
  )
}

export default Banner
