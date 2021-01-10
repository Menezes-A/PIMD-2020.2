import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IMCMsg from './IMCMsg';


export class IMCCalc extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let imc = this.props.peso/(this.props.altura * this.props.altura);
        return (
            <View>
                <Text  style={style.resultado}>
                 RESULTADO: {imc} 
                </Text>
                <IMCMsg imc={imc}></IMCMsg>
            </View>
        )
    }
}

const style = StyleSheet.create({
    resultado:{
        textAlign:'center',
        color:'black',
        fontSize:35,
        padding:15,
        fontWeight:'bold',
    },

});

export default IMCCalc
