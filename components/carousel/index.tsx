import Image from "next/image";
import React, { useState } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import slides from "@/assets/vehicles.json";

interface IBrand {
  brand: string;
}

const Carousel = ({ brand }: IBrand) => {
  const data = brand.includes("BMW") ? slides["bmw"] : slides["mercedes"];
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <RxChevronLeft
        data-testid="arrowLeft"
        onClick={prevSlide}
        className="arrow arrowLeft"
      />
      {data?.map((item, index) => {
        return (
          <Image
            data-testid={"imageCarousel" + index}
            src={item.src}
            width={300}
            height={200}
            key={index}
            id="imageCarousel"
            className={slide === index ? "slide" : "slide slideHidden"}
          />
        );
      })}
      <RxChevronRight
        data-testid="arrowRight"
        onClick={nextSlide}
        className="arrow arrowRight"
      />
      <span className="indicators">
        {data?.map((_, index) => {
          return (
            <button
              key={index}
              className={
                slide === index ? "indicator" : "indicator indicatorInactive"
              }
              onClick={() => setSlide(index)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
