import React from "react";

import { articles } from "../../data.js";
import CardArticles from "../CardArticles/CardArticles";

const Articles = () => {
  return (
    <div className="articles">
      <h2 className="articles-heading">ARTICLES ABOUT PARATY</h2>

      <div className="articles-menu">
        {articles.map((item) => (
          <CardArticles key={item.id} item={item}></CardArticles>
        ))}
      </div>
    </div>
  );
};

export default Articles;
