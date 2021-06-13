import React from "react";
import { RViewer, RViewerTrigger } from "react-viewerjs";

const Collage = () => {
  let images = [
    "../assets/img/orange.jpg",
    "../assets/img/lemon.jpg",
    "../assets/img/honey.jpg",
    "../assets/img/turmeric.jpg",
    "../assets/img/ginger.jpg",
  ];

  return (
    <RViewer imageUrls={images}>
      <RViewerTrigger>
        <button>¡Checa esto!</button>
      </RViewerTrigger>
    </RViewer>
  );
};

export default Collage;
