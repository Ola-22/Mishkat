import { useEffect, useState } from "react";
import * as S from "./style";
import data from "../../data.json"
import { BiPlus, BiMinus } from 'react-icons/bi';


function Accordion({ homeData, language }) {
  const [show, setShow] = useState(-1);
  const [dataQuestion, setDataQuestions] = useState()

  useEffect(() => {
    setDataQuestions(data.Questions)
  }, [])

  function handleToggle(index) {
    if (index === show) {
      setShow(-1);
      return;
    }

    setShow(index);
  }

  return (
    <S.AccordionMain>
      {dataQuestion?.slice(0, 5)?.map((item, index) => (
        <div key={index} onClick={() => handleToggle(index)}>
          <S.AccordianContainer style={{border : `${show} ? "1px solid rgba(112, 112, 112, .15) : "none`}}>
            <div
              className={
                show === index ? "accordion_faq activeShow" : "accordion_faq"
              }
            >
              <h3>{item.question}</h3>

              <div>
                {/* <img
                  src="./images/Accordion.png"
                  alt="Accordion"
                
                /> */}
                {show !== index ? <BiPlus /> : <BiMinus />}
              </div>
            </div>

            <S.AccordianAnswer>
              <p
                className={show === index ? "active" : "inActive"}
                dangerouslySetInnerHTML={{
                  __html: item.answer,
                }}
              />
            </S.AccordianAnswer>
          </S.AccordianContainer>
        </div>
      ))}
    </S.AccordionMain>
  );
}

export default Accordion;