import React from 'react';
import { Text, View, Image, ImageURISource } from 'react-native';
import { styles } from "./styles";

export interface IImageOptionProps {
    key : number,
    id : string,
    text : string,
    imageUri : string,
    isSelected : boolean,
    disabled : boolean,
    onPress : (itemId : string) => void

}

export const ImageOption = (props : IImageOptionProps) => {

    return (
        <View onTouchStart={() => !props.disabled ? props.onPress(props.id) : {}} style={[styles.optionContainer, props.isSelected ? styles.selectedContainer : {},props.disabled? styles.Disabled : {}]}>
            <Image style={[styles.optionImage, props.disabled ? styles.Disabled: {}]} source={{uri : props.imageUri}}
                resizeMode='contain'  />
            <Text style={[styles.optionText, props.isSelected ? styles.selectedText : {}]}>{props.text}</Text>
        </View>)
}