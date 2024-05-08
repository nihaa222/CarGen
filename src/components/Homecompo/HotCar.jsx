import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "@nextui-org/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Card = {
  car: "/carmain.png",
  text: "7 days remaining",
  modalname: "Modal name",
  fuel: "Petrol",
  type: "Automatic",
  currentbid: "24L",
  startingbid: "20L",
  button1: "Book test drive",
  button2: "View details",
  carno: "UP-16",
};

const text = [
  {
    img: 1,
    photo: "/image 4.png",
    textmain: "Test drive available",
    textmainnot:
      "Schedule a test drive and our team would come to your doorstep to give you the complete experience of the car.",
  },
  {
    img: 2,
    photo: "/image 5.png",
    textmain: "Quality checks",
    textmainnot:
      "Every car is inspected thoroughly by our experts before it’s put up for an auction",
  },
  {
    img: 3,
    photo: "/image 6.png",
    textmain: "Trusted sellers",
    textmainnot:
      "We run a background check on all our sellers and dealers to get you your vehicles from only the best.",
  },
  {
    img: 1,
    photo: "/image 7.png",
    textmain: "Seamless paperwork",
    textmainnot:
      "We provide a seamless paperwork experience while taking care of every formality.",
  },
];

const arr = Array.from({ length: 5 }, () => ({ ...Card }));

const HotCar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <p className="font-semibold mx-10 md:mx-16 mt-16 mb-10">
        Hot auctions in Noida
      </p>
      <div className="flex  max-w-[1440x] flex-wrap gap-y-10  mx-auto">
        {arr.map((item, index) => (
          <div
            className="relative h-[400px] w-[300px] flex mx-10 flex-col justify-center border-2 rounded-xl "
            key={index}
          >
            <img className="mt-10" src={item.car} alt="Car" />
            <p className="absolute right-2 top-3 bg-gray-500   text-white h-8 w-36 pt-1 pl-2 rounded-xl ">
              {item.text}
            </p>
            <div className="flex justify-between mt-5">
              <div className="">
                <p className="ml-3">{item.modalname}</p>
                <div className="flex gap-2 mx-3 ">
                  <p className="ml-">{item.fuel}</p>
                  <p className="">{item.type}</p>
                  <p className="">{item.carno}</p>
                </div>
              </div>
              <div className="mx-2 flex gap-2">
                <FavoriteBorderIcon onClick={() => setClicked(true)} />
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <div className="flex flex-col ">
                <p className="ml-3">{item.currentbid}</p>
                <p className="ml-3">Current bid</p>
              </div>
              <div className="flex flex-col justify-end mr-2">
                <p className="ml-3">{item.startingbid}</p>
                <p className="mr-2 ml-2">Current bid</p>
              </div>
            </div>

            <div className="mt-5 flex gap-12 ">
              <Button
                color="primary"
                variant="bordered"
                size="sm"
                className="ml-3 "
              >
                {item.button1}
              </Button>
              <Button size="sm" color="primary" className="ml-3 ">
                {item.button2}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="font-semibold mx-10 md:mx-32 mt-32 mb-10">
          Why people choose us?
        </p>
      </div>
      <div className="flex max-w-[1600px] flex-wrap gap-y-10 gap-20 mx-auto">
        {text.map((item) => (
          <div
            key={item.img}
            className="px-3 h-[400px] w-[300px] flex flex-col gap-3 py-4"
          >
            <img src={item.photo} alt="Photo" />
            <p>{item.textmain}</p>
            <p>{item.textmainnot}</p> {/* Fix the closing tag here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotCar;
