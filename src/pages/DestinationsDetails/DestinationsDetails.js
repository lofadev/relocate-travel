import React, { useEffect } from "react";

import Header from "../../components/Header/Header";
import SectionHero from "../../components/SectionHero/SectionHero";
import DestinationsContent from "../../components/DestinationsContent/DestinationsContent";
import Reinforcement from "../../components/Reinforcement/Reinforcement";
import Footer from "../../components/Footer/Footer";

const DestinationsDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      <Header></Header>
      <SectionHero></SectionHero>
      <DestinationsContent></DestinationsContent>
      <Reinforcement></Reinforcement>
      <Footer></Footer>
    </div>
  );
};

export default DestinationsDetails;
