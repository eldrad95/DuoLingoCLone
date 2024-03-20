import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
   root: {
      marginTop: 20,
      marginBottom : 10,
      flexDirection: "row",
      alignItems : "center"
   },
   liveContainer: {
      flexDirection: "row",
      marginHorizontal: 10,
   },
   icon: {
      height: 20,
      width: 20,
      alignSelf: "center",
   },
   liveText: {
      color : "#FF6464",
      fontWeight : "bold",
      marginLeft : 5,
      marginTop : "auto",
      marginBottom : "auto",
      verticalAlign : "middle"
   }
});