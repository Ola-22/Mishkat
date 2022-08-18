import React from 'react'
import SocialMedia from '../SocialMedia'
import * as S from "./style"

function Footer() {
  return (
    <S.FooterContainer>
        <S.inputContainer>
            <input placeholder='e-Mail' />
            <button>subscribe</button>
        </S.inputContainer>
        <img src='./assets/images/logo.png' alt='logo mishkat' />
        <SocialMedia />
        <S.MenuFooter>
            <li>courses</li>
            <li>privacy policy</li>
            <li>FAQ</li>
            <li>contact us</li>
        </S.MenuFooter>
        <h6>© 2022 NewSolutions All Rights Reserved</h6>
    </S.FooterContainer>
  )
}

export default Footer