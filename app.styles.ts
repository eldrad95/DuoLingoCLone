import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingTop : 30
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "stretch"
    },
    optionsContainer: {
        width: "100%",
        flexWrap: "wrap",
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        alignContent: "space-between",
        verticalAlign: "middle"
    },
    loadingIndicator : {
        flex  :1,
        justifyContent : 'center'

    }
});
