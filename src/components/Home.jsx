import React from "react";
import Navbar from "./Navbar";
import VehicleList from "../pages/VehicleList";
import { Button } from "@nextui-org/react";
import FeaturedVehicles from "./Homecompo/FeaturedVehicles";
import HotCar from "./Homecompo/HotCar";
import Hero from "./Homecompo/Hero";
import Buy from "./Homecompo/Buy";

const Home = () => {
  return (
    <>
      {/* <VehicleList /> */}
      <Hero />
      <FeaturedVehicles />
      <Buy />
      <HotCar />
    </>
  );
};

export default Home;
