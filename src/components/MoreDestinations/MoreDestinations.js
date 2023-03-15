import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import CardListDestinations from "../CardListDestination/CardListDestination";
import Img5 from "../../assets/imgs/card_img5.png";
import Img6 from "../../assets/imgs/card_img6.png";
import Img7 from "../../assets/imgs/card_img7.png";
import Img8 from "../../assets/imgs/card_img8.png";
import CardDestinations from "../CardDestination/CardDestinations";

const moreDestinations = [
  {
    id: 1,
    city: "Estaing",
    country: "France",
    image: Img5,
  },
  {
    id: 2,
    city: "Vík í Mýrda",
    country: "Iceland",
    image: Img6,
  },
  {
    id: 3,
    city: "Hamnoy village",
    country: "Norway",
    image: Img7,
  },
  {
    id: 4,
    city: "Montego Bay",
    country: "Jamaica",
    image: Img8,
  },
];

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
              {moreDestinations.map((item) => (
                <CardDestinations
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  country={item.country}
                  city={item.city}
                />
              ))}
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
                {moreDestinations.map((item) => (
                  <SwiperSlide key={item.id}>
                    <CardDestinations image={item.image} country={item.country} city={item.city} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </CardListDestinations>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreDestinations;
