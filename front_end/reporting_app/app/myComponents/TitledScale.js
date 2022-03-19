import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ChoiceList } from "./ChoiceList";

const TitledScale = (props) => {
    const getNumbers = (max) => {
        // always have -1
        const arr = [-1];

        // add range from 1 to max including max
        for (let i = 1; i <= max; i++) {
            arr.push(i);
        }
        return arr
    }

    const numbers = getNumbers(props.max);
    return (
        <View
            style={styles.textInputContainer}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.textInputTitle}>{props.title}</Text>
                <Text>Scale is from <Text style={{ fontWeight: 'bold' }}>1</Text> to <Text style={{ fontWeight: 'bold' }}>{props.max}</Text></Text>
                <Text>Choose <Text style={{ fontWeight: 'bold' }}>-1</Text> if not relevant</Text>
            </View>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 2, alignItems: 'center' }}>
                <ChoiceList
                    getCurrentChoice={props.getCurrentChoice}
                    setCurrentChoice={props.setCurrentChoice}
                    array={numbers}

                />
            </View>
            <View style={{ flex: 1 }}></View>


        </View>
    )
}
export default TitledScale;

const styles = StyleSheet.create({
    textInputTitle: {
        fontSize: 20,
        fontWeight: "bold",
        height: 35
    },
    textInputContainer: {
        backgroundColor: 'burlywood',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 80

    },
    input: {
        margin: 12,
        padding: 10,
        flex: 3
    }
})