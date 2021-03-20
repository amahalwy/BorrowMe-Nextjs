import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyImage: React.FC<{ src: string }> = ({ src }) => (
  <div>
    <LazyLoadImage src={src} effect="blur" />
  </div>
);

export default MyImage;
