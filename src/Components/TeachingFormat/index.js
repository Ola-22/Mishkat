import React from 'react'
import * as S from "./style"

function TeachingFormat() {
  return (
    <S.TeachingContainer>
        <h2>teaching <span>format</span></h2>
     
        <S.Box>
        
            <div className='one'>
                <ul>
                    <li>Classes on school campus.</li>
                    <li>In-person interaction with the teacher and fellow classmates.</li>
                    <li>Up to 23 kids per group.</li>
                </ul>
            </div>
            <S.OfflineTeaching>
            <h4>offline</h4>
                <div className='two'>
                    <S.OfflineImg alt="offline program" src="./assets/images/offline-program.png" />
                    <ul>
                        <li><span>Length: 45 lessons.</span></li>
                        <li><span>Studying takes place on weekdays after school or on the weekends.</span></li>
                        <li>A class last 2 hours with a break in the middle.</li>
                    </ul>
                </div>
            </S.OfflineTeaching>
        </S.Box>
    </S.TeachingContainer>
  )
}

export default TeachingFormat