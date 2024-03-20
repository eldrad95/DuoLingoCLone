import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        backgroundColor : "#58CC02",
        height : 50,
        alignSelf : "stretch",
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 5,
        borderBottomWidth : 5,
        borderColor : "#57A600",
        marginVertical : 10
    },
    disabledContainer : {
        backgroundColor  : "lightgrey",
        borderColor : "grey"
    },
    text: {
        fontSize : 20,
        color : "white",
        fontWeight : "bold",
        borderColor : "white",
        borderBottomWidth : 1.5,
        textTransform : "capitalize"
    }
})

