import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import SectionHero from "../../components/SectionHero/SectionHero";
const DestinationsDetails = () => {
  // const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="wrapper">
      <Header></Header>
      <SectionHero></SectionHero>
    </div>
  );
};

export default DestinationsDetails;
