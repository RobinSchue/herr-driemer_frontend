/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SwiperSlide } from "swiper/react";

import { StyledImage, StyledSwiperContainer } from "./swiper.styled";
import { Keyboard, Lazy, Navigation, Pagination } from "swiper";

import "swiper/css";

export interface ImageSliderProps {
  images: string[];
}

export const ImageSlider = ({ images }: ImageSliderProps): JSX.Element => {
  return (
    <StyledSwiperContainer
      modules={[Navigation, Pagination, Keyboard, Lazy]}
      navigation={true}
      spaceBetween={64}
      slidesPerView={1}
      speed={100}
      loop={false}
      touchRatio={1.5}
      effect={"flip"}
      pagination={{ clickable: true }}
      lazy={true}
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
