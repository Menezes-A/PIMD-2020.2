import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { estilo } from '../css/Style'

export class Header extends Component {
    render() {
        return (
            <div>
                <View style={estilo.header}> 
                    <Text>
                       {this.props.tituloApp}
                    </Text>
                </View>
            </div>
        )
    }
}

export default Header
