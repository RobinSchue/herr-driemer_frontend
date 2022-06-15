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
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
