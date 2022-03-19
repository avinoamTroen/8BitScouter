import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const TitledNumInput = (props) => {
    const [num, localSetNum] = useState(props.getNum().toString());
    const onChangeNum = (newNum) => {
        numType = typeof parseFloat(newNum)
        // NaN (Not a Number) is the is the only value not equal to itself so the scond condition will return true if newNum is NaN
        if (numType != "number" || isNaN(newNum) || newNum == "") {
            props.setNum(0);
            localSetNum('0')
        }
        else {
            newNum = parseFloat(newNum)
            props.setNum(newNum);
            localSetNum(props.getNum().toString());
        }

    }
    return (
        <View
            style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>{props.title}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNum}
                value={num}
                keyboardType="numeric"
            />
        </View>
    )
}

export default TitledNumInput;
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
        alignItems: 'center'

    },
    input: {
        margin: 12,
        padding: 10,
        flex: 3
    }
})