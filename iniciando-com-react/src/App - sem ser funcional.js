import logo from './logo.svg';
import './App.css';
import React from 'react';

function ComponenteFuncional(){
  return(
    <h1>Hello</h1>
  )
}

class App extends React.Component{

  state = {
    nome: ""
  }

 /* constructor(){
    super()
    this.modificarNome = this.modificarNome.bind(this)
  }
  modificarNome(event){
    this.setState({
      nome: event.target.value
    })
  }*/
  //Ao invés de se utilizar um construtor para poder criar uma função normal para inserir o estado, pode-se simplesmente
  //usar a arrow function, para que o this se refira à classe, já que o this dentro da função normal, tem escopo somente
  //dentro da função

  modificarNome = (event) => {
    let name = event.target.value;
    this.setState({
      nome: name
    })
  }

  criaComboBox = () => {
    const opcoes = ["Fulano", "Cicrano"]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)

    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

    componentDidMount(){

      console.log("Executou o componentDidMount");
    }





  render(){
    console.log("Executou o render");

    const MeuCombobox = () => this.criaComboBox()
    //acima criei uma tag personalizada e a chamei abaixo da chamada da função que cria o combobox em javascript
    //as tags personalizadas tem que ser obrigatoriamente inicializadas com letra maiúscula
    return (

      <>
      <input type="text" value={this.state.nome} onChange={this.modificarNome}></input>
      <h1>Hello {this.state.nome}</h1>
      <h1>Hello {this.props.nome}, sua idade é {this.props.idade}</h1>
      {this.criaComboBox()}
      <MeuCombobox />
      </>

     /* [
      <input type="text" value={this.state.nome} onChange={this.modificarNome}></input>,
      <h1>Hello {this.state.nome}</h1>
      

      ]*/
    )
  }
}
export default App;
