import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


export class IMCMsg extends Component {
    render() {
        let  analise ="";
        
        if(this.props.imc < 17){
            analise="Muito baixo do peso";
        }else if (this.props.imc > 17 && this.props.imc < 18.49){
            analise="Abaixo do peso";
        }else if (this.props.imc > 18.5 && this.props.imc < 24.99){
            analise="Normal";
        }else if (this.props.imc > 25 && this.props.imc < 29.99){
            analise="[ALERTA] Acima do peso";
        }else if (this.props.imc > 30 && this.props.imc < 34.99){
            analise="Obesidade Tipo 1";
        }else if (this.props.imc > 35 && this.props.imc < 39.99){
            analise="Obesidade Tipo 2";
        }else if (this.props.imc > 40 ){
            analise="Obesidade Tipo 3";
        }


        return (
            <View>
                <Text style={style.resultado}>
                    CATEGORIA DO IMC: {analise}
                </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    resultado:{
        textAlign:'center',
        color:'black',
        fontSize:20,
        padding:15,
        fontWeight:'bold',
    },

});

export default IMCMsg
