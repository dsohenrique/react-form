import React from 'react';
import { Form } from '@unform/web';
import './App.css';
import Input from './components/form/input'

function App() {

  function handleSubmit(data){
    console.log(data);
  }

  return (
    <div className="App">
     <h1>Hello world!</h1>
     <Form onSubmit={handleSubmit}>
        <Input name="name"/>
        <Input type="email" name="email"/>
        <Input type="password" name="password"/>

        <button type="submit">Enviar</button>
     </Form>
    </div>
  );
}

export default App;
