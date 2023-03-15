import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import CardListDestinations from "../CardListDestination/CardListDestination";
import CardDestinations from "../CardDestination/CardDestinations";
import Img1 from "../../assets/imgs/card_img1.png";
import Img2 from "../../assets/imgs/card_img2.png";
import Img3 from "../../assets/imgs/card_img3.png";
import Img4 from "../../assets/imgs/card_img4.png";

const topDestinations = [
  {
    id: 1,
    city: "Paraty",
    country: "Rio de Janeiro",
    image: Img1,
  },
  {
    id: 2,
    city: "Morretes",
    country: "Paraná",
    image: Img2,
  },
  {
    id: 3,
    city: "Olinda",
    country: "Pernambuco",
    image: Img3,
  },
  {
    id: 4,
    city: "Gramado",
    country: "Rio Grande do Sul",
    image: Img4,
  },
];
const TopDestinations = () => {
  return (
    <div className="top__destinations">
      <div className="container">
        <h2 className="top__destinations-title">
          <span className="heading--secondary-font">top</span>
          <span className="heading--primary-font">destinations</span>
        </h2>
        <div className="round-dot"></div>
        <p className="destinations-text">
          It's hard enough deciding to move, you don't have to worry about where to move to. These
          are some of the most popular and best locations to move to based on a number of factors.
        </p>

        <CardListDestinations>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={true}
            modules={[Pagination]}
          >
            {topDestinations.map((item) => (
              <SwiperSlide key={item.id}>
                <CardDestinations image={item.image} country={item.country} city={item.city} />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardListDestinations>
      </div>
    </div>
  );
};

export default TopDestinations;
