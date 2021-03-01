import React, { Component } from 'react'
import { View } from 'react-native'
import { estilo } from '../css/Style'

export class Card extends Component {
    render() {
        return (
            <View style={estilo.card}>
                {this.props.children}
            </View>
        )
    }
}

export default Card
