import React from "react";
import { useLocation } from "react-router-dom";
import ChooseUs from "../components/sections/choose us/ChooseUs";
import Footer from "../components/sections/footer/Footer";
import Hero from "../components/sections/hero/Hero";
import Join from "../components/sections/join/Join";
import Market from "../components/sections/market/Market";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <Market />
      <ChooseUs />
      <Join />
      <Footer />
    </>
  );
};

export default Home;
