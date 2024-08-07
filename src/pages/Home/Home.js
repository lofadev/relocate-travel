import { useEffect, useState } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import MoreDestinations from "../../components/MoreDestinations/MoreDestinations";
import TopDestinations from "../../components/TopDestinations/TopDestinations";
import "../../index.scss";

const Home = () => {
  const [topDestinationRef, setTopDestinationRef] = useState(null);
  const handleGetRefTopDestinations = (ref) => {
    setTopDestinationRef(ref);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    handleGetRefTopDestinations();
  }, []);

  return (
    <div id="wrapper">
      <Header></Header>
      <Hero data={topDestinationRef}></Hero>
      <TopDestinations getRef={handleGetRefTopDestinations}></TopDestinations>
      <MoreDestinations></MoreDestinations>
      <Footer></Footer>
    </div>
  );
};

export default Home;
