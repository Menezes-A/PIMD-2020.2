import React, { Component } from 'react'
import { Button, Image, Text, View } from 'react-native'

export class Perfil extends Component {
    render() {
        return (
            <View>
                <Image source={{uri:'https://i.pinimg.com/236x/5e/31/12/5e31120747ba14103fdf420cfa37800b.jpg'}} style={{width: 100, height: 100}}></Image>
                <Text>Nome: {this.props.route.params.nome}</Text>
                <Text>Idade: {this.props.route.params.idade}</Text>
                <Text>Email: {this.props.route.params.email}</Text>
                <Button title="HOME" onPress={()=>{this.props.navigation.navigate('HOME')}}></Button>
            </View> 
        )
    }
}

export default Perfil
