import React, { useEffect, useState } from "react";
import { useFecthGifs } from "../hooks/useFecthGIfs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFecthGifs(category);

  console.log(loading);

  return (
    <>
      <h3>{category} </h3>
      {loading && <p className="animate__animated animate__flash"> Loading </p>}

      <div className="card-grid animate__animated animate__fadeIn">
        <ol>
          {images.map((img) => {
            return <GifGridItem key={img.id} {...img} />;
          })}
        </ol>
      </div>
    </>
  );
};
