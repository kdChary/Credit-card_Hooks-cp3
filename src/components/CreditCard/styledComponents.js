import styled from 'styled-components'

// Styling Main container
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`
const SubContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
  padding: 23px;

  display: inline-flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => (props.card ? '#3b4b69' : '#ffffff')};
`

const Card = styled.div`
  width: 290px;
  height: 175px;
  margin: auto;
  padding: 11px;
  padding-top: ${props => props.card && '5vh'};

  display: flex;
  flex-direction: column;
  //   justify-content: space-around;

  background-color: ${props => !props.card && '#ffffff'};
  background-image: url(${props =>
    props.card && 'https://assets.ccbp.in/frontend/hooks/credit-card-bg.png'});
  background-position: center;
  background-size: cover;

  border: none;
  border-radius: 11px;
  box-shadow: 0 4px 10px 0 ${props => (props.card ? '#d3d9e0' : '#c3cad9')};
`
// Styling Text contents
const Heading = styled.h2`
  color: #ffffff;
  font-family: 'Roboto';

  text-align: center;
  text-decoration: underline 2px #ffd773;
  letter-spacing: 0.7px;
`
const CardNumber = styled.p`
  color: #ffffff;

  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 600;
`
const CardCaption = styled(CardNumber)`
  font-size: 11px;
  font-weight: 500;
`

const UserName = styled(CardNumber)`
  font-size: 14px;
  font-weight: 500;
`

const InputTitle = styled.h5`
  color: #475569;
  font-size: 15px;
  text-align: center;
`

// Styling Input..
const Input = styled.input`
  width: 90%;
  margin: 7px auto;
  padding: 5px 11px;

  border: solid 1.3px #475569;
  border-radius: 5px;
  background: transparent;

  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: #475569;
`
export {
  MainContainer,
  SubContainer,
  Card,
  Heading,
  CardNumber,
  CardCaption,
  UserName,
  InputTitle,
  Input,
}
