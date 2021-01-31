import React, { Component } from 'react'
import { Button, View } from 'react-native'

export class Home extends Component {
    render() {
        return (
          <View>
              <Button title="Cadastro" onPress={()=>{this.props.navigation.navigate("CADASTRO")}}></Button>

              <Button title="IMC" onPress={()=>{this.props.navigation.navigate("IMC")}}></Button>

              <Button title="Sobre" onPress={()=>{this.props.navigation.navigate("SOBRE")}}></Button>
          </View>
        )
    }
}

export default Home
