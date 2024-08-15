import React from 'react';
import BannerImage from "../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="blog-banner">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
         <div className="content">
         <div>
         <h1>Blog</h1>
          <p>
            Go through our nifty insights on the advancements happening
            around in the world of technology that you may use for product
            enhancement.
          </p>
          </div>
         </div>
        </div>
        <div className="col-md-6">
          <img src={BannerImage} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;
