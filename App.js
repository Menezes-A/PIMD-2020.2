import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import IMCApp from './IMC/IMCApp'; 

export default function App() {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={"#381859"}></StatusBar>
      <IMCApp></IMCApp>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#D3D3D3',
  }

});


