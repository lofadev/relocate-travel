import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

//swiper
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { destinations } from "../../../src/data.js";
import CardListDestinations from "../CardListDestination/CardListDestination";
import CardItem from "../CardItem/CardItem";

const TopDestinations = ({ getRef }) => {
  const topDestinationsRef = useRef();
  useEffect(() => {
    getRef(topDestinationsRef.current);
  }, [getRef]);
  return (
    <div className="top__destinations" ref={topDestinationsRef}>
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
            {destinations.map(
              (item, index) =>
                index < 4 && (
                  <SwiperSlide key={item.id}>
                    <Link to={`/destinations/details/${item.id}`}>
                      <CardItem item={item} />
                    </Link>
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </CardListDestinations>
      </div>
    </div>
  );
};

export default TopDestinations;
