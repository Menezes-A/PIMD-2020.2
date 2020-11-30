import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabeçalho from './componentes/Cabeçalho';
import Corpo from './componentes/Corpo';
import Disciplina from './componentes/Disciplina';

export default function App() {
  return (
    <View>
      <Cabeçalho nome="Raul" curso="Engenharia Civil"></Cabeçalho>

      <Disciplina disciplina="Calculo I"></Disciplina>

      <Disciplina disciplina="Calculo II"></Disciplina>

      <Corpo></Corpo>
    </View>
  );
}


