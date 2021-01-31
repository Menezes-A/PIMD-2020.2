import React, { Component } from 'react'
import { Button, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import IMCCalc from './IMCCalc'

export class IMCApp extends Component {
    constructor(props){
        super(props)
        this.state = { //aqui ficam as variaveis que são mutavel 
            pesoEstado: 0,
            alturaEstado:0.0,
            pesoMudado:0,
            alturaMudado:0.0,
        }
    }

    calcular(){
        this.setState({
            alturaEstado: this.state.alturaMudado,
            pesoEstado: this.state.pesoMudado,
        })
    }

    render() {
        return (
           <View style={style.container}>
                <View style={style.entradas}>
                   <TextInput  style ={style.input} placeholder="Peso" keyboardType="numeric" onChangeText={(peso) => this.setState({pesoMudado:peso})}> 
                   </TextInput>
                   <TextInput  style ={style.input} placeholder="Altura" keyboardType="numeric" onChangeText={(altura) => this.setState({alturaMudado:altura})}>
                   </TextInput>
                </View> 
                <Button title="Calcular" onPress={()=>this.calcular()}></Button>
               <IMCCalc peso={this.state.pesoEstado} altura={this.state.alturaEstado}></IMCCalc> 
       
           </View>  
        )
    }
}

const style = StyleSheet.create({
    entradas:{
        flexDirection:'row',
    },

    input:{
        height:80,
        textAlign: 'center',
        width: '50%',
        fontSize:50,
        marginTop:24,
      },
    
//     button:{
//         backgroundColor:'#23BAC4',
//     },

//     buttonText:{
//         fontSize:50,
//         textAlign: 'center',
//         padding:30,
//         fontSize:30,
//         fontWeight:'bold',
//     }
 });

export default IMCApp
