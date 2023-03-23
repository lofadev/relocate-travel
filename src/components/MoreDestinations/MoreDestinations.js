import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { destinations } from "../../../src/data.js";
import CardListDestinations from "../CardListDestination/CardListDestination";
import CardItem from "../CardItem/CardItem";
import { Link } from "react-router-dom";

const MoreDestinations = () => {
  const [isUnderTablet, setIsUnderTablet] = useState(window.innerWidth < 1024);

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (this.innerWidth < 1024) {
        setIsUnderTablet(true);
      } else {
        setIsUnderTablet(false);
      }
    });
  }, []);

  return (
    <div className="more__destinations">
      <div className="container">
        <h2 className="more__destinations-title">
          <span className="heading--secondary-font">more</span>
          <span className="heading--primary-font black">destinations</span>
        </h2>
        <div className="round-dot"></div>
        <p className="destinations-text black">
          Your peace of mind doesn't have to be tied to where everyone else is. We have a good
          number of travel and relocation destinations. Take your time and find the perfect one for
          you.
        </p>

        <div className="more__destinations-list">
          {!isUnderTablet ? (
            <CardListDestinations inPc={isUnderTablet}>
              {destinations.map(
                (item, index) =>
                  index >= 4 &&
                  index < 8 && (
                    <div className="card-items__wrap" key={item.id}>
                      <Link to={`destinations/details/${item.id}`}>
                        <CardItem item={item} />
                      </Link>
                    </div>
                  )
              )}
            </CardListDestinations>
          ) : (
            <CardListDestinations inPc={isUnderTablet}>
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
                    index >= 4 &&
                    index < 8 && (
                      <SwiperSlide key={item.id}>
                        <Link to={`destinations/details/${item.id}`}>
                          <CardItem item={item} />
                        </Link>
                      </SwiperSlide>
                    )
                )}
              </Swiper>
            </CardListDestinations>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreDestinations;
