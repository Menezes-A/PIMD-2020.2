import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { estilo } from '../css/Style';
import AlbumDetail from './AlbumDetail';
import Header from './Header';

export class AlbumList extends Component {
    constructor(props){
        super(props);
        this.state = {
            albuns: [], //ele vai receber os albuns 
        }
    }

    componentDidMount(){ 
        fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json')
        .then((response)=> response.json())
        .then((responseJson)=>{
            this.setState({
                albuns: responseJson.albums
            })
        })
    }

    render() {
        console.log(this.state.albuns)
        let cards = []
        this.state.albuns.map((item, index) => {
            cards.push(<AlbumDetail key={index} tituloAlbum={item.name} artista={item.artist} imagem={item.image} id={item.id} navigation={this.props.navigation}></AlbumDetail>)
        }) //index valor do array

        

        return (
            <View style={estilo.container}>
                <Header tituloApp="Lista de Musicas"></Header>
                <Text> 
                    Minha Galeria de Album! 
                </Text>
                {cards}
            </View>
        )
    }
}

export default AlbumList
