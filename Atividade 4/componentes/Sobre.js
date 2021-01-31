import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export class Sobre extends Component {
    render() {
        return (
            <View>
               <Text> Oi eu sou a Ana Livia, pff me passa de semestre, nunca te pedi nada bjs </Text> 
               <Button title="HOME" onPress={()=>{this.props.navigation.navigate('HOME')}}></Button>
            </View>
        )
    }
}

export default Sobre
