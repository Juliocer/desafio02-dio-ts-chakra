import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';

function App() {

  return (
    <>
      <ChakraProvider>
        <Header />
        <Card />
      </ChakraProvider>
    </>
  );
}

export default App;

/* Versões anteriores. Estava estudando e atualizando o codigo. estudando o useState */
/* 
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const [retira, setRetira] = useState('');

  const retirar = () => {
    if(value !== 0){
      setValue(value -1)
      setRetira('')
    }else{
      setRetira('O valor chego a 0')
    }
  }

  const add = () => {
    setValue(value + 1)
    setRetira('')
  }

  return (
    <>
      <button onClick={add}>add</button>
      <button onClick={retirar}>retirar</button>
      <h1>{value}</h1>
      <h2>{retira}</h2>

    </>
  );
}
*/

/* 
  <button onClick={() => setValue(value + 1)}>add</button>
  <button onClick={() => setRetira(retira - 1)}>retirar</button>
  <h1>{value}</h1>
  <h2>{retira}</h2>
*/

/* 
  <ChakraProvider>
    <Header />
    <Card />
  </ChakraProvider>
*/