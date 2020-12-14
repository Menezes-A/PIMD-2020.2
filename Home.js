import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export class Home extends Component {
    constructor(props){
        super(props);

        this.state= { //lista de cidade para que o props chame ela para pode fazer a votação
            cidades:[
                { cidade:"Fortaleza", valor:0 },
                { cidade:"Quixadá", valor:0 },
                { cidade:"Limoeiro", valor:0 },
            ],
        }
    }

    somar(index){
        let array = [...this.state.cidades] //os 3 pontos seve para copiar o array
        array[index].valor = array[index].valor + 1;
        this.setState({
            cidades: array,
        })

    }

    render() {
        let cidades = [];
        let botoes = [];

        this.state.cidades.map((busca, index)=> { //variavel para receber a cidades //index é a posição do objeto para n dá erro no console log
          cidades.push(<Text key= {index}>{busca.cidade}: {busca.valor} votos </Text>) //ele vai por isso dentro do arraio vazio criado lá em cima por causa do push
          botoes.push(<Button key={index} title={busca.cidade} onPress={()=>{this.somar(index)}}></Button>)
        }) //para redirecionar para o state //map é um tipo de arreio

        
        return (
            <View>
                {cidades}
                {botoes}  
            </View>
        )
    }
}

export default Home
