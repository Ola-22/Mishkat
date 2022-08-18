import React from 'react'
import Slider from "react-slick";
import CardSlide from './CardSlide';
import * as S from "./style";

function AboutUs() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
          <div
            style={{
            //   backgroundColor: "#ddd",
              borderRadius: "10px",
              padding: "10px",
              marginTop: "60px",
              position: "relative"
            }}
          >
            <S.UlPaginate> {dots} </S.UlPaginate>
          </div>
        ),
        customPaging: i => (
          <S.paginateDot
          >
          </S.paginateDot>
        )
      };
    
  return (
    <S.AboutContainer id='about-us'>
        <div className='about-title'>
            <h2 className='title'>about <span>us</span> </h2>
            <p>mishkat knows how..</p>
        </div>
        <img className='background-about' src='./assets/images/background-about.png' alt='' />
<div>
          <Slider {...settings}>
          <CardSlide />
          <CardSlide />
          <CardSlide />
          <CardSlide />
         
        </Slider>  
</div>

    </S.AboutContainer>
  )
}

export default AboutUs