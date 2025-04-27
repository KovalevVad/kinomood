import { useEffect } from 'react';
import { useSliderQuery } from './api';
import { Carousel } from './Carousel/Carousel';

import './slider.css';

export const Slider = () => {
  const { data, isSuccess } = useSliderQuery();

  useEffect(() => {
    console.log('render', data);
  }, [data]);

  return (
    <div>
      {isSuccess && (
        <Carousel>
          {data?.data?.docs.map((item) => (
            <div key={item.id} className="image">
              <img src={item.backdrop.url} alt="" />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};
