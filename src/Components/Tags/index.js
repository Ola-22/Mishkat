import React from "react";
import Card from "./Card";
import * as S from "./style";

function Tags() {
  return (
    <>
      <S.TagsMain>
        <S.Container>
          <div className="container">
            <Card
              backgroundColor="rgba(250, 91, 88, 0.10)"
              src="./assets/images/courses.png"
              alt="courses"
              title="courses"
              count="+200"
            />
            <Card
              backgroundColor="rgba(255, 152, 51, 0.10)"
              src="./assets/images/students.png"
              alt="students"
              title="students"
              count="+200"
            />
            <Card
              backgroundColor="rgba(120, 94, 243, 0.10)"
              src="./assets/images/countries.png"
              alt="countries"
              title="countries"
              count="+200"
            />
          </div>
          <S.PaymentContainer>
            <h6>Trusted by 50+ Cpmpanies Worldwide</h6>
            <div>
              <img src="./assets/images/amazon.png" alt="amazon payment" />
              <img src="./assets/images/stripe.png" alt="stripe payment" />
              <img src="./assets/images/paypal.png" alt="paypal payment" />
              <img src="./assets/images/slack.png" alt="slack payment" />
              <img src="./assets/images/airbnb.png" alt="airbnb payment" />
            </div>
          </S.PaymentContainer>
        </S.Container>
      </S.TagsMain>
    </>
  );
}

export default Tags;
