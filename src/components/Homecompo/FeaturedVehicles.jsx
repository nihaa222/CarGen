import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import StarIcon from "@mui/icons-material/Star";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const obj = [
  {
    img: 1,
    car: "/carmain.png",
  },
  {
    img: 2,
    car: "/carmain.png",
  },
  {
    img: 3,
    car: "/carmain.png",
  },
  {
    img: 4,
    car: "/carmain.png",
  },
  {
    img: 5,
    car: "/carmain.png",
  },
];

const FeaturedVehicles = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="   ">
      <p className="mx-10 md:mx-16 whitespace-nowrap font-bold text-[20px] mt-16">
        Featured Vehicles in Noida <KeyboardArrowRightIcon />{" "}
      </p>
      <div className="max-w-[1920px] mx-[30px]  mt-[50px]  ">
        <Slider {...settings}>
          {obj.map((item) => (
            <>
              <div key={item.img}>
                <div className="border pt-10 px-3 relative">
                  <img
                    className="w-full h-full object-contain"
                    src={item.car}
                    alt={`Car ${item.img}`}
                  />
                  <div className="bg-blue-600 h-8 w-32 absolute rounded-xl top-0 text-white px-3 flex items-center gap-3">
                    <StarIcon style={{ color: "white" }} />
                    Featured
                  </div>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedVehicles;
