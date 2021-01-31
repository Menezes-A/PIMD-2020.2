import React, { Component } from 'react'
import { Button, TextInput, View } from 'react-native'

//onChangeText={(nomeDigitado)=>{this.setState({nome:nomeDigitado})}}: quando o texto for mudado ele recebe (o que está sendo digitado) o que ta no estado: receber o que ta recebendo
<TextInput placeholder="Idade" onChangeText={(idadeDigitado)=>{this.setState({idae:idadeDigitado})}}></TextInput>
export class Cadastro extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"",
            idade: 0,
            email:"",
        }
    }
    render() {
        return (
            <View>
                <TextInput placeholder="Nome" onChangeText={(nomeDigitado)=>{this.setState({nome:nomeDigitado})}}></TextInput> 
                <TextInput placeholder="Idade" onChangeText={(idadeDigitado)=>{this.setState({idade:idadeDigitado})}}></TextInput>
                <TextInput placeholder="E-mail" onChangeText={(emailDigitado)=>{this.setState({email:emailDigitado})}}></TextInput>

                <Button title="Enviar" onPress={()=>{this.props.navigation.navigate("rotaPerfil", {nome: this.state.nome, idade:this.state.idade, email:this.state.email})}}></Button>
            </View>
        )
    }
}

export default Cadastro
