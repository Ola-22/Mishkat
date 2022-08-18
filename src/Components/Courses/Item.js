import React from 'react'
import * as S from "./style"

function Item({menuItem}) {
  return (
    <S.ItemContainer>
{menuItem?.map((menu, index) => (
    <div className='data' key={index}>
       <img src={menu.img} alt="courses" />
       <div className='container'>
           <h3>{menu.title}</h3>
           <span>{menu.price}</span>
        </div>
        <h6>{menu.CountLesson} - {menu.date}</h6>
        <button>join now !</button>
    </div>
))}
    </S.ItemContainer>
  )
}

export default Item