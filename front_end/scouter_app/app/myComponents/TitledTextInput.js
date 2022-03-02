import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const TitledTextInput = (props) => {
    const [text, setText] = useState(props.getText());
    const onChangeText = (newText) => {
        props.setText(newText);
        setText(props.getText());
    }
    const flipped = props.flipped ? { flexDirection: 'row' } : { flexDirection: 'column' }
    let multiline = true;
    if (props.multiline === false) { multiline = false; }
    return (
        <View
            style={[styles.textInputContainer, flipped]}>
            <Text style={styles.textInputTitle}>{props.title}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={props.placeholder}
                multiline={multiline}
                maxLength={props.maxLength}
            />
        </View>
    )
}

export default TitledTextInput;
const styles = StyleSheet.create({
    textInputTitle: {
        fontSize: 20,
        fontWeight: "bold",
        height: 35
    },
    textInputContainer: {
        flex: 1,
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        flexDirection: 'column'

    },
    input: {
        margin: 12,
        padding: 10,
        flex: 3
    }
})