import React from "react"; 
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Cadastro from "./Cadastro";
import IMC from "./IMC";
import Sobre from "./Sobre";
import Resultado from "./Resultado";
import Perfil from "./Perfil";

const rotas = createStackNavigator(); //mudar de paginas 
const rotasgerais = createStackNavigator();

//NavigationContainer pilhas de paginas para poder mudar as telas e não ficar tudo em uma tela só, a primeira tela é o home  

function RotaPrincipal(){
    return(
        // <NavigationContainer>
             <rotas.Navigator initialRouteName="Home">
                 <rotas.Screen name="HOME" component={Home}></rotas.Screen> 
                 <rotas.Screen name="CADASTRO" component={Cadastro}></rotas.Screen> 
                 <rotas.Screen name="IMC" component={IMC}></rotas.Screen> 
                 <rotas.Screen name="SOBRE" component={Sobre}></rotas.Screen> 
                 <rotas.Screen name="RESULTADO" component={Resultado}></rotas.Screen> 
             </rotas.Navigator> 
        // </NavigationContainer> 

    )
}

export default function RotaGeral(){
    return(
        <NavigationContainer>
        {/* <RotaPrincipal></RotaPrincipal> */}
           <rotasgerais.Navigator initialRouteName="principal">
                 <rotasgerais.Screen name="principal" component={RotaPrincipal} options={{headerShown:false}}></rotasgerais.Screen>
                 <rotasgerais.Screen name="rotaPerfil" component={Perfil} options={{headerShown:false}}></rotasgerais.Screen>
         </rotasgerais.Navigator>
        </NavigationContainer>

    )
}