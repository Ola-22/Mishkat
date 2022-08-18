import React from "react";
import * as S from "./style"

function ContactUs() {
  return (
    <S.ContactContainer>
      <div className="title-container">
        <h2 className="title">
          <span>contact</span> us
        </h2>
        <p>
          You can contact us at any time from the contact form below or call us
          on the unified number (from Sunday to Thursday from 9 am to 5 pm)
        </p>
      </div>
      <S.InputContainer>
        <div className="inputs">
          <input placeholder="name" value="" />
          <input placeholder="email" value="" />
        </div>
        <textarea
        className="textarea"
          placeholder="more details"
          name="w3review"
          rows="4"
          cols="50"
        />

        <button>send</button>
      </S.InputContainer>
    </S.ContactContainer>
  );
}

export default ContactUs;
