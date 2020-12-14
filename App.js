import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Home from './Atividade 2/Home';
import Navbar from './Atividade 2/Navbar';

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor={"#381859"}></StatusBar>
      <Navbar></Navbar>
      <Home></Home>
    </View>
  );
}


