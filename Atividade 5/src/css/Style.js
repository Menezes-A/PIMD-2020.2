import { StyleSheet } from "react-native";


const estilo = StyleSheet.create({
    header:{
        backgroundColor: "gray",
        textAlign: "center",
        padding: 10,
    },

    imagem:{
        width: 200,
        height:200,
    },

    card:{ 
        width: 220,
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        borderRadius: 10,
        alignContent:"center",
    },
    
    title:{
        fontSize: 20,
        fontWeight: "bold",
    },

    container:{
        flex: 1,
        alignItems:"center",
    }

});

export {estilo}