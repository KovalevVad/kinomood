import { useEffect, useState, Children, cloneElement } from "react";

import { arrowLeft, arrowRight } from "../../../assets/images";

import "./carousel.css";

const PAGE_WIDTH = 1095;

export const Carousel = ({ children }) => {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState([]);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = +currentOffset + PAGE_WIDTH + 75;

      const minOffset = (PAGE_WIDTH + 75) * (items.length - 3);

      return Math.min(newOffset, minOffset);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = +currentOffset - PAGE_WIDTH - 75;

      const maxOffset = -((PAGE_WIDTH + 75) * (items.length - 3));

      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setItems(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            minWidth: `${PAGE_WIDTH}PX`,
            maxWidth: `${PAGE_WIDTH}PX`,
          },
        });
      })
    );
  }, []);

  return (
    <div className="main-container">
      <img
        src={arrowLeft}
        className="arrow arrowLeft"
        onClick={handleLeftArrowClick}
      />
      <div className="window">
        <div
          className="all-items-container"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {items}
        </div>
      </div>
      <img
        src={arrowRight}
        className="arrow arrowRight"
        onClick={handleRightArrowClick}
      />
    </div>
  );
};
