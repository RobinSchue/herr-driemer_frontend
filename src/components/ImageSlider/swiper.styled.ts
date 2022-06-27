import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiperContainer = styled(Swiper)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  @media (min-width: 600px) {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;
