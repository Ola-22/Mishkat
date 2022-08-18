import React from 'react'
import Accordion from '../Accordion'
import * as S from "./style"

function Questions() {
  return (
    <S.QuestionsContainer>
        <div className='accordion-wrapper'>
                    <h2>frequentyle <span>asked questions</span></h2>
        <Accordion  />
        </div>

    </S.QuestionsContainer>
  )
}

export default Questions