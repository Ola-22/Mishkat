import styled from "styled-components"

export const QuestionsContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background: #F9FBFC;
padding-top: 88px;
margin-top: 77px;
padding-bottom: 92px;
& h2{
    font-size: 50px;
    color: #694BED;
    text-transform: capitalize;
    margin-bottom: 61px;
    align-self: flex-start;
    & span{
        color: #21D373;
    }
    @media (max-width: 700px) {
            font-size: 25px;
        }
}

& .accordion-wrapper{
    width: 73%;
}

`