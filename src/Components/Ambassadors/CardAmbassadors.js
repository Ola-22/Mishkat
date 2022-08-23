import React from 'react'
import * as S from "./style"

function CardAmbassadors({name, job, content, src}) {
  return (
    <S.Card>
        <div className='img-container'>
        <img src={src} alt='ambassadors' />  
        </div>

        <h2>{name}</h2>
        <h6>{job}</h6>
        <p>{content}</p>
    </S.Card>
  )
}

export default CardAmbassadors