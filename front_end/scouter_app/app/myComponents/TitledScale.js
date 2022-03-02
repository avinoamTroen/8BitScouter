import React, { useState } from "react";
import { View, StyleSheet, Text, Picker } from "react-native";



const Separator = () => {
    return (
        <View
            style={{
                height: 50,
                width: 1,
                backgroundColor: "white",
            }}
        />
    );
}

const TitledScale = (props) => {
    return (
        <View
            style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>{props.title}</Text>

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