import React from 'react'
import './PostProduct.css'

export default function ImgSmalls({stateimg,setImgGrande,imgGrande}) {
  return (
    stateimg.map((e, index) => {
        return (
          <div
            onClick={() => setImgGrande(e)}
            className={
              imgGrande === e
                ? "aspect-ratio-1-1-sub-selected"
                : "aspect-ratio-1-1-sub"
            }
          >
            <img
              src={e}
              alt={index}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              key={index + e}
            ></img>
          </div>
        );
      })
  )
}
