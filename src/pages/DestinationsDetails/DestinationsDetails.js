import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import DestinationsContent from "../../components/DestinationsContent/DestinationsContent";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Reinforcement from "../../components/Reinforcement/Reinforcement";
import SectionHero from "../../components/SectionHero/SectionHero";

const DestinationsDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      <Header></Header>
      <SectionHero id={id}></SectionHero>
      <DestinationsContent></DestinationsContent>
      <Reinforcement></Reinforcement>
      <Footer></Footer>
    </div>
  );
};

export default DestinationsDetails;
