import React from "react";
import "./PostProduct.css";
export default function ImgLarge({ imgGrande }) {
  
  return (
    <div className="aspect-ratio-1-1">
      <img
        src={imgGrande}
        alt={imgGrande}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
  );
}
