import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   
    optionContainer: {
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: "lightgrey",
        borderRadius: 10,
        width: "48%",
        height: "48%",
        alignItems: "center",
        padding: 10
    },
    Disabled : {
        backgroundColor : "#F4F4F4",
        tintColor : "lightgray"
    },
    selectedContainer : {
        backgroundColor : "#DDF4FE",
        borderColor : "#81D5FE"
    },
    optionImage: {
        width: "100%",
        flex: 1
    },
    selectedText : {
        color : "#40BEF7"
    },
    optionText: {
        textTransform : "capitalize",
        fontWeight : "bold"
    },
    
});