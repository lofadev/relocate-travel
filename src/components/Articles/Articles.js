import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

//swiper
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { articles } from "../../data.js";
import CardArticles from "../CardArticles/CardArticles";

const Articles = () => {
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
    <div className="articles">
      <h2 className="articles-heading">ARTICLES ABOUT PARATY</h2>

      <div className="articles-menu">
        {!isUnderTablet ? (
          <div>
            {articles.map((item) => (
              <a
                className="articles-link"
                href={`https://${item.link}`}
                target="_blank"
                rel="noreferrer"
                key={item.id}
              >
                <CardArticles item={item}></CardArticles>
              </a>
            ))}
          </div>
        ) : (
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            pagination={true}
            modules={[Pagination]}
          >
            {articles.map((item) => (
              <SwiperSlide key={item.id}>
                <a
                  className="articles-link"
                  href={`https://${item.link}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardArticles item={item}></CardArticles>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Articles;
