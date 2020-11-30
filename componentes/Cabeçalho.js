import React, { Component } from 'react'
import { Text, View } from 'react-native'


export class Cabeçalho extends Component {
    constructor(props){ //props são adereçõs, informações e heranças
        super(props);
    }
    render() {
        return (
          <View>
              <Text>
                {this.props.nome}
              </Text>
              <Text>
                {this.props.curso}
              </Text>       
          </View>
        )
    }
}

export default Cabeçalho
