import * as S from "./style"

function Card({alt, src, title, count, backgroundColor}) {
  return (
    <S.CardMain style={{backgroundColor: backgroundColor}}>
        <img src={src} alt={alt} />
        <h6>{title}</h6>
        <p>{count}</p>
    </S.CardMain>
  )
}

export default Card