import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AlbumList from './Atividade 5/src/componentes/AlbumList';
import Header from './Atividade 5/src/componentes/Header';
import RotaSistema from './Atividade 5/src/componentes/Routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <RotaSistema>
      </RotaSistema>
    </SafeAreaProvider>

  )
};

