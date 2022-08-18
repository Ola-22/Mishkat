import React from 'react'
import * as S from "./style"

function CardPosition({content, src}) {
  return (
    <S.CardContainer>
        <img src={src} alt='position' />
        <p>{content}</p>
    </S.CardContainer>
  )
}

export default CardPosition