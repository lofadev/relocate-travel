import React from "react";

import { photos } from "../../data";
import ImageIcon from "../../assets/imgs/image_icon.svg";

const Photos = () => {
  return (
    <div className="photos">
      {photos.map((item, index) => (
        <div key={item.id} className="photos-items">
          <img src={item.image} alt={`img-${item.id}`} />
          {index === photos.length - 1 && (
            <div className="btn__all-photos">
              <img src={ImageIcon} alt="" />
              <span>See all photos</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Photos;
