import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        width: "100%",
        verticalAlign : "middle",
        padding : 5
    },
    row: {
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: 'center',
        marginBottom : 5
    },
    mascot: {
        width: "30%",
        aspectRatio: "3/4",
        marginRight : 10
    },
    sentenceContainer: {
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 5,
        padding: 10,
        borderBottomLeftRadius : 0,
        marginBottom : "25%"
    },
    sentence: {

    },
    tipContainer:{
        position : "absolute",
        bottom : 0,
        left : 0
    },
    tip : {
        width: 0,
        height: 0,
        position: "absolute",
        left : -20,
        bottom: -1,
        borderWidth: 20,
        borderRightWidth : 0,
        borderLeftColor : "transparent",
        borderTopColor : "transparent",
        borderBottomColor : "#E6E6E6",
    },
    tipin : {
        width: 0,
        height: 0,
        position: "absolute",
        left : -16,
        bottom: 0.5,
        borderWidth: 17,
        borderRightWidth : 0,
        borderLeftColor : "transparent",
        borderTopColor : "transparent",
        borderBottomColor : "#FFF",
    },
    textInput: {
        fontSize : 16,
        alignSelf : "stretch",
        flexDirection: "column",
        flex : 1,
        backgroundColor: "#F4F4F4",
        borderColor : "#E6E6E6",
        borderWidth : 2,
        padding : 10,
        borderRadius : 10,
        textAlignVertical : "top",
    },
});