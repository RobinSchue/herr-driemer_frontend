import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  --webkit-transform: translateZ(0);
`;

export const StyledImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
