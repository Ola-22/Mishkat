import React from 'react'
import * as S from "./style";

function Banner() {
  return (
    <S.BannerContainer>
        <div className='main'>
                   <S.BannerContent>
            <h2>study from home with experts</h2>
            <p>
            Our experience, knowledge and creative thinking helps us to provide the freedom to explore and be creative.
            </p>
            <S.PlayContainer>
                <button>lets start</button>
                <div>
                    <div className='img-container'>
                    <img src='./assets/images/play.png' alt='play video' />
  
                    </div>
                    <h6>See How it works</h6>
                </div>
            </S.PlayContainer>
        </S.BannerContent>
        <S.RightBanner>
            <img className='boy-image' src='./assets/images/boy.png' alt='boy img' />
            <img className='background-boy' src='./assets/images/background-banner.png' alt='boy img' />
        </S.RightBanner> 
        </div>

    </S.BannerContainer>
  )
}

export default Banner