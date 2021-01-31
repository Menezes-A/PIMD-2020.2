import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RotaGeral from './Atividade 4/componentes/Rotas';

export default function App() {
  return (
    <SafeAreaProvider>
      <RotaGeral></RotaGeral>
    </SafeAreaProvider>
  )
};
