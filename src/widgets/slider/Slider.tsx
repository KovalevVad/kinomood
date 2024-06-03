import "./slider.css";

import video1 from "../../assets/video/moscow.mp4";
import video2 from "../../assets/video/bogat.mp4";
import video3 from "../../assets/video/floy.mp4";
import poster1 from "../../assets/video/maxresdefault.jpg";

import { Carousel } from "./Carousel/Carousel";

export const Slider = () => {
  return (
    <Carousel>
      <div className="item item-1">
        <video controls src={video1} preload='metadata'></video>
      </div>
      <div className="item item-2">
        <video controls poster={poster1} preload='metadata' src={video2}></video>
      </div>
      <div className="item item-3">
        <video controls preload='metadata' src={video3}></video>
      </div>
      <div className="item item-4">
        item4
      </div>
      <div className="item item-5">
        item5
      </div>
    </Carousel>
  );
};
