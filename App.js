import './App.css';
import styled from 'styled-components';

const Title = styled.h1`
font-size: 30px;
text-align: center;
color: red;
`;

const Section = styled.section`
padding = 40px;
color = red;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 20px;
  border: 2px solid green;
  color: red;
  margin: 13px;
  padding: 7px;
`;

const Container = styled.div`
  text-align: center;
`

function App() {
  return (
  <>
  <Title>INI ADALAH BAGIAN DARI H1</Title>
   <Section>this is my description</Section><br/>
   <Button>Lanjutkan</Button>
   </>
  );
}

export default App;
