import { useEffect } from "react";
import { useSliderQuery } from "./api";
import { Carousel } from "./Carousel/Carousel";

import "./slider.css";

export const Slider = () => {
  const { data, isSuccess } = useSliderQuery();

  useEffect(() => {
    console.log('render', data)
  }, [])

  return (
    <Carousel>
      { data?.data.docs.map((item) => {
        return (
          <div key={item.id} className="image">

            <img src={item.backdrop.url} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
};
