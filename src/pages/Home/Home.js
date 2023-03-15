import React from "react";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import TopDestinations from "../../components/TopDestinations/TopDestinations";
import MoreDestinations from "../../components/MoreDestinations/MoreDestinations";
import Footer from "../../components/Footer/Footer";
import "../../index.scss";

const Home = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <Hero></Hero>
      <TopDestinations></TopDestinations>
      <MoreDestinations></MoreDestinations>
      <Footer></Footer>
    </div>
  );
};

export default Home;
