import React from 'react'
import './PostProduct.css'

export default function ImgSmalls({stateimg,setImgGrande,imgGrande}) {
  console.log({stateimg})
  return (<>
    {stateimg?.map((e, index) => {
        return (
          <div
          key={index+'imgsmall'}
            onClick={() => setImgGrande(e)}
            className={
              imgGrande === e
                ? "aspect-ratio-1-1-sub-selected"
                : "aspect-ratio-1-1-sub"
            }
          >
            <img
              src={e.slice(0,50)+"q_55/"+e.slice(50,-4)+".avif"}
              alt={index}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              key={index + e}
            ></img>
          </div>
        );
      })}
  </>)
}
