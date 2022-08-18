import React from 'react'
import * as S from "./style"

function CardAmbassadors({name, job, content, src, srcBack}) {
  return (
    <S.Card>
        <div className='img-container'>
        {/* <img className='background' src={srcBack} alt='ambassadors' /> */}
        <img src={src} alt='ambassadors' />  
        </div>

        <h2>{name}</h2>
        <h6>{job}</h6>
        <p>{content}</p>
    </S.Card>
  )
}

export default CardAmbassadors