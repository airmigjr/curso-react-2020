import logo from './logo.svg';
import './App.css';
import React from 'react';


function App(props){

  const modificarNome = event => {
    console.log(event.target.value)
  }


  const criaComboBox = () => {
    const opcoes = ["Fulano", "Cicrano"]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)

    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

 


    const MeuCombobox = () => criaComboBox()
    //acima criei uma tag personalizada e a chamei abaixo da chamada da função que cria o combobox em javascript
    //as tags personalizadas tem que ser obrigatoriamente inicializadas com letra maiúscula
    return (

      <>
      <input className="text-centralizado" value={props.nome} onChange={modificarNome}></input>
      
      <h1>Hello {props.nome}, sua idade é {props.idade}</h1>
      {criaComboBox()}
      <MeuCombobox />
      </>

     /* [
      <input type="text" value={this.state.nome} onChange={this.modificarNome}></input>,
      <h1>Hello {this.state.nome}</h1>
      

      ]*/
    )
  
}
export default App;
