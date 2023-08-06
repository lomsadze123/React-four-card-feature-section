import { styled } from 'styled-components'
import Header from "./components/header"
import Cards from './components/cards'

function App() {

  return (
    <Body>
      <Header />
      <Cards />
    </Body>
  )
}

export default App

const Body = styled.div`
  background-color: #FAFAFA;
  min-height: 100vh;
  padding: 0 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7.6rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`