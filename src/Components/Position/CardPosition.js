import React from 'react'
import * as S from "./style"

function CardPosition({content, src}) {
  return (
    <S.CardContainer>
      <div>
           <img src={src} alt='position' />
        <p>{content}</p>
      </div>
     
    </S.CardContainer>
  )
}

export default CardPosition