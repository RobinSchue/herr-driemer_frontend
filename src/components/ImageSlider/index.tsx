/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SwiperSlide } from "swiper/react";

import { StyledImage, StyledSwiperContainer } from "./swiper.styled";
import { Keyboard, Lazy, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface ImageSliderProps {
  images: string[];
}

export const ImageSlider = ({ images }: ImageSliderProps): JSX.Element => {
  return (
    <StyledSwiperContainer
      modules={[Navigation, Keyboard, Lazy]}
      keyboard={{
        enabled: true,
      }}
      navigation={true}
      spaceBetween={64}
      slidesPerView={1}
      speed={900}
      loop={false}
      touchRatio={1.5}
      effect={"flip"}
      lazy={true}
      maxBackfaceHiddenSlides={10}
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <StyledImage
            src={`${image}?w=248&fit=crop&auto=format`}
            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt="project"
            loading="lazy"
            placeholder="empty"
          />
        </SwiperSlide>
      ))}
    </StyledSwiperContainer>
  );
};
