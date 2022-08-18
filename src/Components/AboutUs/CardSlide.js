import React from 'react'
import * as S from "./style"

function CardSlide() {
  return (
    <S.CardContainer>
        <img src='./assets/images/About.png' alt='about us' />
        <div className='card-body'>
            <div className='back-number'>
                <h2>1</h2> 
            </div>
  
            <h3>we <span>engage</span></h3>
            <p>In teaching, we engage students to
participate, rather than sitting and watching. </p>
        </div>
    </S.CardContainer>
  )
}

export default CardSlide