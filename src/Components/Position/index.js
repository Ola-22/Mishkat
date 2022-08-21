import React from 'react'
import * as S from "./style"
import Slider from "react-slick";
import CardPosition from './CardPosition';

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <S.NextArrow
        className={className}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <S.PrevArrow
        className={className}
        onClick={onClick}
      />
    );
  }


function Position() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };
  return (
    <S.PositionContainer id='position'>
        <div className='title-container'>
            <h2 className='title'>
                our <span>value</span> Position
            </h2>
            <p>This very extremely feature, can make learning activities more efficient</p>
        </div>
        <div style={{width: "85%"}}>
                 <Slider {...settings}>
          <CardPosition content="STEM/STEAM education" src='./assets/images/position1.png' />
          <CardPosition content="STEM/STEAM education" src='./assets/images/position2.png' />
          <CardPosition content="STEM/STEAM education" src='./assets/images/position3.png' />
          <CardPosition content="STEM/STEAM education" src='./assets/images/position1.png' />
          <CardPosition content="STEM/STEAM education" src='./assets/images/position1.png' />
         
        </Slider>     
        </div>

    </S.PositionContainer>
  )
}

export default Position