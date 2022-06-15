import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiperContainer = styled(Swiper)`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 30%;
  bottom: 30%;

  @media (min-width: 600px) {
    left: 10%;
    right: 10%;
    top: 10%;
    bottom: 10%;
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;
