import styled from "styled-components";

export const AccordianContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  flex-wrap: wrap;
  height: auto;
  margin-top: 10px;
  @media (max-width: 700px) {
    max-width: 100%;
  }
  & .accordion_faq {
    min-height: 66px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: inherit;
    border-radius: 10px;
    & h3 {
      width: 80%;
      font-size: 16px;
      font-weight: 800;
      @media (max-width: 700px) {
        font-size: 14px;
      }
    }
  }
  & .activeShow {
    border-bottom: 1px solid #dfdfdf;
    border-radius: 10px 10px 0 0;
  }

  & .svg-icons{
   
      /* content: "";
      position: absolute; */
      background: #694BED;
      border-radius: 50%;
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg{
      fill: #fff;
    }
  }
`;

export const AccordianAnswer = styled.div`
    background-color: #ffffff;
    border-radius: 0 0 5px 5px;
    width: 100%;
    border: 1px solid rgba(112, 112, 112, .15);

  & p {
    font-size: 16px;
    width: 90%;
    margin: auto;
    color: rgba(0, 0, 0, 0.5);
    line-height: 1.4;
    padding-top: 9px;
    text-align: justify;
    @media (max-width: 700px) {
      width: 90%;
      font-size: 12px;
    }
  }
`;

export const AccordionMain= styled.div`
    display: flex;
    flex-direction: column;
    width: 94%;
`