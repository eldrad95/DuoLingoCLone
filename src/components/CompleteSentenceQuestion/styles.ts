import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root :{
        width : "100%",
        height : "100%",
        flex : 1,
        flexDirection : "column",
        justifyContent : "space-between"
        
    },
    image : {
        alignSelf : "stretch",
        width : "100%"
    },
    sentenceContainer : {
        flexDirection : "row",
        alignItems : "center"
    },
    text : {
        fontSize : 18,
    },
    sentence : {
        borderStyle : "dotted",
        paddingBottom  :5,
        borderBottomWidth : 1,
    },
    answer : {
       
        minWidth : 100
    },
    optionsContainer : {
        flexDirection : "row",
        backgroundColor : "white",
        marginLeft : "auto",
        marginRight : 20,
        marginBottom : 100,
        width : "100%",
        justifyContent : "flex-end"
    },
    option : {
        margin : 5,
        borderWidth : 1,
        borderRadius : 10, 
        padding  :5,
        textAlign : "center",
        minWidth : 50,
        borderColor : "lightgrey",
    },
    activeCell :{
        backgroundColor : "lightblue"
    },
    selectedValue : {
        backgroundColor : "lightgrey"
    },
    help: {
        fontStyle : "italic"
    }
});