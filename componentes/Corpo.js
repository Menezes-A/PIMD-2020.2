import React, { Component } from 'react'
import { Image, View } from 'react-native'

export class Corpo extends Component {
    render() {
        let foto = {
            uri: "https://www.unifesspa.edu.br/images/conteudo/2018/Destaque_Ponte.jpg"
        } // como colocar uma imagem puxada da internet //uri:"./pagina/nome do arquivo.jpg"
        return (
            <Image source={foto} style={{width:400, height:400}}/>
        )
    }
}

export default Corpo
