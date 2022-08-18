import styled from "styled-components"

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 85%;
    margin-top: 136px;

    & .title-container{
        display: flex;
        width: 100%;
        flex-direction: column;
        & p{
            color: #6E7187;
            font-size: 16px;
            max-width: 756px;
        }
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 44.4px;

    & .inputs{
        display: flex;
        justify-content: space-between;
        margin-bottom: 31px;
        & input{
            max-width: 480px;
            width: 100%;
            height: 50px;
            padding-inline-start: 26px;
            &::placeholder{
                text-transform: capitalize;
            }
        }
    }

    & input, & .textarea{
        border: 1px solid #DEDEDE;
            border-radius: 40px;
            box-shadow: 0 15px 20px rgba(0, 145, 255, 0.10);
            outline: none;
    }
    & .textarea{
            width: 100%;
            resize: none;
            height: 298px;
            padding-inline-start: 30.4px;
            padding-top: 23px;
            margin-bottom: 45.4px;
            &::placeholder{
                text-transform: capitalize;
            }
        }

        & button{
            max-width: 132px;
            width: 100%;
            height: 40px;
            background: linear-gradient(to left, #008EFA, #14C7FF);
            box-shadow: 0 6px 15px rgba(7, 161, 252, 0.5);
            border-radius: 20px;
            border: none;
            font-size: 14px;
            text-transform: capitalize;
            color: #ffffff;
            align-self: center;
        }
`