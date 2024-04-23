// importing Hooks.
import {useState} from 'react'

// importing Styled components..
import {
  MainContainer,
  SubContainer,
  Card,
  Heading,
  CardNumber,
  CardCaption,
  UserName,
  InputTitle,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setNumber] = useState('')
  const [userName, setName] = useState('')

  const changeName = event => {
    setName(event.target.value)
  }

  const changeNumber = event => {
    setNumber(event.target.value)
  }

  return (
    <MainContainer>
      <SubContainer card>
        <Heading>Credit Card</Heading>
        <Card card data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <div>
            <CardCaption>CARDHOLDER NAME</CardCaption>
            <UserName>{userName}</UserName>
          </div>
        </Card>
      </SubContainer>
      <SubContainer>
        <Card>
          <InputTitle>Payment Method</InputTitle>
          <Input
            type="text"
            name="number"
            onChange={changeNumber}
            placeholder="Card Number"
          />
          <Input
            type="text"
            name="name"
            onChange={changeName}
            placeholder="Cardholder Name"
          />
        </Card>
      </SubContainer>
    </MainContainer>
  )
}

export default CreditCard
