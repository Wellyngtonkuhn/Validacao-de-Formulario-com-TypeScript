import styled from 'styled-components'

import Form from './components/Form';

export default function App() {

  
  return (
    <>
      <Main>
        <Form />

      </Main>
    </>
  );
}


const Main = styled.main`
  background-color: #2d2c30;
  min-height: 100vh;
  min-width: 100vw;

`
