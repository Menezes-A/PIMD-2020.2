import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { estilo } from '../css/Style'
import Card from './Card'
import CardItem from './CardItem'

export class Modal extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                   <Text style={estilo.title}>  
                      {this.props.route.params.album} 
                   </Text> 
                   <Text>Lista de Musicas</Text> 
                </CardItem>

                <CardItem>
                  <Text>
                  {this.props.route.params.lista}
                  </Text>  
                </CardItem>

                <CardItem>
                    <Button title="Voltar" onPress={()=> {this.props.navigation.navigate("Home")}}></Button>
                </CardItem>
            </Card>
        )
    }
}



export default Modal
