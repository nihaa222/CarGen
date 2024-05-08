import React from "react";

const Buy = () => {
  return (
    <div>
      <div className="font-bold text-[20px] whitespace-nowrap mx-10 mt-16">
        <p>How to Buy</p>
      </div>
      <div className="max-w-[1400px] mx-[10px] mt-8">
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-web gap-10 mx-10 items-center">
            <div>
              <img
                className="md:h-44 md:w-44 h-full w-full"
                src="/Screenshot 2024-05-05 at 5.23 1.png"
                alt="Step 1"
              ></img>
            </div>
            <div>
              <p className="font-semibold">1 Choose the car you want</p>
              <p className="text-gray-500 whitespace-wrap">
                Browse through our certified collection of vehicles to find one
                which suits you the best
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-web gap-10 mx-10 items-center">
            <div className="justify-self-start">
              <img
                className="md:h-44 md:w-44 h-full w-full"
                src="/Screenshot 2024-05-05 at 5.23 1 (1).png"
                alt="Step 2"
              ></img>
            </div>
            <div className="justify-self-center md:justify-self-start">
              <p className="font-semibold">2 Schedule a test drive</p>
              <p className="text-gray-500 whitespace-wrap">
                Schedule a test drive and enjoy the convenience of a test drive
                at your doorstep
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-web gap-10 items-center">
            <div className="justify-self-start mx-10">
              <img
                className="md:h-48 md:w-48 h-full w-full object-fit "
                src="/image3.png"
                alt="Step 3"
              ></img>
            </div>
            <div className="justify-items-center">
              <p className="font-semibold">3 Place your bid</p>
              <p className="text-gray-500 whitespace-wrap">
                Place your bid on the vehicle of your choice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
