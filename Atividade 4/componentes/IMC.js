import React, { Component } from 'react'
import { Button, TextInput, View } from 'react-native'

export class IMC extends Component {
    constructor(props){
        super(props)
        this.state = {
            altura: 0,
            peso: 0
        }
    }
    render() {
        return (
            <View>
                <TextInput placeholder="Altura" onChangeText={(alturaDigitada)=>{this.setState({altura: alturaDigitada})}}></TextInput>
                <TextInput placeholder="Peso" onChangeText={(pesoDigitado)=>{this.setState({peso: pesoDigitado})}}></TextInput>

                <Button title="CALCULAR" onPress={()=>{this.props.navigation.navigate('RESULTADO', {altura:this.state.altura, peso:this.state.peso})}}></Button>
            </View>
        )
    }
}

export default IMC
